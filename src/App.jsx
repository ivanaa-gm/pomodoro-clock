import "./App.css";
import Divider from "./components/Divider";
import StatsPanel from "./components/StatsPanel";
import TimerPanel from "./components/TimerPanel";

function App() {
  return (
    <div className="w-full h-full flex md:flex-row flex-col">
      <div className="basis-[55%]">
        <TimerPanel />
      </div>
      <Divider />
      <div className="basis-[45%]">
        <StatsPanel />
      </div>
    </div>
  );
}

export default App;
