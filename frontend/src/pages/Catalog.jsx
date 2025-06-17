import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Badge,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  FaSearch,
  FaHeart,
  FaFilter,
  FaStar,
  FaGasPump,
  FaCarSide,
} from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";
import { GiGearStickPattern } from "react-icons/gi";
import { Link } from "react-router-dom";
import Header from "../components/Catalog/Header";
import Filters from "../components/Catalog/Filters";
import ResultSearch from "../components/Catalog/ResultSearch";
import PaginationBlock from "../components/Catalog/PaginationBlock";

// Пример данных
const cars = [
  {
    id: 1,
    title: "BMW 5 Series 520i",
    country: "Германия",
    year: 2019,
    price: 2300000,
    mileage: 45000,
    engine: "2.0 л (184 л.с.)",
    transmission: "Автомат",
    drive: "Задний",
    image: "https://placehold.co/600x400/2c324a/FFFFFF?text=BMW+5",
    isNew: false,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Toyota Camry Hybrid",
    country: "Япония",
    year: 2020,
    price: 1800000,
    mileage: 32000,
    engine: "2.5 л Hybrid (218 л.с.)",
    transmission: "Автомат",
    drive: "Передний",
    image: "https://placehold.co/600x400/2c324a/FFFFFF?text=Toyota+Camry",
    isNew: true,
    rating: 4.9,
  },
  {
    id: 3,
    title: "Hyundai Sonata N-Line",
    country: "Корея",
    year: 2021,
    price: 1600000,
    mileage: 28000,
    engine: "2.5 л Turbo (290 л.с.)",
    transmission: "Автомат",
    drive: "Передний",
    image: "https://placehold.co/600x400/2c324a/FFFFFF?text=Hyundai+Sonata",
    isNew: false,
    rating: 4.7,
  },
  {
    id: 4,
    title: "Mercedes-Benz E 200",
    country: "Германия",
    year: 2018,
    price: 2800000,
    mileage: 52000,
    engine: "2.0 л (197 л.с.)",
    transmission: "Автомат",
    drive: "Задний",
    image: "https://placehold.co/600x400/2c324a/FFFFFF?text=Mercedes+E",
    isNew: false,
    rating: 4.6,
  },
  {
    id: 5,
    title: "Lexus ES 350",
    country: "Япония",
    year: 2022,
    price: 3200000,
    mileage: 15000,
    engine: "3.5 л (302 л.с.)",
    transmission: "Автомат",
    drive: "Передний",
    image: "https://placehold.co/600x400/2c324a/FFFFFF?text=Lexus+ES",
    isNew: true,
    rating: 5.0,
  },
  {
    id: 6,
    title: "Kia K5 GT-Line",
    country: "Корея",
    year: 2021,
    price: 1700000,
    mileage: 25000,
    engine: "2.5 л (194 л.с.)",
    transmission: "Автомат",
    drive: "Передний",
    image: "https://placehold.co/600x400/2c324a/FFFFFF?text=Kia+K5",
    isNew: false,
    rating: 4.5,
  },
  {
    id: 7,
    title: "Kia K5 GT-Line",
    country: "Корея",
    year: 2021,
    price: 1700000,
    mileage: 25000,
    engine: "2.5 л (194 л.с.)",
    transmission: "Автомат",
    drive: "Передний",
    image: "https://placehold.co/600x400/2c324a/FFFFFF?text=Kia+K5",
    isNew: false,
    rating: 4.5,
  },
  {
    id: 8,
    title: "Kia K5 GT-Line",
    country: "Корея",
    year: 2021,
    price: 1700000,
    mileage: 25000,
    engine: "2.5 л (194 л.с.)",
    transmission: "Автомат",
    drive: "Передний",
    image: "https://placehold.co/600x400/2c324a/FFFFFF?text=Kia+K5",
    isNew: false,
    rating: 4.5,
  },
  {
    id: 9,
    title: "Kia K5 GT-Line",
    country: "Корея",
    year: 2021,
    price: 1700000,
    mileage: 25000,
    engine: "2.5 л (194 л.с.)",
    transmission: "Автомат",
    drive: "Передний",
    image: "https://placehold.co/600x400/2c324a/FFFFFF?text=Kia+K5",
    isNew: false,
    rating: 4.5,
  },
];

const ITEMS_PER_PAGE = 6;

export default function Catalog() {
  useEffect(() => {
    document.title = "Каталог — AutoImport";
  }, []);

  const [filteredCars, setFilteredCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countCars, setCountCars] = useState(0);

  const paginatedCars = filteredCars.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);

  return (
    <Container className="py-4">
      {/* Заголовок и поиск */}
      <Header />
      {/* Фильтры */}
      <Filters
        cars={cars}
        setFilteredCars={setFilteredCars}
        setCurrentPage={setCurrentPage}
        setCountCars={setCountCars}
      />
      {/* Карточки автомобилей */}
      <ResultSearch
        filteredCars={paginatedCars}
        cars={cars}
        countCars={countCars}
      />
      {/* Пагинация */}
      <PaginationBlock
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
}
