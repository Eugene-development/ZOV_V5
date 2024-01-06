import { Vacancy } from "@/UI";

export const metadata = {
  title: "Белорусская фабрика мебели ЗОВ | Работа дизайнером",
  description: "Приглашаем в нашу компанию на должность дизайнера.",
};

const data = {
  value: "Дизайнер",
  description: "Приглашаем на должность Дизайнер",
};

export default function page() {
  return <Vacancy data={data} />;
}
