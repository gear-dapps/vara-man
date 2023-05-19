type HomeBackgroundProps = BaseComponentProps & {}

export function HomeBackground({ children }: HomeBackgroundProps) {
  return (
    <div className="absolute inset-0 flex justify-center h-full bg-[#1E1E1E] pointer-events-none">
      <div className="absolute top-15 -bottom-0 -inset-x-[31.5%] z-1 mix-blend-color-dodge">
        <img
          src="/images/intro-smoke.webp"
          alt="aa"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="relative mb-[-13%]">
        <img
          src="/images/intro-map.webp"
          alt="aa"
          className="w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
  )
}
