interface VideoTestimonialsProps {
  videos: { src: string; title: string }[];
}

export default function VideoTestimonials({ videos }: VideoTestimonialsProps) {
  return (
    <div className="pb-10 px-4 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {videos.map((video, index) => (
          <div
            key={index}
            className="w-full h-[600px] rounded-xl overflow-hidden shadow-md border border-border"
          >
            <video
              controls
              className="rounded-xl shadow-lg object-cover w-full h-full"
            >
              <source src={video.src} type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}
