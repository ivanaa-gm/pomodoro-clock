import Controls from "./Controls";
import CustomAndInfoButtons from "./CustomAndInfoButtons";
import Timer from "./Timer";

const TimerPanel = () => {
  return (
    <div className="h-full flex flex-col md:justify-around gap-10 items-center">
      <div>
        <img src="logo.png" className="h-36" />
      </div>
      <Timer />
      <input
        className="text-3xl border-2 rounded-lg p-2"
        placeholder="...name your pomodoro..."
        autoFocus
        autoCapitalize="true"
      />
      <Controls />
    </div>
  );
};

export default TimerPanel;
