import "./App.css";
import { PomodoroProvider } from "./components/contexts/PomodoroContext";
import Divider from "./components/Divider";
import CustomizeModal from "./components/modals/CustomizeModal";
import StatsPanel from "./components/StatsPanel";
import TimerPanel from "./components/TimerPanel";
import { useState } from "react";

function App() {
  

  return (
    <PomodoroProvider>
      <div className="w-full h-full flex md:flex-row flex-col">
        <div className="basis-[55%]">
          <TimerPanel />
        </div>
        <Divider />
        <div className="basis-[45%]">
          <StatsPanel />
        </div>
      </div>
    </PomodoroProvider>
  );
}

export default App;
