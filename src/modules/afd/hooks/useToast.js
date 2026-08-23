import { useState, useRef, useCallback } from 'react';

// Toast local dos orquestradores (AFD_1, AP, MT Reconhecedora/Transdutora):
// aparece e some sozinho após `timeoutMs`; um novo toast reinicia o timer.
// Antes cada módulo duplicava exatamente este bloco (useState + ref + timeout).
// Retorna { toastData, showToast } — renderize com:
//   {toastData.show && <div className={`toast-notification ${toastData.type}`}>{toastData.message}</div>}
export default function useToast(timeoutMs = 4000) {
  const [toastData, setToastData] = useState({ show: false, message: '', type: 'info' });
  const toastRef = useRef(null);
  const showToast = useCallback((message, type = 'info') => {
    setToastData({ show: true, message, type });
    if (toastRef.current) clearTimeout(toastRef.current);
    toastRef.current = setTimeout(() => setToastData(d => ({ ...d, show: false })), timeoutMs);
  }, [timeoutMs]);
  return { toastData, showToast };
}
