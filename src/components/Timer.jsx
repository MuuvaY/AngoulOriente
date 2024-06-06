import { useStopwatchContext } from "./StopwatchContext";

const Timer = () => {
  const { seconds, minutes, hours } = useStopwatchContext();

  useEffect(() => {
    const storeTime = () => {
      sessionStorage.setItem("seconds", seconds);
      sessionStorage.setItem("minutes", minutes);
      sessionStorage.setItem("hours", hours);
    };

    storeTime(); // Store initial time

    // Clean-up function to be executed when the component unmounts
    return () => {
      storeTime(); // Store time again when unmounting
    };
  }, [seconds, minutes, hours]);
};

export default Timer;
