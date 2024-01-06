import { Vacancy } from "@/UI";

export const metadata = {
  title: "Белорусская фабрика мебели ЗОВ | Работа водителем",
  description: "Приглашаем в нашу компанию на должность водителя.",
};

const data = {
  value: "Водитель",
  description: "Приглашаем на должность Водитель",
};

export default function page() {
  return <Vacancy data={data} />;
}
