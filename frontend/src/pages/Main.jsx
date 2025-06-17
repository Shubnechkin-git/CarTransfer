import { useEffect } from "react";
import InfoBlock from "../components/MainPage/InfoBlock";
import PallaxBanner from "../components/MainPage/PallaxBanner";
import WhyDangerous from "../components/MainPage/WhyDangerous";
import "../styles/main.css";

const popularCars = [
  {
    id: 1,
    title: "Toyota Prius",
    image: "https://placehold.co/300x200?text=Нет+изображения",
  },
  {
    id: 2,
    title: "Honda Fit",
    image: "https://placehold.co/300x200?text=Нет+изображения",
  },
  {
    id: 3,
    title: "Nissan Leaf",
    image: "https://placehold.co/300x200?text=Нет+изображения",
  },
];

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
