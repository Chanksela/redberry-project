import { Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Survey from "./Pages/Survey";
import SubmitedItems from "./Pages/SubmitedItems";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/submitted" element={<SubmitedItems />} />
    </Routes>
  );
}

export default App;
