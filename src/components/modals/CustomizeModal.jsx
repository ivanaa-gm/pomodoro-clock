import { useContext, useState } from "react";
import { X, CheckCheck, ChevronUp, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import LapContext from "../contexts/LapContext";

const CustomizeModal = ({ onClose, isOpen }) => {
  const [focusTime, setFocusTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [largeBreakTime, setLargeBreakTime] = useState(5);

  const { updateLapMinutes } = useContext(LapContext);

  const handleIncrement = (setter, value, max) => {
    if (value < max) setter(value + 1);
  };

  const handleDecrement = (setter, value, min) => {
    if (value > min) setter(value - 1);
  };

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
            className="bg-[#3D182B] text-[#F5E9E2] rounded-2xl p-6 shadow-2xl md:w-160 min-w-90"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b border-[#F5E9E2]/20 pb-3 mb-4">
              <h2 className="text-2xl tracking-wide">CUSTOMIZE POMODORO</h2>
            </div>

            <div className="flex flex-col gap-6 md:mx-40 my-10">
              <div>
                <label className="block text-lg mb-1">Focus Minutes</label>
                <div className="flex items-center justify-between bg-[#55203C] rounded-lg px-4 py-2 hover:brightness-105">
                  <button
                    onClick={() => handleDecrement(setFocusTime, focusTime, 10)}
                    className="p-1 hover:text-[#08300C] transition"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </button>
                  <span className="text-2xl font-semibold">{focusTime}</span>
                  <button
                    onClick={() => handleIncrement(setFocusTime, focusTime, 90)}
                    className="p-1 hover:text-[#08300C] transition"
                  >
                    <ChevronUp className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-lg mb-1">Break Minutes</label>
                <div className="flex items-center justify-between bg-[#55203C] rounded-lg px-4 py-2 hover:brightness-105">
                  <button
                    onClick={() => handleDecrement(setBreakTime, breakTime, 1)}
                    className="p-1 hover:text-[#08300C] transition"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </button>
                  <span className="text-2xl font-semibold">{breakTime}</span>
                  <button
                    onClick={() => handleIncrement(setBreakTime, breakTime, 10)}
                    className="p-1 hover:text-[#08300C] transition"
                  >
                    <ChevronUp className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-lg mb-1">
                  Large Break Minutes
                </label>
                <div className="flex items-center justify-between bg-[#55203C] rounded-lg px-4 py-2 hover:brightness-105">
                  <button
                    onClick={() =>
                      handleDecrement(setLargeBreakTime, largeBreakTime, 5)
                    }
                    className="p-1 hover:text-[#08300C] transition"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </button>
                  <span className="text-2xl font-semibold">
                    {largeBreakTime}
                  </span>
                  <button
                    onClick={() =>
                      handleIncrement(setLargeBreakTime, largeBreakTime, 45)
                    }
                    className="p-1 hover:text-[#08300C] transition"
                  >
                    <ChevronUp className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between text-lg md:mx-6 mt-10">
              <div
                className="border-1 rounded-md p-2 px-4 flex gap-2 items-center cursor-pointer hover:bg-white/10 transition duration-400"
                onClick={onClose}
              >
                <X />
                <p>DISCARD</p>
              </div>
              <div
                className="border-1 rounded-md p-2 px-4 flex gap-2 items-center cursor-pointer hover:bg-white/10 transition duration-400"
                onClick={() => {
                  console.log("oppp")
                  updateLapMinutes(focusTime, breakTime, largeBreakTime);
                  onClose();
                }}
              >
                <CheckCheck />
                <p>SAVE</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomizeModal;
