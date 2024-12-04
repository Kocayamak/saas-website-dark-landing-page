import InstagramIcon from "../assets/icons/insta.svg";
import TwitterIcon from "../assets/icons/x-social.svg";
import TiktokIcon from "../assets/icons/tiktok.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

const icons = [
  { Icon: InstagramIcon },
  { Icon: TwitterIcon },
  { Icon: TiktokIcon },
  { Icon: YoutubeIcon },
];

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-white/20">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="text-center">@ 2024 m8k., Tüm Hakları Saklıdır</div>
          <ul className="flex justify-center gap-2.5">
            {icons.map(({ Icon }, index) => (
              <li key={index}>
                <Icon />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
