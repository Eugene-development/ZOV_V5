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
        className="rounded-md bg-gray-100 px-8 py-2.5 text-sm font-semibold text-gray-900 shadow-lg shadow-gray-500 hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Посмотреть адреса на карте
      </Link>
    </>
  );
}
