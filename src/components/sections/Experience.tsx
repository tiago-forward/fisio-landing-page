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
          } items-center gap-8 my-12`}
        >
          <video
            muted
            autoPlay
            loop
            playsInline
            preload="none"
            controls
            poster={item.poster}
            className="w-full lg:w-80 rounded-2xl shadow-lg"
          >
            <source
              src={"/assets/videos/Depoimentos-PM3-2024-Mariana-Pieslak.webm"}
              type="video/mp4"
            />
          </video>

          <div className="w-full lg:w-1/2">
            <h3 className="text-4xl font-actioness font-semibold mb-4 text-txt-tertiary">
              {item.title}
            </h3>
            <p className="text-2xl text-txt-description text-txt-tertiary">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
