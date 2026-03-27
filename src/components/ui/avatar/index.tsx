import Image from "next/image";

export function Avatar() {
  return (
    <div className="w-11.5 h-11.5 p-1 flex items-center justify-center shadow-button rounded-full border border-[#1D222D] bg-radial-[at_10%_10%] from-[#151A22] from-60% to-[#536588]/35">
      <div role="img" className="relative w-full h-full flex items-center justify-center overflow-hidden  rounded-full" >
        <Image
          src='/images/me.png'
          alt='Pietro Rhyan Image'
          quality={80}
          priority
          fill
        />
      </div>
    </div>
  )
}