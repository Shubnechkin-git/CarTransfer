import { Button, Col, Row } from "react-bootstrap";

export default function PaginationBlock({
  totalPages,
  currentPage,
  setCurrentPage,
}) {
  if (totalPages <= 1) return null;

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <Button
        key={i}
        variant={i === currentPage ? "secondary" : "outline-secondary"}
        onClick={() => goToPage(i)}
      >
        {i}
      </Button>
    );
  }

  return (
    <Row className="mt-4">
      <Col className="d-flex justify-content-center">
        <div className="d-flex gap-2 flex-wrap">
          <Button
            variant="outline-secondary"
            disabled={currentPage === 1}
            onClick={() => goToPage(currentPage - 1)}
          >
            Назад
          </Button>
          {pageButtons}
          <Button
            variant="outline-secondary"
            disabled={currentPage === totalPages}
            onClick={() => goToPage(currentPage + 1)}
          >
            Вперед
          </Button>
        </div>
      </Col>
    </Row>
  );
}
