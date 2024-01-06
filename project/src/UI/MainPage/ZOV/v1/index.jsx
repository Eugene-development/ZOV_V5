import { CircleBackground } from "./CircleBackground";
import { Container } from "./Container";

export default function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative  bg-gradient-to-r from-gray-800 via-gray-950 to-gray-800 py-12 sm:py-24"
    >
      <div className="hidden md:block absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <img
          className="mx-auto h-40 md:h-72"
          src="https://zovrus.ru/design/zovrus/images/dist/svg/logo-white.svg"
          alt="Белорусская абрика мебели 'ЗОВ'"
        />
      </Container>
    </section>
  );
}
