import { Content, HeroCompany, Team, Values, Video } from "@/UI";

export const metadata = {
  title: "Белорусская фабрика мебели ЗОВ | О нашей компании",
  description: "Информация о фабрике ЗОВ и о нашей сети в Москве и области",
};

export default function index() {
  return (
    <>
      <HeroCompany />
      <Content />
      <Video />
      <Values />
    </>
  );
}
