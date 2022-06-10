
import './App.css';
import Show from './components/Show';
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";

import Create from "./components/Create";
import Edit from './components/Edit'
import Inicio from "./components/Inicio";


function App() {
  return (
    <div className="App">
      <h1>Postres Adry</h1>
       
<Router>
      <Routes>
        <Route path="/" element={ <Show />} />
          <Route path="/create" element={ <Create />} />
            
          <Route path="/editar/:id" element={ <Edit />} />
          <Route path='*' element={<Navigate replace to="/"/>} />
        </Routes>

</Router>

    </div>
  );
}

export default App;
