import EcoSystemIcon from "../assets/icons/ecosystem.svg";
import { Feature } from "@/components/Feature";

const features = [
  {
    title: "Entegrasyon Ekosistemi",
    description:
      "Araçlarınızla bağlantı kurarak ve temel ihtiyaçlarınızı tek bir yerde tutarak üretkenliğinizi artırın.",
  },
  {
    title: "Hedef Belirleme ve İzleme",
    description:
      "Hedeflerinizi tanımlayın ve takip edin, hedeflerinizi ulaşılabilir görevlere ayırın.",
  },
  {
    title: "Güvenli Veri Şifreleme",
    description:
      "Uçtan uca şifreleme ile verileriniz güvenli bir şekilde saklanır ve yetkisiz erişime karşı korunur.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          İhtiyacınız olan her şey
        </h2>

        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Tek bir yerde özelleştirilebilir listelerin, ekip çalışması
            araçlarının ve akıllı takibin keyfini çıkarın. Görevler belirleyin,
            hatırlatıcılar alın ve ilerlemenizi basit ve hızlı bir şekilde
            görün.
          </p>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map(({ title, description }, index) => (
            <Feature title={title} description={description} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
