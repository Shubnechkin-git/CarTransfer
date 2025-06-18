import { useState } from "react";
import { Button, Card, Col, Image } from "react-bootstrap";

export default function GalleryBlock({ car }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <Col lg={7}>
      {/* Главное изображение */}
      <Card className="border-0 shadow-sm mb-3">
        <Card.Body className="p-0 overflow-hidden rounded">
          <Image
            src={car.images[activeImage].url}
            alt={car.title}
            fluid
            className="w-100"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </Card.Body>
      </Card>

      {/* Галерея изображений */}
      <div className="d-flex gap-2 overflow-auto pb-2">
        {car.images.map((img, index) => (
          <Button
            key={index}
            variant="outline-secondary"
            className="p-0 border-0"
            onClick={() => setActiveImage(index)}
            active={index === activeImage}
          >
            <Image
              src={img.url}
              alt={`${car.title} ${index + 1}`}
              width={80}
              height={60}
              style={{ objectFit: "cover" }}
              className="rounded"
            />
          </Button>
        ))}
      </div>
    </Col>
  );
}
