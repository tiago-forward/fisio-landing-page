import About from "../../components/sections/About";
import Address from "../../components/sections/Address";
import Services from "../../components/sections/Services";
import Experience from "../../components/sections/Experience";
import Testimonials from "../../components/sections/Testimonials";
import Person from "../../assets/images/Screenshot_20250121_103240_Photos-Photoroom.png";

export default function Home() {
  return (
    <main>
      <section id="home">
        {/* <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/assets/logos/Marca D_água-12.png')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "80% center", // desloca a imagem para a direita
            filter: "blur(12px)", // aplica blur direto
            opacity: 0.2,
          }}
        /> */}

        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="flex flex-col items-center justify-center gap-8 lg:flex-row relative">
            {/* Container da imagem com marca d'água */}
            <div className="mt-10 md:mt-20 relative w-full max-w-xs md:max-w-md lg:max-w-[28rem] aspect-square flex-shrink-0">
              <div className="z-10 absolute inset-2 overflow-hidden h-[400px] md:h-[550px] rounded-[45%] shadow-xl">
                <img
                  src={Person}
                  alt="Profissional"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Texto da seção inicial */}
            <div className="flex flex-col md:gap-10 items-center justify-center mt-24 lg:mt-0 text-center">
              <h1
                style={{ transform: "scaleY(1.2)" }}
                className="font-actioness uppercase mb-8 text-3xl md:text-4xl lg:text-5xl font-bold xl:text-6xl max-w-xl text-txt-tertiary"
              >
                Você está sofrendo com dor na coluna?
              </h1>
              <p className="font-actioness font-semibold text-xl md:text-2xl lg:text-3xl tracking-wide max-w-md sm:max-w-xl lg:max-w-2xl text-txt-tertiary">
                Essa dor está impedindo você de realizar atividades simples do
                dia a dia?
              </p>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#E0BE14"
            fill-opacity="1"
            d="M0,64L60,74.7C120,85,240,107,360,112C480,117,600,107,720,128C840,149,960,203,1080,229.3C1200,256,1320,256,1380,256L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* Seções subsequentes */}
      <section id="sobre" className="pt-20 min-h-[79vh] bg-bg-secondary">
        <About />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFFFFF"
            fill-opacity="1"
            d="M0,192L60,208C120,224,240,256,360,229.3C480,203,600,117,720,112C840,107,960,181,1080,181.3C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section id="serviços" className="min-h-[79vh] bg-bg-white">
        <Services />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#E0BE14"
            fill-opacity="1"
            d="M0,32L60,53.3C120,75,240,117,360,117.3C480,117,600,75,720,85.3C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section id="depoimentos" className="min-h-[79vh] bg-bg-secondary">
        <Experience />
      </section>

      {/* Seção de Avaliações Google com Estilo Integrado */}
      <section className="pt-20 bg-bg-secondary">
        <Testimonials />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFFFFF"
            fill-opacity="1"
            d="M0,128L60,133.3C120,139,240,149,360,154.7C480,160,600,160,720,138.7C840,117,960,75,1080,85.3C1200,96,1320,160,1380,192L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section id="endereço" className="min-h-[79vh] bg-[#FFFFFF]">
        <Address />
      </section>
    </main>
  );
}
