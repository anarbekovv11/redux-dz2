import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./components/MainPage";
import Name from "./components/Name";
import Layout from "./hoc/Layout";
import {InnerPhoto} from "./hoc/InnerPhoto";


function App() {
  return (
      <BrowserRouter>
          <Routes>

              <Route path='/' element={<Layout/>}>
                  <Route index element={<MainPage/>}/>
                  <Route path='/name' element={<Name/>}/>
              </Route>

              <Route path="posts/:id" element={<InnerPhoto/>}/>

              <Route path='*' element={<h3>Not Found 404</h3>}/>

          </Routes>
      </BrowserRouter>
  );
}

export default App;