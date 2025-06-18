import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

import DetailInformBlock from "../components/CarPage/DetailInformBlock";
import DreadcrumbBlock from "../components/CarPage/DreadcrumbBlock";
import EmptyPage from "../components/CarPage/EmptyPage";
import MainInformBlock from "../components/CarPage/MainInformBlock";
import { useApi } from "../context/ApiContext";

export default function CarPage() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const { getCarById } = useApi();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (car) {
      document.title = `${car.title} — AutoImport`;
    }
  }, [car]);

  useEffect(() => {
    setLoading(true);
    getCarById(id)
      .then(setCar)
      .catch((err) => {
        console.error("Ошибка загрузки:", err);
        setCar(null);
      })
      .finally(() => setTimeout(() => setLoading(false), 300));
  }, [id]);

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

  if (!car) {
    return <EmptyPage />;
  }

  return (
    <Container className="my-4">
      <DreadcrumbBlock title={car.title} />
      <MainInformBlock car={car} />
      <DetailInformBlock car={car} />
    </Container>
  );
}
