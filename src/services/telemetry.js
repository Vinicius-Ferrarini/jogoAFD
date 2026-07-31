// src/services/telemetry.js
// Camada de telemetria de pesquisa do TuringLab.
// Cada evento vira UM documento novo em /sessoes/{uid}/eventos/.

import { collection, addDoc, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db, ensureSession } from "./firebase";

const CONSENT_KEY = "turinglab_consent_accepted";

// Fase 6 — feedback de satisfação (documento único por sessão).
// Duas flags PROPOSITALMENTE separadas (ver docs/telemetria_turinglab.md):
// - shown_once: o popup automático já apareceu (respondido ou não) → nunca reaparece sozinho.
// - respondido: o jogador ENVIOU → controla o "check" visual do FAB.
const FEEDBACK_SHOWN_KEY = "turinglab_feedback_shown_once";
const FEEDBACK_DONE_KEY  = "turinglab_feedback_respondido";

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
/** O jogador já ENVIOU o feedback? (controla o check visual do FAB) */
export function hasFeedbackResponded() {
  return typeof window !== "undefined"
    && localStorage.getItem(FEEDBACK_DONE_KEY) === "true";
}
/** Marca que o jogador enviou o feedback. */
export function markFeedbackResponded() {
  if (typeof window !== "undefined") localStorage.setItem(FEEDBACK_DONE_KEY, "true");
}

/**
 * Grava a resposta de satisfação em /sessoes/{uid}/pesquisa_inicial/resposta
 * (ID FIXO, documento único). `setDoc` SEM merge: como a regra do Firestore
 * permite create mas nega update, uma 2ª gravação falha sozinha no servidor —
 * "só uma vez" garantido também no backend, sem reabrir as regras.
 * Gated por consentimento, igual ao logEvent. Nunca lança pro chamador.
 * @returns {Promise<{ok: boolean, reason?: string}>}
 */
export async function submitFeedback({ nota, comentario = "" }) {
  if (!hasConsent()) return { ok: false, reason: "no-consent" };
  try {
    const uid = await ensureSession();
    await setDoc(doc(db, "sessoes", uid, "pesquisa_inicial", "resposta"), {
      nota,
      comentario,
      timestamp: serverTimestamp(),
    });
    return { ok: true };
  } catch (erro) {
    console.warn("[telemetry] falhou ao enviar feedback:", erro);
    return { ok: false, reason: "error" };
  }
}
