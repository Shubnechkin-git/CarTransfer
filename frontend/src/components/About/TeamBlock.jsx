import { Row } from "react-bootstrap";
import PeopleCard from "./PeopleCard";

export default function TeamBlock({ staff }) {
  if (staff.length === 0) return;

  return (
    <div>
      <h2 className="mb-4 text-center mt-5">Наша команда</h2>
      <Row className="mb-5">
        {staff.map((people) => (
          <PeopleCard people={people} />
        ))}
      </Row>
    </div>
  );
}
