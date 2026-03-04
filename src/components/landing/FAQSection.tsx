import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Какие основные права имеют медицинские работники?",
    answer:
      "Медицинские работники имеют право на условия труда, соответствующие санитарным нормам; защиту профессиональной чести и достоинства; получение квалификационных категорий; профессиональную переподготовку за счёт работодателя; страхование гражданской ответственности (ФЗ № 323, ст. 72).",
  },
  {
    question: "Каковы основные обязанности медработника?",
    answer:
      "Медработник обязан: оказывать медицинскую помощь в соответствии со своей квалификацией и стандартами; соблюдать врачебную тайну; информировать пациента о состоянии его здоровья; отказаться от взяток и подарков, способных повлиять на профессиональные решения (ФЗ № 323, ст. 73).",
  },
  {
    question: "Что такое врачебная тайна и когда её можно раскрыть?",
    answer:
      "Врачебная тайна — это сведения о факте обращения за медицинской помощью, диагнозе, состоянии здоровья и иной персональной информации. Раскрытие допускается: с согласия пациента; при угрозе распространения инфекций; по запросу следственных органов; в случае несчастного случая на производстве (ст. 13 ФЗ № 323).",
  },
  {
    question: "Какова ответственность медработника за ошибку?",
    answer:
      "Медработник может нести гражданско-правовую (возмещение вреда), дисциплинарную (выговор, увольнение), административную и уголовную ответственность (ст. 293 УК РФ — халатность, ст. 238 — оказание услуг ненадлежащего качества). Вид ответственности зависит от тяжести последствий.",
  },
  {
    question: "Имеет ли медработник право отказать в помощи пациенту?",
    answer:
      "Медработник может отказаться от ведения пациента по личным или религиозным убеждениям, однако только если это не угрожает жизни пациента и под условием передачи его другому специалисту. Экстренная помощь обязательна всегда (ст. 70, ст. 11 ФЗ № 323).",
  },
  {
    question: "Какие источники регулируют правовой статус медработника?",
    answer:
      "Основные источники: Конституция РФ (ст. 41); ФЗ № 323 «Об основах охраны здоровья граждан» (2011); Трудовой кодекс РФ; приказы Минздрава; профессиональные стандарты; Уголовный и Гражданский кодексы. Учебная литература: Леонтьев О.В. «Правоведение для медвузов»; Котова К.А. «Правоведение» (2023).",
  },
];

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Левая колонка - заголовок */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Часто задаваемые вопросы
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Ответы на ключевые вопросы о правах,
            <br className="hidden md:block" />
            обязанностях и ответственности медработников.
          </div>
        </div>

        {/* Правая колонка - FAQ */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index);

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}