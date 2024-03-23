import { ServiceList } from "@/UI";

export const metadata = {
  title: "Белорусская фабрика мебели ЗОВ | Услуги и сервис",
  description: "Услуги и сервисное обслуживание клиентов.",
};
const stats = [
  { name: 'Рубрика', value: 'Мебель' },
  { name: 'Категория', value: 'Кухонные гарнитуры', unit: 'поз.' },
]
export default function page() {
  return (
    <>

      <ServiceList />;
    </>
  )
}
