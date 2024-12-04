import helixImage from "../assets/images/helix2.png";
import emojiStarImage from "../assets/images/emojistar.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-xl relative">
        <Image
          src={helixImage}
          alt="Helix2 Resim"
          className="absolute top-6 left-[calc(100%+36px)]"
        />
        <Image
          src={emojiStarImage}
          alt="Emoji Yıldız Resim"
          className="absolute -top-[120px] right-[calc(100%+24px)]"
        />

        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          Anında erişim sağlayın
        </h2>
        <p className="text-xl text-white/70 mt-5">
          İlerlemenizi takip etmek ve çabalarınızı motive etmek için tasarlanmış
          bir uygulama ile başarı sevincinizi kutlayın.
        </p>

        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="email@gmail.com"
            className="h-12 bg-white/20 rounded-lg font-medium px-5 placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5">
            Erişim sağlayın
          </button>
        </form>
      </div>
    </div>
  );
};
