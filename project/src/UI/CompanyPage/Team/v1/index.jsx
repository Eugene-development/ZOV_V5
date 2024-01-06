import { FadeIn } from "@/functions/FadeIn";

const team = [
  {
    name: "Александр Кайкы",
    email: "204@zovrus.ru",
    imageUrl:
      "https://zovrus.ru/files/_cache/user/chr-3221.resize3000x3000.jpg?853cefe61157af152539d7d8a20d3e96",
  },
  {
    name: "Алла Зобова",
    email: "69@zovrus.ru",
    imageUrl:
      "https://zovrus.ru/files/_cache/user/_mg_6674.resize3000x3000.jpg?48bee53d809439b663dcf8a1ed66895f",
  },
  {
    name: "Александр Микульский",
    email: "137@zovrus.ru",
    imageUrl:
      "https://zovrus.ru/files/_cache/user/chr-3252.resize3000x3000.jpg?4a3f84f0a863eb3d28a92810e0c2d069",
  },
  {
    name: "Александр Пономарёв",
    email: "20@zovrus.ru",
    imageUrl:
      "https://zovrus.ru/files/_cache/user/_mg_5866.resize3000x3000.jpg?8c7f0a1677460fc0df8da1f63c7fdc52",
  },
  {
    name: "Анастасия Сухорукова",
    email: "k32@zovrus.ru",
    imageUrl:
      "https://zovrus.ru/files/_cache/user/_mg_5787.resize3000x3000.jpg?852ca2af5a49f964772c9330b9bdddb7",
  },
  {
    name: "Александр Стаховский",
    email: "roy2@zovrus.ru",
    imageUrl:
      "https://zovrus.ru/files/_cache/user/_mg_8573_8574.resize3000x3000.jpg?ed0f32d69f83dcb8bcf8f70b58365eb2",
  },
  {
    name: "Александра Левина",
    email: "105@zovrus.ru",
    imageUrl:
      "https://zovrus.ru/files/_cache/user/_mg_8352.resize3000x3000.jpg?7a46636d99bbc67be234c9360ed8f432",
  },
  {
    name: "Анастасия Рычкова",
    email: "118@zovrus.ru",
    imageUrl:
      "https://zovrus.ru/files/_cache/user/_mg_7237.resize3000x3000.jpg?0db90d9352023a191affa83c447425d9",
  },
  {
    name: "Андрей Мишин",
    email: "114@zovrus.ru",
    imageUrl:
      "https://zovrus.ru/files/_cache/user/_mg_7957.resize3000x3000.jpg?66559c4438db238c2c437342d469a684",
  },
  {
    name: "Андрей Савин",
    email: "202@zovrus.ru",
    imageUrl:
      "https://zovrus.ru/files/_cache/user/_mg_7742.resize3000x3000.jpg?9c09ef32613fca58fb0c64121682e1bb",
  },
  {
    name: "Анжела Ткачёва",
    email: "206@zovrus.ru",
    imageUrl:
      "https://zovrus.ru/files/_cache/user/_mg_5670.resize3000x3000.jpg?5969c08b86dccbfac2bf03da43e92745",
  },
  {
    name: "Ася Решетникова",
    email: "127@zovrus.ru",
    imageUrl:
      "https://zovrus.ru/files/_cache/user/_mg_6085.resize3000x3000.jpg?3cbf7d77893bb809e7f17a6551a7e61c",
  },
  {
    name: "Борисова Екатерина",
    email: "83@zovrus.ru",
    imageUrl:
      "https://zovrus.ru/files/_cache/user/_mg_6718.resize3000x3000.jpg?59792cd0190357a313dd83760fff3f62",
  },
  {
    name: "Валерий Селищев",
    email: "109@zovrus.ru",
    imageUrl:
      "https://zovrus.ru/files/_cache/user/_mg_5107.resize3000x3000.jpg?25a9e38dc5f7357edc9272f577a1e4ef",
  },
  {
    name: "Герман Мхитарян",
    email: "92@zovrus.ru",
    imageUrl:
      "https://zovrus.ru/files/_cache/user/_mg_7187.resize3000x3000.jpg?616b6bdd44182631f3ac0d2640b62e9d",
  },
  {
    name: "Дмитрий Баркин",
    email: "roy3@zovrus.ru",
    imageUrl:
      "https://zovrus.ru/files/_cache/user/_mg_8746_8747.resize3000x3000.jpg?e26c1c94efceef2253d28262ec2dbe94",
  },
  {
    name: "Дмитрий Михайлов",
    email: "k66@zovrus.ru",
    imageUrl:
      "https://zovrus.ru/files/_cache/user/_mg_6398.resize3000x3000.jpg?5ed9b9b313f5a5d23fa5e7eee74a28da",
  },
  {
    name: "Евгения Бакотина",
    email: "60@zovrus.ru",
    imageUrl:
      "https://zovrus.ru/files/_cache/user/_mg_7145.resize3000x3000.jpg?85439ffaf0f6aab46d855fd337c005f0",
  },
  {
    name: "Екатерина Ванюшкина",
    email: "147@zovrus.ru",
    imageUrl:
      "https://zovrus.ru/files/_cache/user/chr-3391.resize3000x3000.jpg?c16a1b1346998a5a8af7c32ddc9c3508",
  },
  {
    name: "Екатерина Сергеева",
    email: "93@zovrus.ru",
    imageUrl:
      "https://zovrus.ru/files/_cache/user/_mg_7403.resize3000x3000.jpg?1a692bba967410d4277e6de4fb41ecdf",
  },
];

export default () => {
  return (
    <div className="mx-auto my-32 max-w-7xl px-6 sm:my-48 lg:px-8">
      <div className="mx-auto max-w-5xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Лучшие дизайнеры нашей компании
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Наши дизайнеры - талантливые профессионалы, вдохновленные творчеством,
          они создают уникальные и функциональные мебельные решения, отражающие
          индивидуальный стиль и вкус наших клиентов.
        </p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-16 text-center sm:grid-cols-2 md:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4 xl:grid-cols-5"
      >
        {team.map((person) => (
          <FadeIn>
            <li key={person.name}>
              <img
                className="mx-auto h-54 w-32 rounded-md"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-base  leading-7 tracking-tight text-gray-900">
                {person.name}
              </h3>
              {/* <p className="text-sm leading-6 text-gray-600">{person.email}</p> */}
            </li>
          </FadeIn>
        ))}
      </ul>
    </div>
  );
};
