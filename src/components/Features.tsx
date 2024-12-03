import EcoSystemIcon from "../assets/icons/ecosystem.svg";

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
        <h2 className="text-center font-bold text-5xl tracking-tighter">
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
            <div
              key={index}
              className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1"
            >
              <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
                <EcoSystemIcon />
              </div>
              <h3 className="mt-6 font-bold ">{title}</h3>
              <p className="mt-2 text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
