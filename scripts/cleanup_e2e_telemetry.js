// scripts/cleanup_e2e_telemetry.js
// Limpeza dos documentos de TESTE da telemetria (marcados "__validacao_e2e__"),
// criados por scripts/validate_telemetry.js ao longo das fases 0→6.
//
// ─── POR QUE ISSO PRECISA DO ADMIN SDK (e não dá pra fazer pelo app/cliente) ───
// As regras do Firestore do projeto são create-only, isoladas por uid e negam
// leitura. Além disso, cada rodada do validate_telemetry.js executou em Node
// (vite-node), onde o Firebase Auth NÃO persiste sessão — ou seja, cada execução
// gerou um uid anônimo NOVO. Os docs de teste ficaram espalhados por vários
// /sessoes/{uid}/eventos. Um cliente anônimo novo não enxerga (nem apaga) dados
// de outros uids. Só o Admin SDK (conta de serviço) ignora as regras e alcança
// tudo via collection-group query — por isso a limpeza precisa dele.
//
// ─── COMO RODAR ───────────────────────────────────────────────────────────────
//   1) npm install --save-dev firebase-admin
//   2) Firebase Console → Configurações do projeto → Contas de serviço →
//      "Gerar nova chave privada" → salve o JSON (NUNCA versionar!).
//   3) Aponte a credencial e rode (do diretório do projeto):
//
//        # Git Bash:
//        GOOGLE_APPLICATION_CREDENTIALS=./serviceAccountKey.json \
//          node scripts/cleanup_e2e_telemetry.js
//
//        # PowerShell:
//        $env:GOOGLE_APPLICATION_CREDENTIALS = ".\serviceAccountKey.json"
//        node scripts/cleanup_e2e_telemetry.js
//
//   Use --dry-run para só LISTAR o que seria apagado (não apaga nada):
//        node scripts/cleanup_e2e_telemetry.js --dry-run
//
// Obs.: na 1ª execução o Firestore pode pedir um índice de collection-group para
// o campo consultado — é só clicar no link do erro pra criar (leva ~1 min) e rodar
// de novo.

const DRY_RUN = process.argv.includes('--dry-run');
const MARKER  = '__validacao_e2e__';

async function main() {
  let admin;
  try {
    admin = (await import('firebase-admin')).default;
  } catch {
    console.error('❌ firebase-admin não instalado. Rode:  npm install --save-dev firebase-admin');
    process.exit(1);
  }

  if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    console.error('❌ Defina GOOGLE_APPLICATION_CREDENTIALS apontando para o JSON da conta de serviço.');
    console.error('   Ex.: GOOGLE_APPLICATION_CREDENTIALS=./serviceAccountKey.json node scripts/cleanup_e2e_telemetry.js');
    process.exit(1);
  }

  admin.initializeApp({ credential: admin.credential.applicationDefault() });
  const db = admin.firestore();

  // Collection-group query alcança /sessoes/{qualquer uid}/eventos.
  // A marca do doc de teste pode estar em `nivel_id` OU (versões antigas do script)
  // em `modulo` — consultamos os dois e deduplicamos por caminho.
  const found = new Map(); // path -> ref
  for (const field of ['nivel_id', 'modulo']) {
    const snap = await db.collectionGroup('eventos').where(field, '==', MARKER).get();
    snap.forEach((doc) => found.set(doc.ref.path, doc.ref));
  }

  const refs = [...found.values()];
  console.log(`[cleanup] encontrados ${refs.length} documento(s) marcados "${MARKER}".`);
  if (refs.length === 0) { console.log('Nada a apagar. ✅'); process.exit(0); }

  if (DRY_RUN) {
    refs.forEach((r) => console.log('  (dry-run) apagaria:', r.path));
    console.log('\nDry-run: nada foi apagado. Rode sem --dry-run para apagar de verdade.');
    process.exit(0);
  }

  // Apaga em lotes (limite de 500/batch no Firestore; 450 por folga).
  let apagados = 0;
  for (let i = 0; i < refs.length; i += 450) {
    const chunk = refs.slice(i, i + 450);
    const batch = db.batch();
    chunk.forEach((r) => batch.delete(r));
    await batch.commit();
    apagados += chunk.length;
    console.log(`[cleanup] apagados ${apagados}/${refs.length}...`);
  }

  console.log(`\n✅ Limpeza concluída — ${apagados} documento(s) de teste removidos.`);
  process.exit(0);
}

main().catch((err) => {
  console.error('\n❌ Falha na limpeza:');
  console.error('   code:', err?.code, '| message:', err?.message);
  console.error(err);
  process.exit(1);
});
