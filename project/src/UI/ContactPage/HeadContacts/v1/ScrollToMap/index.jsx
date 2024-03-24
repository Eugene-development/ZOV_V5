import Link from "next/link";

export default function index() {
  const scrollToMap = () => {
    const mapElement = document.getElementById("map");
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          scrollToMap();
        }}
        className="rounded-md ring-2 ring-offset-2 ring-gray-200 bg-gray-100 px-8 py-2.5 text-sm font-semibold text-gray-900 shadow-lg shadow-gray-200 hover:bg-primary-100"
      >
        Посмотреть адреса на карте
      </Link>
    </>
  );
}
