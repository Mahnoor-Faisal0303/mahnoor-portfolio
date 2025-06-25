import Image from "next/image";

export default function Hero() {
  return (
    <main id="home" className="min-h-screen bg-[#0b0314] text-white font-sans p-20 flex flex-col items-center">
      <div className="md:min-w-xl mb-10">
        <div className="flex">
          <div className="relative w-66 md:h-66 mt-10">
            <div className="absolute inset-1 z-1">
              <Image
                src="/ellipse-purple.png"
                alt="Background"
                layout="fill"
                className="rounded-full z-0"
              />
            </div>

            <div className="absolute inset-15 z-10">
              <Image
                src="/ellipse.png"
                alt="Middle"
                layout="fill"
                className="rounded-full w-46 h-46"
              />
            </div>

            <div className="absolute inset-12 z-20 ">
              <Image
                src="/mahnoor.png"
                alt="Avatar"
                layout="fill"
                className="rounded-full"
              />
            </div>
          </div>

          <div>
            <div className="flex" style={{ marginLeft: "-100px" }}>
              <div className="relative w-26 h-26 sm:w-10 sm:h-10 animate-pulse">
                <Image
                  src="/Arrow.png"
                  alt="Avatar"
                  layout="fill"
                  className="rounded-full"
                />
              </div>

              <p className="text-sm text-white-400 mb-10 pt-4">
                Hello! I am{" "}
                <span className="text-purple-300 font-medium">
                  Mahnoor Faisal
                </span>
              </p>
            </div>
            <h2>
              A Coder who <br />
              <span className="text-2xl sm:text-3xl font-semibold text-white">
                turns ideas
              </span>
              <br />
              <span className="text-2xl sm:text-3xl font-semibold text-white">
                into
              </span>
              <span className="text-2xl sm:text-3xl font-semibold text-purple-400">
                {" "}
                algorithms
              </span>
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              because logic is the true language of progress.
            </p>
          </div>
        </div>
      </div>
      <div className="md:min-w-xl mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
          I'm a Software Engineer.
        </h1>
        <p className="text-sm text-gray-300 mt-2">
          Currently, I’m a Software Engineer at{" "}
          <a href="#" className="text-blue-400 hover:underline">
            1Percent Labs
          </a>
          .
        </p>
        <p className="max-w-xl md:min-w-xl text-gray-400 text-sm">
        A self-taught Software Engineer with 1.5+ years of experience.
        <br />I turn complex problems into simple, elegant code that serves both
        users and business alike.
      </p>
      </div>
    </main>
  );
}
