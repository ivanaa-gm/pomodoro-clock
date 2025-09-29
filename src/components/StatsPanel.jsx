import CurrentRun from "./CurrentRun";
import CustomAndInfoButtons from "./CustomAndInfoButtons";
import History from "./History";

const StatsPanel = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="hidden absolute top-4 right-4 md:flex flex-row gap-4">
        <CustomAndInfoButtons/>
      </div>
      <div className="basis-[80%] flex flex-col justify-center">
        <CurrentRun/>
      </div>
      <div className="basis-[20%] h-[20%]">
        <History />
      </div>
    </div>
  );
};

export default StatsPanel;
