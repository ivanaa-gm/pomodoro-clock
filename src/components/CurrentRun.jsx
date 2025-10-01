import { useContext, useEffect, useState } from "react";
import PomodoroContext from "./contexts/PomodoroContext";

const CurrentRun = () => {
  const { lapOne, lapTwo, lapThree, lapFour } = useContext(PomodoroContext);
  const [basketImg, setBasketImg] = useState("basket-0.png");
  const [fade, setFade] = useState(false);

  useEffect(() => {
    let newImg = "basket-0.png";

    if (lapFour?.complete) newImg = "basket-4.png";
    else if (lapThree?.complete) newImg = "basket-3.png";
    else if (lapTwo?.complete) newImg = "basket-2.png";
    else if (lapOne?.complete) newImg = "basket-1.png";

    if (newImg !== basketImg) {
      setFade(true);
      setTimeout(() => {
        setBasketImg(newImg);
        setFade(false);
      }, 300);
    }
  }, [lapOne, lapTwo, lapThree, lapFour, basketImg]);

  return (
    <div className="flex flex-col items-center my-20">
      <p className="text-2xl font-semibold mb-4">Current run</p>
      <img
        src={basketImg}
        className={`h-60 transition-opacity duration-500 ${
          fade ? "opacity-0  brightness-150" : "opacity-100"
        }`}
      />
      <p className="text-2xl font-semibold mt-4">
        Pomodoros:{" "}
        {lapFour?.complete
          ? "4"
          : lapThree?.complete
          ? "3"
          : lapTwo?.complete
          ? "2"
          : lapOne?.complete
          ? "1"
          : "0"}
          /4
      </p>
    </div>
  );
};

export default CurrentRun;
