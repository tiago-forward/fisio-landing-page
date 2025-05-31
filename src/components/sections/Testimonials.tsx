import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ArrowRight from "../Icons/ArrowRight";
import ArrowLeft from "../Icons/ArrowLeft";
import { useRef } from "react";

const googleReviews = [
  {
    nome: "Camila Souza",
    foto: "https://randomuser.me/api/portraits/women/65.jpg",
    estrelas: 5,
    comentario:
      "A Dra. [Nome] foi extremamente atenciosa. Meu tratamento foi um sucesso!",
  },
  {
    nome: "Marcos Oliveira",
    foto: "https://randomuser.me/api/portraits/men/34.jpg",
    estrelas: 4,
    comentario:
      "Ótimo atendimento. Clínica bem equipada e profissionais de qualidade.",
  },
  {
    nome: "Marcos Oliveira",
    foto: "https://randomuser.me/api/portraits/men/34.jpg",
    estrelas: 4,
    comentario:
      "Ótimo atendimento. Clínica bem equipada e profissionais de qualidade.",
  },
  {
    nome: "Marcos Oliveira",
    foto: "https://randomuser.me/api/portraits/men/34.jpg",
    estrelas: 4,
    comentario:
      "Ótimo atendimento. Clínica bem equipada e profissionais de qualidade.",
  },
  {
    nome: "Marcos Oliveira",
    foto: "https://randomuser.me/api/portraits/men/34.jpg",
    estrelas: 4,
    comentario:
      "Ótimo atendimento. Clínica bem equipada e profissionais de qualidade.",
  },
];

export default function Testimonials() {
  return (
    <div className="relative bg-bg-secondary py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-actioness font-bold text-txt-tertiary mb-4">
          O que pacientes dizem sobre mim
        </h2>
        <p className="text-lg md:text-xl font-medium text-txt-tertiary mb-12">
          Depoimentos reais de quem sentiu a diferença.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: { slidesPerView: 1.2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-screen-xl"
      >
        {googleReviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="mb-8 bg-white border border-border rounded-[2rem] px-6 py-8 md:px-8 flex flex-col justify-between h-full transition hover:scale-[1.01] duration-300">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={review.foto}
                  alt={review.nome}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                />
                <div className="text-left">
                  <p className="text-lg font-semibold text-txt-tertiary">
                    {review.nome}
                  </p>
                  <div className="text-yellow-400 text-2xl">
                    {"★".repeat(review.estrelas)}
                    {"☆".repeat(5 - review.estrelas)}
                  </div>
                </div>
              </div>

              <p className="text-md text-txt-tertiary leading-relaxed">
                “
                {review.comentario.length > 180
                  ? `${review.comentario.slice(0, 180)}...`
                  : review.comentario}
                ”
              </p>

              <span className="mt-6 text-sm text-txt-tertiary opacity-70">
                Avaliação verificada no Google
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
