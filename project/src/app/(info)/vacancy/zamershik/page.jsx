import { Vacancy } from "@/UI";

export const metadata = {
  title: "Белорусская фабрика мебели ЗОВ | Работа замерщиком",
  description: "Приглашаем в нашу компанию на должность замерщика.",
};

const data = {
  value: "Замерщик",
  description: "Приглашаем на должность Замерщик.",
};

export default function page() {
  return <Vacancy data={data} />;
}
