import { Route, Routes } from "react-router-dom";
import { Aside, Ons, PersonalInfo, Plan, Summary, Thanks } from "./page/index";
function App() {
  return (
    <div className="app">
      <Aside />
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/add-ons" element={<Ons />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
