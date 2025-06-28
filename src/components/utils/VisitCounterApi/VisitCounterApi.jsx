"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VisitCounterAPI = ({
  // 🔑 Identificación de contador
  namespace = "anvetcard",
  counterKey = "default",

  // 🔘 Botón visible
  buttonLabel = "Contador de visitas",
  buttonStyles = "btn btn-outline text-sm sm:text-base",

  // 💬 Texto del modal
  modalMessageText = "Actualmente {count} personas han visitado tu sitio.",

  // 🎨 Estilos del modal
  modalBg = "bg-white",
  modalTextColor = "text-black",
  modalPadding = "p-6",
  modalRounded = "rounded-lg",
  modalShadow = "shadow-lg",

  // 🔘 Botón de cerrar en el modal
  buttonCloseText = "Cerrar",
  buttonCloseStyles = "btn btn-primary mt-4",
}) => {
  const localStorageKey = `visit_count_${namespace}_${counterKey}`;
  const [visits, setVisits] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch(`https://api.countapi.xyz/hit/${namespace}/${counterKey}`);
        if (!res.ok) throw new Error("CountAPI Error");
        const data = await res.json();
        setVisits(data.value);
        localStorage.setItem(localStorageKey, data.value);
      } catch (error) {
        const local = localStorage.getItem(localStorageKey);
        const fallback = local ? parseInt(local) : 1;
        setVisits(fallback);
        localStorage.setItem(localStorageKey, fallback + 1);
      }
    };

    fetchCount();
  }, []);

  // 🧩 Formatear texto con número
  const formattedMessage = modalMessageText.replace("{count}", visits.toLocaleString());

  return (
    <>
      {/* Botón visible */}
      <button onClick={() => setOpen(true)} className={buttonStyles}>
        {buttonLabel}
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`w-full max-w-md text-center ${modalBg} ${modalTextColor} ${modalRounded} ${modalPadding} ${modalShadow}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <p className="text-lg font-semibold pb-spacing-3">{formattedMessage}</p>

              <button onClick={() => setOpen(false)} className={buttonCloseStyles}>
                {buttonCloseText}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VisitCounterAPI;
