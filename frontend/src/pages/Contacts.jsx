import { useEffect } from "react";
import { Container } from "react-bootstrap";
import AdditionalContent from "../components/Contacts/AdditionalContent";
import Header from "../components/Contacts/Header";
import MainContent from "../components/Contacts/MainContent";
import Map from "../components/Contacts/Map";

export default function Contacts() {
  useEffect(() => {
    document.title = "Контакты — AutoImport";
  }, []);

  const mainColor = "rgba(44, 50, 74, 0.8)";
  const lightBgColor = "rgba(44, 50, 74, 0.05)";

  return (
    <div style={{ backgroundColor: lightBgColor }}>
      <Container className="py-5">
        {/* Заголовок с фоновым блоком */}
        <Header mainColor={mainColor} />

        {/* Основной контент */}
        <MainContent mainColor={mainColor} />

        {/* Дополнительные блоки */}
        <AdditionalContent mainColor={mainColor} />

        {/* Карта */}
        <Map />
      </Container>
    </div>
  );
}
