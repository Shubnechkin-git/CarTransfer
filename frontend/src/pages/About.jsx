import { useEffect } from "react";
import { Container } from "react-bootstrap";
import AdvantagesBlock from "../components/About/AdvantagesBlock";
import CompanyBlock from "../components/About/CompanyBlock";
import TeamBlock from "../components/About/TeamBlock";

export default function About() {
  useEffect(() => {
    document.title = "О компании — AutoImport";
  }, []);

  return (
    <Container className="py-5">
      <CompanyBlock />
      <TeamBlock />
      <AdvantagesBlock />
    </Container>
  );
}
