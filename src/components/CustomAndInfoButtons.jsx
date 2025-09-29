import { Info, PencilLine } from "lucide-react";

const CustomAndInfoButtons = () => {
  return (
    <>
      <div className="bg-red-300 rounded-full p-2 cursor-pointer">
        <PencilLine />
      </div>
      <div className="bg-red-300 rounded-full p-2 cursor-pointer">
        <Info />
      </div>
    </>
  );
};

export default CustomAndInfoButtons;
