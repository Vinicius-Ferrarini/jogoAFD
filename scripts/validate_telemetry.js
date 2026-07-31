// scripts/validate_telemetry.js
// Validação E2E do caminho de telemetria: login anônimo -> regra de segurança
// -> escrita no Firestore. Usa o MESMO src/services/firebase.js do app.
// Rodar com: npx vite-node scripts/validate_telemetry.js
// (vite-node carrega as VITE_FIREBASE_* do .env.local via import.meta.env)
//
// Cria UM documento de teste, identificável por modulo: '__validacao_e2e__'.
// Pode apagar depois no console do Firebase.

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, ensureSession } from "../src/services/firebase.js";

async function main() {
  console.log("[validacao] iniciando sessão anônima...");
  const uid = await ensureSession();
  console.log("[validacao] uid anônimo obtido:", uid);

  // Formatos reais das Fases 1-2 (marcados por nivel_id p/ localizar e apagar depois).
  const eventos = [
    {
      tipo_evento: "inicio_fase",
      modulo: "afd-p1",
      nivel_id: "__validacao_e2e__",
      dificuldade: "easy",
    },
    {
      tipo_evento: "tentativa",
      modulo: "afd-p1",
      nivel_id: "__validacao_e2e__",
      resultado: "wrong",
      numero_tentativas: 1,
    },
    {
      tipo_evento: "tentativa",
      modulo: "afd-p1",
      nivel_id: "__validacao_e2e__",
      resultado: "validacao_falhou",
      tipo_erro: "nondeterministic",
      numero_tentativas: 2,
    },
    {
      tipo_evento: "tutorial_aberto",
      modulo: "afd-p1",
      nivel_id: "__validacao_e2e__",
      origem: "dica",
    },
    {
      tipo_evento: "fim_fase",
      modulo: "afd-p1",
      nivel_id: "__validacao_e2e__",
      estrelas_obtidas: 3,
      novo_recorde: true,
      tempo_gasto_segundos: 42,
      numero_tentativas: 2,
      dificuldade: "easy",
      marco: "tabela_formal",
      assistiu_tutorial: true,
      acertou_apos_tutorial: true,
    },
  ];

  for (const evento of eventos) {
    console.log("[validacao] gravando %s ...", evento.tipo_evento);
    const ref = await addDoc(collection(db, "sessoes", uid, "eventos"), {
      ...evento,
      timestamp: serverTimestamp(),
    });
    console.log("   -> /sessoes/%s/eventos/%s", uid, ref.id);
  }

  console.log("\n✅ SUCESSO — caminho completo validado (auth + regra + escrita).");
  console.log("   Formatos das Fases 1-2 (inicio_fase + tentativa + fim_fase) aceitos.");
  process.exit(0);
}

main().catch((erro) => {
  console.error("\n❌ FALHA no caminho de telemetria:");
  console.error("   code:", erro?.code);
  console.error("   message:", erro?.message);
  console.error(erro);
  process.exit(1);
});
