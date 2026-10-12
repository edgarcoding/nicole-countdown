export interface Config {
  streamerName: string;
  kickUsername: string;
  kickUrl: string;
  targetDate: string; // ISO date string or timestamp
  photos: {
    id: string;
    title: string;
    subtitle: string;
    url?: string; // Optional image URL, fallback placeholder if not set
    badge: string;
  }[];
  randomActivities: string[];
}

export const siteConfig: Config = {
  streamerName: "Nicole Berenice",
  kickUsername: "nicoleberenice",
  kickUrl: "https://kick.com/nicoleberenice",
  // 5 días desde hoy (configurable)
  targetDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
  photos: [
    {
      id: "photo-1",
      title: "El Setup en Construcción",
      subtitle: "Probando cámaras, luces y el micro para romper Kick 🎙️",
      badge: "SNEAK PEEK #1",
      url: "" // Aquí pondrás la foto 1 que me pases
    },
    {
      id: "photo-2",
      title: "Outfit de Regreso",
      subtitle: "Eligiendo el look más icónico para prender directo ✨",
      badge: "TOP SECRET #2",
      url: "" // Aquí pondrás la foto 2
    },
    {
      id: "photo-3",
      title: "Alerta de Spoilers",
      subtitle: "Nuevas alertas y dinámicas preparadas para el chat 🟢",
      badge: "HYPE EXCLUSIVO #3",
      url: "" // Aquí pondrás la foto 3
    },
    {
      id: "photo-4",
      title: "Foto con la Comunidad",
      subtitle: "El regreso más esperado de toda la plataforma 👑",
      badge: "FAMILY VIBES #4",
      url: "" // Aquí pondrás la foto 4
    }
  ],
  randomActivities: [
    "Ajustando el micrófono por 45ª vez para que no sature cuando grite de la emoción 🎙️",
    "Eligiendo la playlist más épica que va a sonar en la pantalla de inicio 🎶",
    "Peleando con el OBS porque una fuente de texto se movió 1 milímetro 🖥️",
    "Comprando snacks y bebidas energéticas para un stream de 10 horas 🥤",
    "Practicando su saludo más épico frente al espejo: ¡HOLA CHAT! 👋",
    "Configurando las alertas de Kick para que suenen en toda la galaxia 🚀",
    "Eligiendo el outfit de gala para la vuelta triunfal 👗",
    "Pensando en qué juego va a trollear primero a la comunidad 🎮",
    "Leyendo los mensajes de fans que preguntan cada 5 minutos cuándo prende 💬"
  ]
};
