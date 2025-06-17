import { Row } from "react-bootstrap";
import PeopleCard from "./PeopleCard";

export default function TeamBlock() {
  const peopleList = [
    {
      fio: "Артем Лебедев",
      description:
        "Поможет подобрать оптимальную схему покупки - от полной оплаты до кредитных программ. Имеет опыт работы в банковской сфере более 8 лет.",
      image: null,
    },
    {
      fio: "Ольга Морозова",
      description:
        "Эксперт по корейскому авторынку с личными контактами у дилеров в Сеуле. Поможет приобрести автомобиль напрямую у официальных дистрибьюторов.",
      image: null,
    },
    {
      fio: "Михаил Орлов",
      description:
        "Проводит предпродажную диагностику всех автомобилей. В прошлом - главный механик крупного автосервиса. Найдет даже скрытые дефекты.",
      image: null,
    },
  ];

  if (peopleList.length === 0) return;
  return (
    <div>
      <h2 className="mb-4 text-center mt-5">Наша команда</h2>
      <Row className="mb-5">
        {peopleList.map((people) => (
          <PeopleCard people={people} />
        ))}
      </Row>
    </div>
  );
}
