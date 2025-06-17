import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { FaFilter, FaSearch } from "react-icons/fa";

export default function Filters({
  cars,
  setFilteredCars,
  setCurrentPage,
  setCountCars,
}) {
  const [filters, setFilters] = useState({
    country: "",
    minPrice: "",
    maxPrice: "",
    yearFrom: "",
    yearTo: "",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const filteredCars = cars.filter((car) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        car.title.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilters =
        (filters.country === "" || car.country === filters.country) &&
        (filters.minPrice === "" || car.price >= Number(filters.minPrice)) &&
        (filters.maxPrice === "" || car.price <= Number(filters.maxPrice)) &&
        (filters.yearFrom === "" || car.year >= Number(filters.yearFrom)) &&
        (filters.yearTo === "" || car.year <= Number(filters.yearTo));

      return matchesSearch && matchesFilters;
    });

    setCurrentPage(1);
    setFilteredCars(filteredCars);

    const isAnyFilterApplied = Object.values(filters).some(
      (value) => value !== ""
    );

    const count =
      searchQuery.trim() === "" && !isAnyFilterApplied
        ? cars.length
        : filteredCars.length;

    setCountCars(count);
  }, [cars, filters, searchQuery]);

  return (
    <Row className="mb-4">
      <Col>
        <Card className="border-0 shadow-sm">
          <Card.Body>
            <div className="d-flex flex-column flex-md-row align-items-md-center gap-3">
              <Form.Group className="flex-grow-1">
                <div className="input-group">
                  <span className="input-group-text bg-white border-end-0">
                    <FaSearch />
                  </span>
                  <Form.Control
                    type="text"
                    placeholder="Поиск по марке или модели..."
                    className="border-start-0"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </Form.Group>

              <Button
                variant="outline-secondary"
                onClick={() => setShowFilters(!showFilters)}
                className="d-flex align-items-center gap-2"
              >
                <FaFilter /> Фильтры
              </Button>
            </div>

            {showFilters && (
              <div className="mt-4 pt-3 border-top">
                <Row>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Страна</Form.Label>
                      <Form.Select
                        value={filters.country}
                        onChange={(e) =>
                          setFilters({ ...filters, country: e.target.value })
                        }
                      >
                        <option value="">Все страны</option>
                        <option value="Германия">Германия</option>
                        <option value="Япония">Япония</option>
                        <option value="Корея">Корея</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Цена от</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="₽"
                        value={filters.minPrice}
                        onChange={(e) =>
                          setFilters({ ...filters, minPrice: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>

                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Цена до</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="₽"
                        value={filters.maxPrice}
                        onChange={(e) =>
                          setFilters({ ...filters, maxPrice: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>

                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Год выпуска</Form.Label>
                      <div className="d-flex gap-2">
                        <Form.Control
                          type="number"
                          placeholder="От"
                          value={filters.yearFrom}
                          onChange={(e) =>
                            setFilters({
                              ...filters,
                              yearFrom: e.target.value,
                            })
                          }
                        />
                        <Form.Control
                          type="number"
                          placeholder="До"
                          value={filters.yearTo}
                          onChange={(e) =>
                            setFilters({ ...filters, yearTo: e.target.value })
                          }
                        />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
              </div>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
