import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";

function App() {
    return (
        <>
            <ToastContainer autoClose={1000} />
            <div className="App">
              <Header/>
              <MainContent/>
            </div>
        </>
    );
}

export default App;
