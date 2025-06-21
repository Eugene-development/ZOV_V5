import Image from "next/image";
import { FadeIn } from "@/functions/FadeIn";

import { Container } from "./Container";
import avatarImage1 from "@/images/avatars/avatar-1.png";
import avatarImage2 from "@/images/avatars/avatar-2.png";
import avatarImage3 from "@/images/avatars/avatar-3.png";
import avatarImage4 from "@/images/avatars/avatar-4.png";
import avatarImage5 from "@/images/avatars/avatar-5.png";
import avatarImage6 from "@/images/avatars/face.jpeg";

const testimonials = [
  [
    {
      content:
        "Давно мечтала о шкафе-купе, но не могла найти подходящий в магазинах. Но когда я узнала о возможности заказать мебель на заказ, решила попробовать. И я не пожалела! Нашла эту фирму. Шкаф превосходно соответствует моим пожеланиям и идеально вписывается в интерьер комнаты. Я очень довольна моей покупкой!",
      author: {
        name: "Ася",
        role: "11 сентября 2023",
        image: avatarImage4,
      },
    },
    {
      content:
        "Я очень доволен своей покупкой кухонного гарнитура. Мебель оказалась не только красивой, но и очень качественной. Кухня стала выглядеть еще более стильной и привлекательной с этой мебелью. В общем рекомендую!!!",
      author: {
        name: "Саня",
        role: "12 октября 2022",
        image: avatarImage6,
      },
    },
  ],
  [
    {
      content:
        "Лучший опыт это собственный. Не пожалел. Заказ был сложный и недешёвый для нашего бюджета. Молодцы что справились и сделали гарнитур по моим желаниям.",
      author: {
        name: "Сергей Викторович Вавилов",
        role: "17 февраля 2022",
        image: avatarImage5,
      },
    },
    {
      content:
        'В этой компании заказала вместительную гардеробную и с нетерпением ждала ее доставки. Когда она пришла, я была в восторге! Гардеробная оказалась еще более вместительной, чем я ожидала. Теперь могу спокойно хранить там все свои вещи и не боюсь, что они запутаются)). Гардеробная очень красивая и качественная, в общем рекомендую фабрику "ЗОВ", кто ищет вместительное и красивое хранение для своих вещей.',
      author: {
        name: "Оленька",
        role: "30 июня 2023",
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        "Я на прошлой неделе купил шкаф для балкона и очень доволен своей покупкой. Удобная мебель, которая решила мою проблему с хранением на балконе. Шкаф оказался не только практичным, но и красивым, идеально вписывается в интерьер балкона. Я рекомендую эту мебель для тех, кто ищет хорошее решение для хранения на балконе. Отдельное спасибо сборщикам.",
      author: {
        name: "Ринат А.",
        role: "22 мая 2022",
        image: avatarImage3,
      },
    },
    {
      content:
        "Спасибо за быстро выполненную работу! Обязательно обратимся за мебелью ещё в следующем году. Мы с мужем очень довольны.))",
      author: {
        name: "Татьяна Р.",
        role: "22 ноября 2021",
        image: avatarImage1,
      },
    },
  ],
];

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  );
}

export default () => {
  return (
    <>
      <section
        id="testimonials"
        aria-label="Что о нас говорят покупатели"
        className="bg-gray-50 py-20 sm:py-32"
      >
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className=" mb-8 text-3xl md:text-6xl  font-extrabold text-gray-900 dark:text-white">
                Отзывы <br className="md:hidden" /> о нас
              </h2>
              <p className="mt-4 text-sm sm:text-lg tracking-tight text-gray-700">
                Однажды, возможно, мы разместим и ваш положительный отзыв о
                нашей компании. Мы будем очень стараться для этого.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
            >
              {testimonials.map((column, columnIndex) => (
                <li key={columnIndex}>
                  <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                    {column.map((testimonial, testimonialIndex) => (
                      <li key={testimonialIndex}>
                        <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-gray-900/10">
                          <QuoteIcon className="absolute top-6 left-6 fill-gray-100" />
                          <blockquote className="relative">
                            <p className="text-lg tracking-tight text-gray-900">
                              {testimonial.content}
                            </p>
                          </blockquote>
                          <figcaption className="relative mt-6 flex items-center justify-between border-t border-gray-100 pt-6">
                            <div>
                              <div className="text-base text-gray-700">
                                {testimonial.author.name}
                              </div>
                              <div className="mt-1 text-sm text-gray-500">
                                {testimonial.author.role}
                              </div>
                            </div>
                            <div className="overflow-hidden rounded-sm bg-gray-50">
                              <Image
                                className="h-24 w-32 object-cover rounded-xl"
                                src={testimonial.author.image}
                                alt=""
                                width={56}
                                height={56}
                              />
                            </div>
                          </figcaption>
                        </figure>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </section>
    </>
  );
};
