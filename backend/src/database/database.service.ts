import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/cars/car.entity';
import { Feature } from 'src/cars/feature.entity';
import { Image } from 'src/cars/image.entity';
import { Staff } from 'src/staff/staff.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
    @InjectRepository(Staff)
    private staffRepository: Repository<Staff>,
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
    @InjectRepository(Feature) // <-- внедряем репозиторий Feature
    private featureRepository: Repository<Feature>,
  ) {}

  async seedDatabase() {
    // Clear tables with CASCADE to handle foreign key constraints
    await this.carRepository.query('TRUNCATE TABLE "car" CASCADE');
    await this.staffRepository.clear();
    await this.featureRepository.clear();

    // Seed the tables
    await this.seedStaff();
    await this.seedCars();
    await this.seedFeatures();
  }

  private async seedStaff() {
    const staffData = [
      {
        fio: 'Артем Лебедев',
        description:
          'Поможет подобрать оптимальную схему покупки - от полной оплаты до кредитных программ. Имеет опыт работы в банковской сфере более 8 лет.',
        image:
          'https://soltecnicas.com.br/wp-content/uploads/2021/08/Eletrista-em-Campinas-1024x683.jpeg',
      },
      {
        fio: 'Ольга Морозова',
        description:
          'Эксперт по корейскому авторынку с личными контактами у дилеров в Сеуле. Поможет приобрести автомобиль напрямую у официальных дистрибьюторов.',
        image:
          'https://img.freepik.com/premium-photo/successful-european-middle-aged-businessman-standing-crossing-hands-posing-with-confidence-office_116547-67844.jpg?semt=ais_hybrid&w=740',
      },
      {
        fio: 'Михаил Орлов',
        description:
          'Проводит предпродажную диагностику всех автомобилей. В прошлом - главный механик крупного автосервиса. Найдет даже скрытые дефекты.',
        image:
          'https://avatars.mds.yandex.net/i?id=84bcd08091e586af5014d32e6913bf74_l-4586846-images-thumbs&n=13',
      },
    ];

    await this.staffRepository.save(staffData);
    console.log('Staff data seeded');
  }

  private async seedCars() {
    const carsData = [
      {
        title: 'BMW 5 Series 520i Luxury',
        country: 'Германия',
        year: 2019,
        price: 2300000,
        mileage: 45000,
        engine: '2.0 л (184 л.с.)',
        transmission: 'Автомат',
        drive: 'Задний',
        color: 'Чёрный сапфир',
        interior: 'Кожа Vernasca, коричневый',
        description:
          'Комфортный и мощный седан бизнес-класса с полным пакетом опций. В наличии все сервисные записи, 1 владелец, без ДТП. Полностью обслужен у официального дилера.',
        rating: 4.8,
        isNew: false,
        images: [
          {
            url: 'https://avatars.mds.yandex.net/i?id=7dda2d3f53a2ac0da28c1125c3033cbdefe57368-5142520-images-thumbs&n=13',
          },
          {
            url: 'https://avatars.mds.yandex.net/get-autoru-vos/4843514/6fc849250c81f634d3a5864dc1034e3e/1200x900',
          },
          {
            url: 'https://база.демо.сайт/upload/baza_images/koreya/25273/bmw-5-series-g30-520i-luxury-1998-2021-5dxnjpl7hz6zqt-st-0.webp',
          },
        ],
      },
      {
        title: 'Toyota Camry Hybrid',
        country: 'Япония',
        year: 2020,
        price: 1800000,
        mileage: 32000,
        engine: '2.5 л Hybrid (218 л.с.)',
        transmission: 'Автомат',
        drive: 'Передний',
        color: 'Белый жемчуг',
        interior: 'Кожа, черный',
        description:
          'Экономичный и надежный гибрид с полным пакетом опций. Один владелец, полная сервисная история. Отличное состояние.',
        rating: 4.9,
        isNew: true,
        images: [
          {
            url: 'https://avatars.mds.yandex.net/i?id=3fd265d4627ed9d9314e4ffd8967b30118ab53dee33ce890-5229226-images-thumbs&n=13',
          },
          {
            url: 'https://i.pinimg.com/originals/a8/be/a1/a8bea119a83bd14b683b72e5da0b4b3b.jpg',
          },
        ],
      },
      {
        title: 'Hyundai Sonata N-Line',
        country: 'Корея',
        year: 2021,
        price: 1600000,
        mileage: 28000,
        engine: '2.5 л Turbo (290 л.с.)',
        transmission: 'Автомат',
        drive: 'Передний',
        color: 'Серый металлик',
        interior: 'Кожа, красный',
        description:
          'Спортивная версия с турбированным двигателем. Полный пакет опций, включая систему мониторинга слепых зон и панорамную крышу.',
        rating: 4.7,
        isNew: false,
        images: [
          {
            url: 'https://avatars.mds.yandex.net/i?id=bfc380843f79830055339d1576ba066a_l-5209794-images-thumbs&n=13',
          },
          {
            url: 'https://i.pinimg.com/736x/81/0e/28/810e285eb5a8632b11b02dda7475a057.jpg',
          },
        ],
      },
      {
        title: 'Mercedes-Benz C-Class C200',
        country: 'Германия',
        year: 2020,
        price: 2500000,
        mileage: 35000,
        engine: '1.5 л (204 л.с.)',
        transmission: 'Автомат',
        drive: 'Задний',
        color: 'Серебристый иридий',
        interior: 'Кожа, черный',
        description:
          'Премиальный седан с современными технологиями. Полная история обслуживания, без аварий, один владелец.',
        rating: 4.9,
        isNew: false,
        images: [
          {
            url: 'https://avatars.mds.yandex.net/i?id=5fdc1acf3e7a8eac9cdb4765ab0424e009abeedd-4451037-images-thumbs&n=13',
          },
          {
            url: 'https://i.pinimg.com/736x/db/98/af/db98afc06021f3930fe65e9488daabd0.jpg',
          },
        ],
      },
      {
        title: 'Honda CR-V EX-L',
        country: 'Япония',
        year: 2021,
        price: 2200000,
        mileage: 25000,
        engine: '1.5 л Turbo (190 л.с.)',
        transmission: 'Вариатор',
        drive: 'Полный',
        color: 'Красный металлик',
        interior: 'Кожа, бежевый',
        description:
          'Просторный кроссовер с отличной репутацией. Полный привод, минимальный пробег, идеальное состояние.',
        rating: 4.8,
        isNew: true,
        images: [
          {
            url: 'https://i.pinimg.com/736x/6d/f2/cd/6df2cd5acddde6f96eeedfb19d49dae7.jpg',
          },
          {
            url: 'https://avatars.mds.yandex.net/i?id=aeb2e80a4575c3b8c4c32edcfeb2722c_l-12602673-images-thumbs&n=13',
          },
        ],
      },
      {
        title: 'Audi Q5 Premium Plus',
        country: 'Германия',
        year: 2018,
        price: 2000000,
        mileage: 50000,
        engine: '2.0 л Turbo (252 л.с.)',
        transmission: 'Автомат',
        drive: 'Полный',
        color: 'Синий металлик',
        interior: 'Кожа, серый',
        description:
          'Надежный кроссовер с полным приводом Quattro. Полный пакет опций, включая навигацию и панорамную крышу.',
        rating: 4.7,
        isNew: false,
        images: [
          {
            url: 'https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0224/c652f66bbf9a40e289ffb7a81160e7b0_ful.jpg',
          },
          {
            url: 'https://avatars.mds.yandex.net/i?id=deb9f24302853cc5a92577210b3e03819f302bca-5306827-images-thumbs&n=13',
          },
        ],
      },
      {
        title: 'Kia Sportage GT-Line',
        country: 'Корея',
        year: 2022,
        price: 1900000,
        mileage: 15000,
        engine: '2.4 л (181 л.с.)',
        transmission: 'Автомат',
        drive: 'Полный',
        color: 'Белый перламутр',
        interior: 'Кожа, черный',
        description:
          'Стильный кроссовер с минимальным пробегом. Полный привод, премиальная комплектация, без аварий.',
        rating: 4.8,
        isNew: true,
        images: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/2019_Kia_Sportage_GT-Line_CRDi_ISG_1.6.jpg',
          },
          {
            url: 'https://avatars.mds.yandex.net/i?id=f48589235cad4b9254ce354bdf369513_l-4447708-images-thumbs&n=13',
          },
        ],
      },
      {
        title: 'Volkswagen Tiguan SEL',
        country: 'Германия',
        year: 2019,
        price: 1750000,
        mileage: 40000,
        engine: '2.0 л Turbo (184 л.с.)',
        transmission: 'Автомат',
        drive: 'Полный',
        color: 'Черный металлик',
        interior: 'Кожа, бежевый',
        description:
          'Практичный кроссовер с полным приводом. Полная сервисная история, идеальное техническое состояние.',
        rating: 4.6,
        isNew: false,
        images: [
          {
            url: 'https://avatars.mds.yandex.net/i?id=350ba08298ac91d2fab7725432cecb27bf163e28-8339391-images-thumbs&n=13',
          },
          {
            url: 'https://resizer.mail.ru/p/75982301-b9ae-5fdc-bdec-f3f40fabe805/AQAB9n8yNw2S_KaVDqgGrwmzMr2zpPjSlkB8Rf5C0CYmOzKGByTvSEj_CMyAmlRrtvwFGR-6yUzbCForfYZUxgz3VcY.png',
          },
        ],
      },
      {
        title: 'Lexus RX 350',
        country: 'Япония',
        year: 2020,
        price: 3200000,
        mileage: 30000,
        engine: '3.5 л (295 л.с.)',
        transmission: 'Автомат',
        drive: 'Полный',
        color: 'Серебристый',
        interior: 'Кожа, коричневый',
        description:
          'Премиальный кроссовер с мощным двигателем. Полный пакет опций, включая адаптивный круиз-контроль.',
        rating: 4.9,
        isNew: false,
        images: [
          {
            url: 'https://avatars.mds.yandex.net/i?id=b510cddccfb3fbb6370d09f24a038949f005f85e-13321122-images-thumbs&n=13',
          },
          {
            url: 'https://avatars.mds.yandex.net/get-autoru-vos/5325277/afb37e041920594ba6c00dbcd2bf726f/1200x900',
          },
          {
            url: 'https://images.dailyrevs.com/0000/v3/Lexus/63bc281c9059d2d1bd72a755/2022-rx-350-moonlight-edition-lexus-lck9jassssm0dxl1fhgb4x.jpeg',
          },
        ],
      },
      {
        title: 'Ford Mustang EcoBoost',
        country: 'США',
        year: 2021,
        price: 2600000,
        mileage: 20000,
        engine: '2.3 л Turbo (310 л.с.)',
        transmission: 'Автомат',
        drive: 'Задний',
        color: 'Желтый',
        interior: 'Кожа, черный',
        description:
          'Спортивное купе с ярким дизайном. Минимальный пробег, идеальное состояние, без аварий.',
        rating: 4.8,
        isNew: true,
        images: [
          {
            url: 'https://avatars.mds.yandex.net/i?id=d745046d87a03cab4850f680657b9237baac1016-10176094-images-thumbs&n=13',
          },
          {
            url: 'https://i.ytimg.com/vi/OuQzlR74f44/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLD6hVTBjAV-a9f8z11Up2tIofEUlg',
          },
        ],
      },
      {
        title: 'Tesla Model 3 Standard Range',
        country: 'США',
        year: 2022,
        price: 2800000,
        mileage: 15000,
        engine: 'Электрический (225 л.с.)',
        transmission: 'Автомат',
        drive: 'Задний',
        color: 'Белый',
        interior: 'Кожа, белый',
        description:
          'Электромобиль с автопилотом. Один владелец, минимальный пробег, полная зарядка до 400 км.',
        rating: 4.9,
        isNew: true,
        images: [
          {
            url: 'https://www.platinumautohaus.com/imagetag/13574/3/l/Used-2020-Tesla-Model-3-Standard-Range-Plus.jpg',
          },
          {
            url: 'https://avatars.mds.yandex.net/i?id=d047f351d120a6a4cea65520251472c9_l-5246363-images-thumbs&n=13',
          },
        ],
      },
      {
        title: 'Mazda CX-5 Touring',
        country: 'Япония',
        year: 2020,
        price: 1850000,
        mileage: 35000,
        engine: '2.5 л (187 л.с.)',
        transmission: 'Автомат',
        drive: 'Полный',
        color: 'Красный металлик',
        interior: 'Кожа, черный',
        description:
          'Надежный кроссовер с отличной управляемостью. Полный привод, хорошее состояние, без ДТП.',
        rating: 4.7,
        isNew: false,
        images: [
          {
            url: 'https://avatars.mds.yandex.net/i?id=8e6f0f6d6c26776f300b27c17894171602b67249-4557590-images-thumbs&n=13',
          },
          {
            url: 'https://www.ducatiforum.co.uk/attachments/dsc_0034-jpg.112946/',
          },
        ],
      },
      {
        title: 'Porsche Cayenne S',
        country: 'Германия',
        year: 2019,
        price: 4500000,
        mileage: 40000,
        engine: '2.9 л Turbo (440 л.с.)',
        transmission: 'Автомат',
        drive: 'Полный',
        color: 'Черный',
        interior: 'Кожа, коричневый',
        description:
          'Мощный премиальный кроссовер с полным приводом. Полная история обслуживания, без аварий.',
        rating: 4.9,
        isNew: false,
        images: [
          {
            url: 'https://i.pinimg.com/736x/ee/78/75/ee7875cd6b66bf03d6936d8e8f9e0c07.jpg',
          },
          {
            url: 'https://a.d-cd.net/3b06452s-960.jpg',
          },
          {
            url: 'https://avatars.mds.yandex.net/i?id=7800fe989ab5577f8d6acb8e7354e122008b1524-5026425-images-thumbs&n=13',
          },
        ],
      },
      {
        title: 'Subaru Outback Limited',
        country: 'Япония',
        year: 2021,
        price: 2100000,
        mileage: 27000,
        engine: '2.5 л (182 л.с.)',
        transmission: 'Вариатор',
        drive: 'Полный',
        color: 'Зеленый металлик',
        interior: 'Кожа, бежевый',
        description:
          'Универсал для активного отдыха. Полный привод, минимальный пробег, отличное состояние.',
        rating: 4.8,
        isNew: true,
        images: [
          {
            url: 'https://images.drive.ru/i/0/6130add7259ca162a7a3f4de.jpg',
          },
          {
            url: 'https://img5.lalafo.com/i/posters/original/6f/19/a5/ec2823505c037a45a89d5f6a32.jpeg',
          },
        ],
      },
      {
        title: 'Nissan Qashqai Tekna',
        country: 'Япония',
        year: 2020,
        price: 1650000,
        mileage: 38000,
        engine: '2.0 л (144 л.с.)',
        transmission: 'Вариатор',
        drive: 'Передний',
        color: 'Синий',
        interior: 'Кожа, черный',
        description:
          'Компактный кроссовер с современными опциями. Один владелец, полная сервисная история.',
        rating: 4.6,
        isNew: false,
        images: [
          {
            url: 'https://i.ytimg.com/vi/O2kLIdWG4J0/maxresdefault.jpg',
          },
          {
            url: 'https://avatars.mds.yandex.net/i?id=f2005ceaa5865a933909ede519bf989175973b77-6419094-images-thumbs&n=13',
          },
        ],
      },
    ];

    for (const carData of carsData) {
      const { images, ...carDataWithoutImages } = carData;
      const car = await this.carRepository.save(carDataWithoutImages);

      const carImages = images.map((img) => ({
        ...img,
        car: { id: car.id },
      }));

      await this.imageRepository.save(carImages);
    }

    console.log('Cars data seeded');
  }

  private async seedFeatures() {
    const cars = await this.carRepository.find();
    if (cars.length === 0) {
      console.warn('No cars found for seeding features');
      return;
    }

    // Все возможные комплектации сгруппированные по категориям
    const allFeatures = {
      safety: [
        'ABS',
        'ESP',
        'Подушки безопасности (6)',
        'Система курсовой устойчивости',
        'Адаптивный круиз-контроль',
        'Система экстренного торможения',
        'Система мониторинга слепых зон',
        'Камера 360°',
        'Парктроники',
        'Система распознавания дорожных знаков',
      ],
      comfort: [
        'Климат-контроль 2-зонный',
        'Климат-контроль 4-зонный',
        'Электропакет',
        'Подогрев сидений',
        'Вентиляция сидений',
        'Подогрев руля',
        'Панорамная крыша',
        'Электрорегулировка сидений',
        'Память сидений',
        'Массаж сидений',
      ],
      multimedia: [
        'Мультимедийная система с навигацией',
        'Apple CarPlay/Android Auto',
        'Проекционный дисплей',
        'Аудиосистема премиум-класса',
        'Беспроводная зарядка',
        'DVD-система',
        'Спутниковая навигация',
        'Цифровая приборная панель',
        'Wi-Fi hotspot',
      ],
      exterior: [
        'Светодиодные фары',
        'Лазерные фары',
        'Дневные ходовые огни',
        'Автоматический корректор фар',
        'Датчик дождя',
        'Датчик света',
        'Электропривод зеркал',
        'Подогрев зеркал',
        'Алюминиевые диски',
        'Полноразмерное запасное колесо',
      ],
    };

    const featuresData: Feature[] = [];

    for (const car of cars) {
      // Базовые фичи для всех авто
      const baseFeatures = ['ABS', 'Подушки безопасности (2)', 'Кондиционер'];

      // Рандомное количество дополнительных фич (от 3 до 8)
      const randomCount = Math.floor(Math.random() * 6) + 3;
      const additionalFeatures: string[] = [];

      // Выбираем рандомные фичи из каждой категории
      Object.values(allFeatures).forEach((category) => {
        const randomFeature =
          category[Math.floor(Math.random() * category.length)];
        if (!additionalFeatures.includes(randomFeature)) {
          additionalFeatures.push(randomFeature);
        }
      });

      // Ограничиваем количество выбранных фич
      const selectedFeatures = [...baseFeatures, ...additionalFeatures].slice(
        0,
        randomCount,
      );

      // Создаем фичи для текущего авто
      selectedFeatures.forEach((featureName) => {
        featuresData.push({
          name: featureName,
          car: car,
        });
      });

      // Для новых авто добавляем больше опций
      if (car.isNew) {
        const premiumFeatures = [
          'Память сидений',
          'Панорамная крыша',
          'Аудиосистема премиум-класса',
          'Проекционный дисплей',
        ];

        premiumFeatures.forEach((featureName) => {
          if (!selectedFeatures.includes(featureName)) {
            featuresData.push({
              name: featureName,
              car: car,
            });
          }
        });
      }
    }

    await this.featureRepository.save(featuresData);
    console.log(
      `Seeded ${featuresData.length} features for ${cars.length} cars`,
    );
  }
}
