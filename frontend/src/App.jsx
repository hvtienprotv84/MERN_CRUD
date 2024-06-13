import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="container mx-auto p-2 max-w-[2000px]">
        <Link to="/" className="flex items-center">
  <h2 className="text-white text-[51px] font-bold flex items-center">
    <span className="text-[#00ed64]">M</span>
    <span>E</span>
    <span className="text-[#08d9ff]">R</span>
    <span className="text-[#7bb862]">N</span> 
    <span className="ml-[10px]"><span className="text-[#3f48eb]">CRUD</span></span>
    <span className="ml-[10px]">-</span>
    <img className="w-[50px] h-[50px] mt-[5px]" src='https://img.icons8.com/?size=100&id=74402&format=png&color=000000' alt=""/>
    <span className="text-[#00ed64]">MongoDB </span>
    <span className="ml-[10px]">-</span>
    <img className="w-[50px] h-[50px] ml-[10px] border border-white rounded-[50px]" src='https://www.manektech.com/storage/developer/1646733543.webp' alt=""/>
    <span className="ml-[5px]">ExpressJS</span>
    <span className="ml-[10px]">-</span>
    <img className="w-[50px] h-[50px] ml-[10px]" src='https://img.icons8.com/?size=100&id=123603&format=png&color=000000' alt=""/>
    <span className="text-[#08d9ff] ml-[5px]"> ReactJS</span>
    <span className="ml-[10px]">-</span>
    <img className="w-[50px] h-[50px] ml-[10px]" src='https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000' alt=""/>
    <span className="text-[#21a366]">NodeJS</span>
  </h2>
</Link>
        </div>
      </nav>
      <div className="container mx-auto p-2 h-full">
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/create" element={<CreatePage />}></Route>
          <Route path="/edit/:id" element={<EditPage />}></Route>
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
