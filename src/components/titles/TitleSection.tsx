interface TitleSectionProps {
  title: string;
  variant?: "primary" | "secondary";
}

export default function TitleSection({
  title,
  variant = "primary",
}: TitleSectionProps) {
  const colorClass =
    variant === "primary" ? "text-txt-primary" : "text-txt-tertiary";
  return (
    <h2
      className={`font-actioness font-bold text-center mt-16 mb-8 px-4 text-3xl md:text-4xl lg:text-5xl ${colorClass}`}
    >
      {title}
    </h2>
  );
}
