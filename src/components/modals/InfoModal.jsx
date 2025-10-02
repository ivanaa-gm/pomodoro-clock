import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const InfoModal = ({ onClose, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-[#3D182B] text-[#F5E9E2] rounded-2xl p-6 shadow-2xl md:w-160 m-2"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b border-[#F5E9E2]/20 pb-3 mb-4">
              <h2 className="text-2xl tracking-wide">ABOUT POMODORO CLOCK</h2>
              <X className="cursor-pointer hover:scale-110 transition" onClick={onClose}/>
            </div>

            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore at
              quidem, autem debitis natus, vero unde aut iste non fugit fuga
              consectetur quam doloribus ex? Mollitia temporibus quia minus
              saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolore at quidem, autem debitis natus, vero unde aut iste non
              fugit fuga consectetur quam doloribus ex? Mollitia temporibus quia
              minus saepe. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Dolore at quidem, autem debitis natus, vero unde aut iste
              non fugit fuga consectetur quam doloribus ex? Mollitia temporibus
              quia minus saepe. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolore at quidem, autem debitis natus, vero unde
              aut iste non fugit fuga consectetur quam doloribus ex? Mollitia
              temporibus quia minus saepe.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;
