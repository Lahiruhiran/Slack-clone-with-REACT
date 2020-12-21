import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Sidebar from "./SideBar";


function App() {
  return (
    <div className="App">
     <Header/>
     <div className="app_body">
       <Sidebar/>
     {/* React-router -> chat screen */}
     </div>
     
    </div>
  );
}

export default App;
