import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function DreadcrumbBlock({ title = "Без названия" }) {
  return (
    <div>
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none">
              Главная
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/catalog" className="text-decoration-none">
              Каталог
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {title}
          </li>
        </ol>
      </nav>
      {/* Кнопка назад */}
      <Link
        to="/catalog"
        className="d-flex align-items-center mb-4 text-decoration-none"
      >
        <FaChevronLeft className="me-2" />
        <span>Назад к каталогу</span>
      </Link>
    </div>
  );
}
