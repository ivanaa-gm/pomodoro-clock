import { Info, PencilLine } from "lucide-react";
import { useState } from "react";
import CustomizeModal from "./modals/CustomizeModal";
import InfoModal from "./modals/InfoModal";

const CustomAndInfoButtons = () => {
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const openCustomizeModal = () => setIsCustomizeOpen(true);
  const closeCustomizeModal = () => setIsCustomizeOpen(false);
  const openInfoModal = () => setIsInfoOpen(true);
  const closeInfoModal = () => setIsInfoOpen(false);

  return (
    <>
      <div className="bg-white/50 rounded-full p-2 cursor-pointer" onClick={openCustomizeModal}>
        <PencilLine  />
      </div>
      <div className="bg-white/50 rounded-full p-2 cursor-pointer" onClick={openInfoModal}>
        <Info />
      </div>

      {isCustomizeOpen && (
        <CustomizeModal
          onClose={closeCustomizeModal}
          isOpen={isCustomizeOpen}
        />
      )}
      {isInfoOpen && (
        <InfoModal
          onClose={closeInfoModal}
          isOpen={isInfoOpen}
        />
      )}
    </>
  );
};

export default CustomAndInfoButtons;
