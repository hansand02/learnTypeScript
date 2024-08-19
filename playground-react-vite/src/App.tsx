import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SchedulerScreen from "./screens/schedulerScreen";
import HomeScreen from "./screens/homeScreen";
import ScreenFour from "./screens/screenFour";
import ScreenFive from "./screens/screenFive";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={HomeScreen()} />
          <Route path="/datovelger" element={SchedulerScreen()} />
          <Route path="/page4" element={ScreenFour()} />
          <Route path="/page5" element={ScreenFive()} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
