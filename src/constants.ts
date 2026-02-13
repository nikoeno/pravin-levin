const S3_BASE_URL_ICONS = "https://s3.twcstorage.ru/nixjke-s3-bucket/nixjke/images/socials_icons";
export const socialIcons = {
  apple: `${S3_BASE_URL_ICONS}/apple.svg`,
  bluesky: `${S3_BASE_URL_ICONS}/bluesky.svg`,
  discord: `${S3_BASE_URL_ICONS}/discord.svg`,
  dribble: `${S3_BASE_URL_ICONS}/dribble.svg`,
  facebook: `${S3_BASE_URL_ICONS}/facebook.svg`,
  figma: `${S3_BASE_URL_ICONS}/figma.svg`,
  github: `${S3_BASE_URL_ICONS}/github.svg`,
  google: `${S3_BASE_URL_ICONS}/google.svg`,
  instagram: `${S3_BASE_URL_ICONS}/instagram.svg`,
  linkedin: `${S3_BASE_URL_ICONS}/linkedin.svg`,
  medium: `${S3_BASE_URL_ICONS}/medium.svg`,
  messenger: `${S3_BASE_URL_ICONS}/messenger.svg`,
  pinterest: `${S3_BASE_URL_ICONS}/pinterest.svg`,
  reddit: `${S3_BASE_URL_ICONS}/reddit.svg`,
  signal: `${S3_BASE_URL_ICONS}/signal.svg`,
  snapchat: `${S3_BASE_URL_ICONS}/snapchat.svg`,
  spotify: `${S3_BASE_URL_ICONS}/spotify.svg`,
  telegram: `${S3_BASE_URL_ICONS}/telegram.svg`,
  threads: `${S3_BASE_URL_ICONS}/threads.svg`,
  tiktok: `${S3_BASE_URL_ICONS}/tiktok.svg`,
  tumblr: `${S3_BASE_URL_ICONS}/tumblr.svg`,
  twitch: `${S3_BASE_URL_ICONS}/twitch.svg`,
  twitter: `${S3_BASE_URL_ICONS}/twitter.svg`,
  vk: `${S3_BASE_URL_ICONS}/vk.svg`,
  whatsapp: `${S3_BASE_URL_ICONS}/whatsapp.svg`,
  youtube: `${S3_BASE_URL_ICONS}/youtube.svg`,
  boosty: `${S3_BASE_URL_ICONS}/boosty.svg`,
  email: `${S3_BASE_URL_ICONS}/email.svg`,
  shikimori: `${S3_BASE_URL_ICONS}/shikimori.svg`,
  file: `${S3_BASE_URL_ICONS}/file.svg`,
  "": `${S3_BASE_URL_ICONS}/google.svg`,
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

export const primarySocials = [
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
] as const;

export const title = "Nix";
export const subtitle = "Ex–pro Dota 2 player, Community caster, Streamer";
