import Image from "next/image";

export default function Skills() {
  return (
    <main id="skills" className="min-h-screen bg-[#0b0314] text-white font-sans p-20 flex flex-col items-center">
      <div className="md:min-w-xl mb-10 flex flex-col items-center justify-center">
        <div className="flex gap-4 md:gap-14 mb-14">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[#1A0B2E] rounded-full h-12 w-12 flex items-center justify-center p-1 animate-bounce">
              <Image
                src="/react.svg"
                alt="Background"
                width={100}
                height={100}
              />
            </div>
            <p className="mt-2">React</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[#1A0B2E] rounded-full h-12 w-12 flex items-center justify-center p-1 animate-bounce">
              <Image
                src="/next.svg"
                alt="Background"
                width={100}
                height={100}
              />
            </div>
            <p className="mt-2">Next</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[#1A0B2E] rounded-full h-12 w-12 flex items-center justify-center p-1 animate-bounce">
              <Image
                src="/html.svg"
                alt="Background"
                width={100}
                height={100}
              />
            </div>
            <p className="mt-2">Html</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[#1A0B2E] rounded-full h-12 w-12 flex items-center justify-center p-1 animate-bounce">
              <Image src="/css.svg" alt="Background" width={100} height={100} />
            </div>
            <p className="mt-2">Css</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[#1A0B2E] rounded-full h-12 w-12 flex items-center justify-center p-1 animate-bounce">
              <Image src="/js.svg" alt="Background" width={100} height={100} />
            </div>
            <p className="mt-2">Js</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[#1A0B2E] rounded-full h-12 w-12 flex items-center justify-center p-1 animate-bounce">
              <Image src="/ts.svg" alt="Background" width={100} height={100} />
            </div>
            <p className="mt-2">Ts</p>
          </div>
        </div>
        <div className="flex gap-2 md:gap-3">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[#1A0B2E] rounded-full h-12 w-12 flex items-center justify-center p-1 animate-bounce">
              <Image
                src="/shadcn.svg"
                alt="Background"
                width={100}
                height={100}
              />
            </div>
            <p className="mt-2">Shadcn</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[#1A0B2E] rounded-full h-12 w-12 flex items-center justify-center p-1 animate-bounce">
              <Image
                src="/shadcn.svg"
                alt="Background"
                width={100}
                height={100}
              />
            </div>
            <p className="mt-2">Shadcn</p>
          </div><div className="flex flex-col items-center justify-center">
            <div className="bg-[#1A0B2E] rounded-full h-12 w-12 flex items-center justify-center p-1 animate-bounce">
              <Image
                src="/shadcn.svg"
                alt="Background"
                width={100}
                height={100}
              />
            </div>
            <p className="mt-2">Shadcn</p>
          </div><div className="flex flex-col items-center justify-center">
            <div className="bg-[#1A0B2E] rounded-full h-12 w-12 flex items-center justify-center p-1 animate-bounce">
              <Image
                src="/shadcn.svg"
                alt="Background"
                width={100}
                height={100}
              />
            </div>
            <p className="mt-2">Shadcn</p>
          </div><div className="flex flex-col items-center justify-center">
            <div className="bg-[#1A0B2E] rounded-full h-12 w-12 flex items-center justify-center p-1 animate-bounce">
              <Image
                src="/shadcn.svg"
                alt="Background"
                width={100}
                height={100}
              />
            </div>
            <p className="mt-2">Shadcn</p>
          </div><div className="flex flex-col items-center justify-center">
            <div className="bg-[#1A0B2E] rounded-full h-12 w-12 flex items-center justify-center p-1 animate-bounce">
              <Image
                src="/shadcn.svg"
                alt="Background"
                width={100}
                height={100}
              />
            </div>
            <p className="mt-2">Shadcn</p>
          </div>
        </div>
        <div className="flex">
          <div className="relative w-90 h-60 md:w-250 md:h-150">
            <div className="absolute inset-1 z-1">
              <Image
                src="/skills.png"
                alt="Background"
                layout="fill"
                className="z-0"
              />
            </div>

            <div className="absolute inset-20 z-10 flex items-end justify-center h-20 md:h-[auto] mt-6 md:mt-0">
              <div className="text-sm md:text-2xl font-semibold flex items-center justify-center h-20 w-20 md:h-52 md:w-52 rounded-full md:mb-14 mr-2 bg-[#4b247d] bg-opacity-60 backdrop-blur-md">
                My Skills
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
