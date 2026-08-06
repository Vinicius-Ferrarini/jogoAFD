// src/services/firebase.js
// Inicialização central do Firebase para o TuringLab.
// Propositalmente SEM Google Analytics — só Auth (anônimo) e Firestore.

import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Sem VITE_FIREBASE_* (ex.: clone local sem .env.local), o app roda em modo
// degradado: sem login/telemetria em nuvem, mas sem travar a tela do jogo —
// só quem publica em produção (npm run deploy) precisa dessas chaves.
const isConfigured = Object.values(firebaseConfig).every(Boolean);

let app = null;
if (isConfigured) {
  app = initializeApp(firebaseConfig);
} else if (import.meta.env.DEV) {
  console.warn(
    "[firebase] VITE_FIREBASE_* ausentes — rodando sem login/telemetria em nuvem. " +
    "Veja .env.example para configurar um projeto Firebase próprio (opcional)."
  );
}

export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;

export async function ensureSession() {
  if (!auth) return "local-dev-no-firebase";
  if (!auth.currentUser) {
    const credential = await signInAnonymously(auth);
    return credential.user.uid;
  }
  return auth.currentUser.uid;
}
