import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const InfoModal = ({ onClose, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onClose}
        >
          <motion.div
            key="modal"
            className="bg-[#3D182B] text-[#F5E9E2] rounded-2xl p-6 shadow-2xl md:w-180 m-2 h-140 overflow-y-auto scrollbar-hidden "
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b border-[#F5E9E2]/20 pb-3 mb-4">
              <h2 className="text-2xl tracking-wide font-bold">
                ABOUT POMODORO CLOCK
              </h2>
              <X
                className="cursor-pointer hover:scale-110 transition"
                onClick={onClose}
              />
            </div>

            <div className="text-lg">
              <h1 className="text-[#DF7C87] font-bold text-xl">
                WTH is this app for?{" "}
              </h1>
              <p className="mb-2">
                This is a time management method that breaks work into focused
                intervals and short breaks. After four focus cycles, you take a
                longer break. It is simple and effective way to improve
                concentration, be as productive as possible and and avoid
                burnout.
              </p>
              <h1 className="text-[#DF7C87] font-bold text-xl">What I used?</h1>
              <p className="mb-2">
                This application was built using React with Vite, styled using
                TailwindCSS. Framer Motion, Lucide and React Hot Toast are my
                go-tos for smooth animations, icons and notification toasters,
                respectively.
              </p>
              <h1 className="text-[#DF7C87] font-bold text-xl">The features</h1>
              <p className="mb-2">
                🍅 Traditional Pomodoro cycle: 25 min focus → 5 min break (x3) →
                15 min long break
                <br />
                🍅 Customizable timer lengths for focus and breaks
                <br />
                🍅 Session-based history (that keeps track of your current run)
                <br />
                🍅 Jingles for the start of each work or break session
                <br />
                🍅 Simple, clean, and modern interface with smooth animations
                <br />
                🍅 Built with a focus on usability and minimal distractions
              </p>
              <h1 className="text-[#DF7C87] font-bold text-xl">
                Attributions{" "}
              </h1>
              <p className="space-y-2">
                the jingles I used:{" "}
                <a
                  href="https://pixabay.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#DF7C87]"
                >
                  Pixabay
                </a>
                <br />
                the animated icons:{" "}
                <a
                  href="https://lordicon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#DF7C87]"
                >
                  Lordicon.com
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;
