import Image from "next/image";

export function AboutMePhotos() {
  return (
    <div className="w-[360px] h-[250px] sm:h-[300px] md:w-[306px] md:h-[530px] relative">
      <div className="absolute top-0 left-6 sm:left-0 w-[185px] h-[200px] sm:w-[235px] sm:h-[282px] rounded-xl overflow-hidden">
        <Image
          src='/images/me-1.png'
          alt="Photo of mine"
          fill
          className="object-cover"
          quality={60}
        />
      </div>

      <div className="absolute sm:top-1/2 sm:-translate-y-1/2 bottom-0 right-6 sm:right-0 w-[165px] h-[175px] sm:w-[210px] sm:h-[220px] rounded-xl overflow-hidden z-20">
        <Image
          src='/images/me-2.png'
          alt="Photo of mine"
          fill
          className="object-cover"
          quality={60}
        />
      </div>

      <div className="hidden md:block absolute bottom-0 left-4 w-[250px] h-[262px] rounded-xl overflow-hidden z-10">
        <Image
          src='/images/me-3.png'
          alt="Photo of mine"
          fill
          className="object-cover"
          quality={60}
        />
      </div>
    </div>
  )
}