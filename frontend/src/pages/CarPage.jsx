import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import DetailInformBlock from "../components/CarPage/DetailInformBlock";
import DreadcrumbBlock from "../components/CarPage/DreadcrumbBlock";
import EmptyPage from "../components/CarPage/EmptyPage";
import MainInformBlock from "../components/CarPage/MainInformBlock";
// Тестовые данные
const cars = [
  {
    id: 1,
    title: "BMW 5 Series 520i Luxury",
    country: "Германия",
    year: 2019,
    price: 2300000,
    mileage: 45000,
    engine: "2.0 л (184 л.с.)",
    transmission: "Автомат",
    drive: "Задний",
    color: "Чёрный сапфир",
    interior: "Кожа Vernasca, коричневый",
    description:
      "Комфортный и мощный седан бизнес-класса с полным пакетом опций. В наличии все сервисные записи, 1 владелец, без ДТП. Полностью обслужен у официального дилера.",
    features: [
      "Панорамная крыша",
      "Кожаный салон",
      "Подогрев сидений",
      "Камера 360°",
      "Apple CarPlay",
      "Адаптивный круиз-контроль",
    ],
    images: [
      "https://placehold.co/800x600/2c324a/FFFFFF?text=BMW+5+1",
      "https://placehold.co/800x600/2c324a/FFFFFF?text=BMW+5+2",
      "https://placehold.co/800x600/2c324a/FFFFFF?text=BMW+5+3",
    ],
    rating: 4.8,
    isNew: false,
    dealer: {
      name: "Premium Auto Germany",
      rating: 4.9,
      reviews: 127,
    },
  },
];

export default function CarPage() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));

  useEffect(() => {
    if (car) {
      document.title = `${car.title} — AutoImport`;
    }
  }, [car]);

  if (!car) {
    return <EmptyPage />;
  }

  return (
    <Container className="my-4">
      {/* Хлебные крошки */}
      <DreadcrumbBlock title={car.title} />

      {/* Основная информация */}
      <MainInformBlock car={car} />

      {/* Детальная информация */}
      <DetailInformBlock car={car} />
    </Container>
  );
}
