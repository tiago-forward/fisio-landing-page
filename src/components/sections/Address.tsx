import TitleSection from "../titles/TitleSection";

export default function Address() {
  return (
    <div className="max-w-screen-xl m-auto px-2 py-8">
      <TitleSection variant="secondary" title="Endereço" />

      <div className="max-w-6xl mx-auto p-4 flex flex-col items-center gap-4">
        <p className="text-lg md:text-xl lg:text-2xl text-center text-tertiary tracking-wide font-robotoSlab my-3 lg:px-20 lg:my-5">
          Clique no botão abaixo e venha agendar sua consulta que lhe repassarei
          mais informações e disponibilidade de dia e horário.
        </p>

        {/* <a
          href="https://wa.me/558388729460"
          target="_blank"
          className="animate-backgroundColors call-to-action-anchor uppercase bg-sr-2 w-full flex items-center justify-center gap-2 px-3 border-2 border-primary shadow-lg shadow-primary rounded-lg font-semibold font-robotoSlab text-xl tracking-widest duration-300 transform hover:scale-105 hover:bg-white hover:opacity-70 lg:w-fit"
        >
          Agende agora
          <img src={WhatsAppIcon} alt="Icon WhatsApp" />
        </a> */}

        <h3 className="text-xl md:text-2xl lg:text-3xl text-center font-semibold md:my-2 lg:my-4 text-txt-tertiary">
          Localização da clínica de <br />
          Dra. Tecilia Santos
        </h3>

        <div className="flex flex-col items-center gap-4 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.047600197877!2d-35.93496952394431!3d-7.235411071062548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aea0b99c80c75d%3A0xc8ef1a020db690de!2sR.%20Luzinalda%20Edite%20de%20Ara%C3%BAjo%20Leite%2C%20498%20-%20Serrot%C3%A3o%2C%20Campina%20Grande%20-%20PB%2C%2058434-323!5e0!3m2!1spt-BR!2sbr!4v1721138929937!5m2!1spt-BR!2sbr"
            loading="lazy"
            className="w-full h-[25rem] border-2 border-bg-secondary rounded-md"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="Localização do meu curso"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
