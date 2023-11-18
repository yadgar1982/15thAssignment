
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from "./Components/Add";
import Read from "./Components/Read";
import Update from"./Components/Update";





function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Add />}></Route>
          <Route  path="/read" element={<Read />}></Route>
          <Route path="/Update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
