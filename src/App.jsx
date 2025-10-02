import "./App.css";
import { LapProvider } from "./components/contexts/LapContext";
import { PomodoroProvider } from "./components/contexts/PomodoroContext";
import Divider from "./components/Divider";
import StatsPanel from "./components/StatsPanel";
import TimerPanel from "./components/TimerPanel";

function App() {
  return (
    <LapProvider>
      <PomodoroProvider>
        <div className="w-full h-full flex md:flex-row flex-col">
          <div className="basis-[70%]">
            <TimerPanel />
          </div>
          <Divider />
          <div className="basis-[30%]">
            <StatsPanel />
          </div>
        </div>
      </PomodoroProvider>
    </LapProvider>
  );
}

export default App;
