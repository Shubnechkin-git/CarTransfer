import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import AdvantagesBlock from "../components/About/AdvantagesBlock";
import CompanyBlock from "../components/About/CompanyBlock";
import TeamBlock from "../components/About/TeamBlock";
import { useApi } from "../context/ApiContext";

export default function About() {
  useEffect(() => {
    document.title = "О компании — AutoImport";
  }, []);

  const { getStaff } = useApi();
  const [isLoading, setLoading] = useState(false);
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    setLoading(true);
    getStaff()
      .then(setStaff)
      .catch((err) => {
        console.error("Ошибка загрузки:", err);
        setStaff([]);
      })
      .finally(() => setTimeout(() => setLoading(false), 300));
  }, []);

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
    <Container className="py-5">
      <CompanyBlock />
      <TeamBlock staff={staff} />
      <AdvantagesBlock />
    </Container>
  );
}
