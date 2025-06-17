import React from "react";

export default function PallaxBanner() {
  return (
    <div className="parallax-banner">
      <div className="overlay">
        <h1 className="banner-title">Автомобили под заказ из Японии</h1>
        <p className="banner-subtitle">
          с выгодой до <span className="highlight">40%</span>
        </p>

        <ul className="banner-features">
          <li>
            Более <strong>300 000</strong> автомобилей торгуются ежедневно
          </li>
          <li>
            <strong>50 000Р</strong> фиксированная комиссия без скрытых платежей
          </li>
          <li>
            Свыше <strong>10 лет</strong> опыт работы с аукционами
          </li>
          <li>Личный менеджер, сопровождение от покупки до доставки</li>
        </ul>
      </div>
    </div>
  );
}
