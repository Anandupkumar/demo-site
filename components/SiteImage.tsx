type SiteImageProps = {
  src: string
  alt: string
  className?: string
};

export function SiteImage({ src, alt, className = "" }: SiteImageProps) {
  return (
    // Plain img: static export cannot use the Next.js image optimizer.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={className} />
  );
}
