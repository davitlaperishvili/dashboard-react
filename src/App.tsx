import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
    return (
        <>
            <ToastContainer autoClose={1000} />
            <div className="App main_grid">
              <Sidebar/>
              <MainContent/>
            </div>
        </>
    );
}

export default App;
