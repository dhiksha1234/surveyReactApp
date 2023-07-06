import WelcomePage from "./components/WelcomePage";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<WelcomePage/>}></Route>
      <Route path="/form" element={<Form/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
