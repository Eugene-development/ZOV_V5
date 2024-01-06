import { useState, useEffect } from "react";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const texts = [
  "Фабрика ЗОВ - это крупнейший производитель кухонной и корпусной мебели в Республике Беларусь. Заполните форму и мы посчитаем цену вашего варианта мебели.",
];

type TextTypingEffectProps = {
  isTypeByLetter?: boolean;
  duration?: number;
};

export const TextTypingEffectWithTexts: React.FC<TextTypingEffectProps> = ({
  isTypeByLetter = false,
  duration = 200,
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const textToShow = useTypingEffect(
    texts[textIndex],
    duration,
    isTypeByLetter,
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) =>
        prevIndex >= texts.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <span className="text-black dark:text-white" key={textIndex}>
      {textToShow}
    </span>
  );
};
