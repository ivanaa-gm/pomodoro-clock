import "./App.css";
import { LapProvider } from "./components/contexts/LapContext";
import { PomodoroProvider } from "./components/contexts/PomodoroContext";
import Divider from "./components/Divider";
import StatsPanel from "./components/StatsPanel";
import TimerPanel from "./components/TimerPanel";
import { Toaster } from "react-hot-toast";

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
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 9000,
          }}
        />
      </PomodoroProvider>
    </LapProvider>
  );
}

export default App;
