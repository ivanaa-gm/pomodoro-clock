import { Info, PencilLine } from "lucide-react";
import { useContext, useState } from "react";
import CustomizeModal from "./modals/CustomizeModal";
import InfoModal from "./modals/InfoModal";
import LapContext from "./contexts/LapContext";
import { Toaster, toast } from "react-hot-toast";

const CustomAndInfoButtons = () => {
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const { lapOngoing } = useContext(LapContext);

  const openCustomizeModal = () => setIsCustomizeOpen(true);
  const closeCustomizeModal = () => setIsCustomizeOpen(false);
  const openInfoModal = () => setIsInfoOpen(true);
  const closeInfoModal = () => setIsInfoOpen(false);

  return (
    <div className="flex flex-row gap-4">
      <div
        className="bg-white/50 rounded-full p-2 cursor-pointer"
        onClick={() => {
          if (lapOngoing) {
            toast(
              "CANNOT CUSTOMIZE POMODORO DURATION WHILE THE POMODORO IS RUNNING. FINISH THE POMODORO FIRST OR RESTART IT.",
              {
                icon: "🍅",
                style: {
                  borderRadius: "25px",
                  background: "#0C0016",
                  color: "#F5E9E2",
                  border: "1px solid #713200",
                  padding: "16px",
                  textAlign: "center",
                },
              }
            );
            console.log("eho");
          } else {
            openCustomizeModal();
          }
        }}
      >
        <PencilLine />
      </div>
      <div
        className="bg-white/50 rounded-full p-2 cursor-pointer"
        onClick={openInfoModal}
      >
        <Info />
      </div>

      {isCustomizeOpen && (
        <CustomizeModal
          onClose={closeCustomizeModal}
          isOpen={isCustomizeOpen}
        />
      )}
      {isInfoOpen && <InfoModal onClose={closeInfoModal} isOpen={isInfoOpen} />}
    </div>
  );
};

export default CustomAndInfoButtons;
