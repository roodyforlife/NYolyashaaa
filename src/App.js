import { useContext, useEffect, useState } from "react";
import { Context } from ".";
import Timer from "./components/Timer";
import './styles/App.css';
import {observer} from 'mobx-react-lite';
import Gallary from "./components/Gallary";

const App = observer(() => {
  const {date} = useContext(Context);
  const [isNewYear, setIsNewYear] = useState(false);
  const newYearDate = new Date(2024, 0, 1, 0, 0, 0);
  
  const updateTime = () => {
    date.setDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(updateTime, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  useEffect(() => {
    if (date.date >= newYearDate) {
      setIsNewYear(true);
    } else {
      setIsNewYear(false);
    }
  }, [date.date])

  return (
    <div className="App">
      {isNewYear ? 
      <Gallary></Gallary>
      :
      <Timer newYearDate={newYearDate}></Timer>
      }
    </div>
  );
});

export default App;
