import CurrentRun from "./CurrentRun";
import CustomAndInfoButtons from "./CustomAndInfoButtons";
import History from "./History";
import { ChevronUp } from "lucide-react";

const StatsPanel = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="hidden absolute top-4 right-4 md:flex flex-row gap-4">
        <CustomAndInfoButtons />
      </div>
      <div className="flex flex-col">
        <CurrentRun />
      </div>
      <div className="md:hidden flex justify-center items-center gap-4 p-4">
        <CustomAndInfoButtons />
        <div
          className="flex justify-center gap-1 bg-white/50 rounded-lg p-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp />
          GO UP
          <ChevronUp />
        </div>
      </div>
      <div className="">
        <History />
      </div>
    </div>
  );
};

export default StatsPanel;
