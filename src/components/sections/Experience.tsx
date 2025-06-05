import TitleSection from "../titles/TitleSection";

const videoSections = [
  {
    video: "/assets/videos/Depoimentos-PM3-2024-Mariana-Pieslak.webm",
    poster: "/assets/images/poster1.jpg",
    title: "Fortalecimento do Core",
    description:
      "Exercícios guiados para fortalecimento da musculatura abdominal e lombar.",
    reverse: false,
  },
  {
    video: "/assets/videos/Depoimentos-PM3-2024-Mariana-Pieslak.webm",
    poster: "/assets/images/poster2.jpg",
    title: "Mobilidade Articular",
    description:
      "Treino focado em melhorar a amplitude dos movimentos articulares.",
    reverse: true,
  },
  {
    video: "/assets/videos/Depoimentos-PM3-2024-Mariana-Pieslak.webm",
    poster: "/assets/images/poster3.jpg",
    title: "Alongamento Funcional",
    description:
      "Sessão prática de alongamentos para recuperação e prevenção de lesões.",
    reverse: false,
  },
];

export default function Experience() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <TitleSection title="Experiência em Movimento" />

      {/* Seções de Vídeo */}
      {videoSections.map((item, idx) => (
        <div
          key={idx}
          className={`flex flex-col lg:flex-row ${
            item.reverse ? "lg:flex-row-reverse" : ""
          } items-center gap-4 md:gap-6 lg:gap-8 lg:my-12`}
        >
          <video
            muted
            autoPlay
            loop
            playsInline
            preload="none"
            controls
            poster={item.poster}
            className="rounded-xl shadow-lg object-cover w-full lg:w-80"
          >
            <source
              src={"/assets/videos/Depoimentos-PM3-2024-Mariana-Pieslak.webm"}
              type="video/mp4"
            />
          </video>

          <div className="w-full lg:w-1/2">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-actioness font-semibold mb-4 text-txt-primary">
              {item.title}
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl text-txt-description text-txt-primary">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
