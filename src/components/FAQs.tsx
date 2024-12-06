"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";

const items = [
  {
    question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    answer:
      "Tüm büyük kredi kartlarını, PayPal'ı ve bulunduğunuz yere bağlı olarak çeşitli diğer ödeme yöntemlerini kabul ediyoruz. Bölgenizde kabul edilen ödeme yöntemleri hakkında daha fazla bilgi için lütfen destek ekibimizle iletişime geçin.",
  },
  {
    question: "Ekipler için fiyatlandırma nasıl işliyor?",
    answer:
      "Fiyatlandırmamız kullanıcı başına, aylıktır. Bu, yalnızca hesabınızdaki ekip üyesi sayısı için ödeme yapacağınız anlamına gelir. Daha büyük ekipler ve yıllık abonelikler için indirimler mevcuttur.",
  },
  {
    question: "Planımı daha sonra değiştirebilir miyim?",
    answer:
      "Evet, planınızı istediğiniz zaman yükseltebilir veya düşürebilirsiniz. Planınızdaki değişiklikler orantılı olarak hesaplanacak ve bir sonraki fatura döneminize yansıtılacaktır.",
  },
  {
    question: "Verilerim güvende mi?",
    answer:
      "Güvenlik bizim en önemli önceliğimizdir. Verilerinizin güvenli bir şekilde saklanmasını ve yalnızca yetkili kullanıcılar tarafından erişilmesini sağlamak için son teknoloji şifreleme kullanıyor ve en iyi endüstri uygulamalarına uyuyoruz.",
  },
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className="py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              marginTop: 16,
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">
          Sıkça sorulan sorular
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }, index) => (
            <AccordionItem question={question} answer={answer} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
