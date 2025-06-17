import { Col, Image } from "react-bootstrap";

export default function PeopleCard({ people }) {
  return (
    <Col md={4} className="mb-3 d-flex flex-column">
      <Image
        src={people.image ?? "https://placehold.co/300x300?text=Специалист"}
        alt="Специалист AutoImport"
        fluid
        rounded
        className="shadow-sm mb-3"
      />
      <h4 className="text-center">{people.fio}</h4>
      <p className="text-center">{people.description}</p>
    </Col>
  );
}
