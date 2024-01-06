import { Vacancy } from "@/UI";

export const metadata = {
  title: "Белорусская фабрика мебели ЗОВ | Работа сборщиком",
  description: "Приглашаем в нашу компанию на должность сборщика.",
};

const data = {
  value: "Сборщик",
  description: "Приглашаем на должность Сборщик",
};

export default function page() {
  return <Vacancy data={data} />;
}
