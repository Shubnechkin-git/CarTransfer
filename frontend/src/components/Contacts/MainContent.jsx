import React from "react";
import { Row } from "react-bootstrap";
import ContactInform from "./ContactInform";
import Feedback from "./Feedback";

export default function MainContent({ mainColor }) {
  return (
    <Row className="g-4 mb-4">
      {/* Контактная информация */}
      <ContactInform mainColor={mainColor} />

      {/* Форма обратной связи */}
      <Feedback mainColor={mainColor} />
    </Row>
  );
}
