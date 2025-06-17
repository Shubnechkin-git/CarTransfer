import { Row } from "react-bootstrap";
import HowToGet from "./HowToGet";
import Questions from "./Questions";

export default function AdditionalContent({ mainColor }) {
  return (
    <Row className="g-4 mb-5">
      {/* Блок "Как добраться" */}
      <HowToGet mainColor={mainColor} />

      {/* Блок "Частые вопросы" */}
      <Questions mainColor={mainColor} />
    </Row>
  );
}
