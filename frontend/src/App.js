import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import CarPage from "./pages/CarPage";
import Contacts from "./pages/Contacts";
import AppNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import ModalForm from "./components/ModalForm";
import { ModalProvider, useModal } from "./context/ModalContext";

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
    <ModalProvider>
      <AppInit />
    </ModalProvider>
  );
}

export default App;
