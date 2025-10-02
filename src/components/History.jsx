import { useContext, useState, useEffect } from "react";
import PomodoroContext from "./contexts/PomodoroContext";

const History = () => {
  const { pomodoroName, pomodoroComplete } = useContext(PomodoroContext);

  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (pomodoroComplete && pomodoroName.trim() !== "") {
      setHistory((prev) => [...prev, pomodoroName]);
    }
  }, [pomodoroComplete, pomodoroName]);
  return (
    <div className="bg-white/5 rounded-md">
      <div className="flex justify-between items-center">
        <img className="h-12" src="angle.png" />
        <h1 className="font-semibold text-xl">Previous runs:</h1>
        <img className="h-12 rotate-90" src="angle.png" />
      </div>

      <ul className="h-26 flex flex-col items-center overflow-y-scroll mt-4">
        {history.length === 0 ? (
          <p className="text-[#3D182B]">no runs yet...</p>
        ) : (
          history.map((name, idx) => (
            <li key={idx} className="flex flex-row items-center gap-2 p-2 w-[80%] rounded-sm hover:bg-black/10">
              <img src="tomatoes.png" className="h-9" />
              <p>{name}</p>
            </li>
          ))
        )}
      </ul>

      <div className="flex justify-between items-center">
        <img className="h-12 -rotate-90" src="angle.png" />
        <img className="h-12 rotate-180" src="angle.png" />
      </div>
    </div>
  );
};

export default History;
