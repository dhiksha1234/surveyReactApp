import WelcomePage from "./components/WelcomePage";
import Form from "./components/Form";
import Complete from "./components/Complete"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<WelcomePage/>}></Route>
      <Route path="/form" element={<Form/>}></Route>
      <Route path = "/summary" element={<Complete/>}> </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
