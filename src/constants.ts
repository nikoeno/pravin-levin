export const socialIcons = {
  apple: "/assets/socials_icons/apple.svg",
  bluesky: "/assets/socials_icons/bluesky.svg",
  discord: "/assets/socials_icons/discord.svg",
  dribble: "/assets/socials_icons/dribble.svg",
  facebook: "/assets/socials_icons/facebook.svg",
  figma: "/assets/socials_icons/figma.svg",
  github: "/assets/socials_icons/github.svg",
  google: "/assets/socials_icons/google.svg",
  instagram: "/assets/socials_icons/instagram.svg",
  linkedin: "/assets/socials_icons/linkedin.svg",
  medium: "/assets/socials_icons/medium.svg",
  messenger: "/assets/socials_icons/messenger.svg",
  pinterest: "/assets/socials_icons/pinterest.svg",
  reddit: "/assets/socials_icons/reddit.svg",
  signal: "/assets/socials_icons/signal.svg",
  snapchat: "/assets/socials_icons/snapchat.svg",
  spotify: "/assets/socials_icons/spotify.svg",
  telegram: "/assets/socials_icons/telegram.svg",
  threads: "/assets/socials_icons/threads.svg",
  tiktok: "/assets/socials_icons/tiktok.svg",
  tumblr: "/assets/socials_icons/tumblr.svg",
  twitch: "/assets/socials_icons/twitch.svg",
  twitter: "/assets/socials_icons/twitter.svg",
  vk: "/assets/socials_icons/vk.svg",
  whatsapp: "/assets/socials_icons/whatsapp.svg",
  youtube: "/assets/socials_icons/youtube.svg",
  boosty: "/assets/socials_icons/boosty.svg",
  email: "/assets/socials_icons/email.svg",
  shikimori: "/assets/socials_icons/shikimori.svg",
  file: "/assets/socials_icons/file.svg",
  "": "/assets/socials_icons/google.svg",
} as const;
export type SocialsType = keyof typeof socialIcons;

export const banners = [
  {
    name: "Забрать до 10.000 фрибетов на BetBoom",
    url: "https://cyberbb.ru/tw/nix",
    type: "",
  },
  {
    name: "10% скидка по промо NIX в NUW",
    url: "https://clck.ru/3PznTq",
    type: "",
  },
] as const;

export const primarySocials = [] as const;

export const secondarySocials = [
  {
    name: "Стримы на Twitch",
    url: "https://www.twitch.tv/Nix",
    type: "twitch",
  },
  {
    name: "Основной канал Telegram",
    url: "https://t.me/nixtalk",
    type: "telegram",
  },
  {
    name: "Основной канал Youtube",
    url: "https://www.youtube.com/@Nixtwitch",
    type: "youtube",
  },
  {
    name: "Tiktok",
    url: "https://www.tiktok.com/@nix.dota",
    type: "tiktok",
  },
  {
    name: "VK",
    url: "https://vk.com/nixjke",
    type: "vk",
  },
  {
    name: "Discord",
    url: "https://discord.gg/nix",
    type: "discord",
  },
  {
    name: "Записи просмотровых стримов на Boosty",
    url: "https://boosty.to/nixjkeee",
    type: "boosty",
  },
  {
    name: "Полные записи старых стримов",
    url: "https://www.youtube.com/@NixStreamVods/videos",
    type: "youtube",
  },
  {
    name: "Архив",
    url: "https://www.youtube.com/@nixarhiv/videos",
    type: "youtube",
  },
  {
    name: "ПК и девайсы",
    url: "https://docs.google.com/document/d/148k6vnWZp0ALa4VmPxNV0NaSm5VtpHno7ll8rI2vgx0/edit?tab=t.0",
    type: "file",
  },
  {
    name: "Shikimori",
    url: "https://shikimori.one/nixjke/list/anime?order=rate_score",
    type: "shikimori",
  },
  {
    name: "Почта для деловых предложений",
    url: "nixoffers@gmail.com",
    type: "email",
  },
  {
    name: "Личные вопросы и прямая связь",
    url: "https://t.me/nixtalk?direct",
    type: "telegram",
  },
] as const;

export const title = "Nix";
export const subtitle = "Ex–pro Dota 2 player, Community caster, Streamer";
