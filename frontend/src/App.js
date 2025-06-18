import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ModalForm from "./components/ModalForm";
import AppNavbar from "./components/Navbar";
import { ApiProvider } from "./context/ApiContext";
import { ModalProvider, useModal } from "./context/ModalContext";
import About from "./pages/About";
import CarPage from "./pages/CarPage";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import Main from "./pages/Main";

const AppInit = () => {
  const { isShowModal, setIsShowModal } = useModal();

  return (
    <div className="app-wrapper">
      <Router>
        <AppNavbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/cars/:id" element={<CarPage />} />
          </Routes>
          <ModalForm show={isShowModal} onHide={() => setIsShowModal(false)} />
        </div>
        <Footer />
      </Router>
    </div>
  );
};

function App() {
  return (
    <ApiProvider>
      <ModalProvider>
        <AppInit />
      </ModalProvider>
    </ApiProvider>
  );
}

export default App;
