import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import Filters from "../components/Catalog/Filters";
import Header from "../components/Catalog/Header";
import PaginationBlock from "../components/Catalog/PaginationBlock";
import ResultSearch from "../components/Catalog/ResultSearch";
import { useApi } from "../context/ApiContext";

// Пример данных

const ITEMS_PER_PAGE = 6;

export default function Catalog() {
  useEffect(() => {
    document.title = "Каталог — AutoImport";
  }, []);

  const { getCars } = useApi();
  const [cars, setCars] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCars()
      .then(setCars)
      .catch((err) => console.error("Ошибка загрузки:", err))
      .finally(() => setTimeout(() => setLoading(false), 300));
  }, []);

  const [filteredCars, setFilteredCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countCars, setCountCars] = useState(0);

  const paginatedCars = filteredCars.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);

  if (isLoading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Загрузка...</span>
        </Spinner>
      </Container>
    );
  }

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
