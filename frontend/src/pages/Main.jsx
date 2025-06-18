import { useEffect } from "react";
import InfoBlock from "../components/MainPage/InfoBlock";
import PallaxBanner from "../components/MainPage/PallaxBanner";
import WhyDangerous from "../components/MainPage/WhyDangerous";
import "../styles/main.css";

export default function Main() {
  useEffect(() => {
    document.title = "Главная — AutoImport";
  }, []);

  return (
    <>
      {/* Параллакс-баннер — уже занимает всю ширину внутри */}
      <section className="section-parallax">
        <PallaxBanner />
      </section>

      {/* Инфо-блок с фоном во всю ширину */}
      <section className="section-info">
        <div className="container">
          <InfoBlock />
        </div>
      </section>
      <WhyDangerous />
    </>
  );
}
