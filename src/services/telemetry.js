// src/services/telemetry.js
// Camada de telemetria de pesquisa do TuringLab.
// Cada evento vira UM documento novo em /sessoes/{uid}/eventos/.

import { collection, addDoc, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db, ensureSession } from "./firebase";

const CONSENT_KEY = "turinglab_consent_accepted";

// Fase 6 — pesquisa de satisfação (VÁRIOS envios por sessão, cada um preservado).
// Cada envio cria um doc NOVO numerado (avaliacao_1, avaliacao_2, …) — nunca
// sobrescreve o anterior, compatível com as regras create-only.
// Flags/contador no localStorage (PROPOSITALMENTE separados):
// - shown_once: o popup automático já apareceu (respondido ou não) → nunca reaparece sozinho.
// - respondido: o jogador ENVIOU ao menos uma vez → controla o "check" visual do FAB.
// - count: quantas avaliações já foram enviadas (define o próximo índice avaliacao_N).
const FEEDBACK_SHOWN_KEY = "turinglab_feedback_shown_once";
const FEEDBACK_DONE_KEY  = "turinglab_feedback_respondido";
const FEEDBACK_COUNT_KEY = "turinglab_feedback_count";

/** true se o jogador já aceitou a coleta de dados neste navegador. */
export function hasConsent() {
  return typeof window !== "undefined"
    && localStorage.getItem(CONSENT_KEY) === "true";
}

/**
 * Marca o consentimento (localStorage, síncrono) e grava o evento
 * consentimento_aceito. Nunca lança erro pro chamador.
 */
export async function grantConsent() {
  localStorage.setItem(CONSENT_KEY, "true");
  try {
    const uid = await ensureSession();
    await addDoc(collection(db, "sessoes", uid, "eventos"), {
      tipo_evento: "consentimento_aceito",
      timestamp: serverTimestamp(),
    });
  } catch (erro) {
    console.warn("[telemetry] falhou ao gravar consentimento:", erro);
  }
}

/**
 * Grava um evento de telemetria. Nunca lança erro pro chamador.
 * Não coleta NADA antes do consentimento explícito.
 * @param {object} evento - campos livres, ex:
 *   { tipo_evento: "fim_fase", modulo: "afd-p1-01", estrelas_obtidas: 3 }
 */
export async function logEvent(evento) {
  if (!hasConsent()) return; // gate: nenhuma coleta antes do aceite
  try {
    const uid = await ensureSession();
    await addDoc(collection(db, "sessoes", uid, "eventos"), {
      ...evento,
      timestamp: serverTimestamp(),
    });
  } catch (erro) {
    console.warn("[telemetry] falhou ao gravar evento (ignorado):", erro);
  }
}

// ── Fase 6: feedback de satisfação ────────────────────────────────────────────
/** O popup automático já foi exibido alguma vez neste navegador? */
export function hasFeedbackShownOnce() {
  return typeof window !== "undefined"
    && localStorage.getItem(FEEDBACK_SHOWN_KEY) === "true";
}
/** Marca que o popup automático já apareceu (não reaparece mais sozinho). */
export function markFeedbackShownOnce() {
  if (typeof window !== "undefined") localStorage.setItem(FEEDBACK_SHOWN_KEY, "true");
}
/** O jogador já ENVIOU o feedback ao menos uma vez? (controla o check visual do FAB) */
export function hasFeedbackResponded() {
  return typeof window !== "undefined"
    && localStorage.getItem(FEEDBACK_DONE_KEY) === "true";
}
/** Marca que o jogador enviou o feedback (ao menos uma vez). */
export function markFeedbackResponded() {
  if (typeof window !== "undefined") localStorage.setItem(FEEDBACK_DONE_KEY, "true");
}
/** Quantas avaliações já foram enviadas neste navegador (0 se nenhuma). */
export function getFeedbackCount() {
  if (typeof window === "undefined") return 0;
  return parseInt(localStorage.getItem(FEEDBACK_COUNT_KEY) || "0", 10) || 0;
}

/**
 * Grava uma avaliação de satisfação como documento NOVO e numerado em
 * /sessoes/{uid}/pesquisa_inicial/avaliacao_{N} (N = próximo índice pelo contador
 * local). Cada envio é um CREATE independente (não sobrescreve os anteriores),
 * compatível com as regras create-only — permite reenviar quantas vezes quiser.
 * Gated por consentimento, igual ao logEvent. Nunca lança pro chamador.
 * @returns {Promise<{ok: boolean, reason?: string, indice?: number}>}
 */
export async function submitFeedback({ nota, comentario = "" }) {
  if (!hasConsent()) return { ok: false, reason: "no-consent" };
  const indice = getFeedbackCount() + 1;
  try {
    const uid = await ensureSession();
    await setDoc(doc(db, "sessoes", uid, "pesquisa_inicial", `avaliacao_${indice}`), {
      nota,
      comentario,
      indice,
      timestamp: serverTimestamp(),
    });
    // Só avança o contador após o CREATE dar certo (evita "pular" um índice em falha).
    if (typeof window !== "undefined") {
      localStorage.setItem(FEEDBACK_COUNT_KEY, String(indice));
    }
    markFeedbackResponded();
    return { ok: true, indice };
  } catch (erro) {
    console.warn("[telemetry] falhou ao enviar feedback:", erro);
    return { ok: false, reason: "error" };
  }
}
