export default { level: 'hard',   language: '{ aⁿbᵐcᵐdⁿ / n > 0, m > 0 }',
         hint: 'Pilha em camadas: "a" no fundo, "b" por cima; "c" gasta os "b", "d" gasta os "a".',
         truth: (w, g) => g && /a/.test(w) && /b/.test(w) && /c/.test(w) && /d/.test(w) };
