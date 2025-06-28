"use client";
import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";

export default function Articles() {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <main
      id="articles"
      className="min-h-screen bg-[#0b0314] text-white font-sans p-20 flex flex-col items-center"
    >
      <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
        My Articles
      </h1>
      {/* <div className="md:min-w-xl mb-10 flex flex-col items-center justify-center min-h-[100vh] bg-red-500"> */}
      <div
        className="h-[100vh]"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <HTMLFlipBook
          height={500}
          width={isMobile ? 200 : 500}
          autoSize={true}
          className="shadow-lg mt-20"
          style={{ overflow: "hidden" }}
        >
          <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#130428] via-[#38126D] to-[#190634] border border-[#693B93] backdrop-blur-md text-white rounded-l-xl shadow-md p-6">
            <p className="text-lg mb-4">Page # 1</p>
            <p className="text-lg my-2">This was my 1st article about : </p>
            <h1 className="text-3xl font-bold my-4">
              Understanding Of DOM Essentials
            </h1>
            <Image
              src="/article2.png"
              alt="Article 1 picture"
              width={500}
              height={100}
            />
          </div>
          <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#130428] via-[#38126D] to-[#190634] border border-[#693B93] backdrop-blur-md text-white rounded-r-xl p-6">
            <p className="text-lg mb-4">Page # 2</p>
            <p className="text-lg my-2">
              Delving into the essentials of DOM unveils a best tool for web
              developers, with its Tree like structure it serves documents a
              dynamic gateway. In conclusion, this journey through the
              intricacies of DOM essentials, it becomes evident that
              Understanding of this foundational concept is pivotal for any web
              developer seeking to craft engaging, interactive, and dynamic
              digital experiences.
            </p>
            <a
              href="https://medium.com/@mahnoorfaysal/understanding-of-dom-essentials-f3b66c0719eb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-cyan-400 underline mt-10 block w-[200px]"
            >
              Read full article →
            </a>
          </div>
          <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#130428] via-[#38126D] to-[#190634] border border-[#693B93] backdrop-blur-md text-white rounded-l-xl shadow-md p-6">
            <p className="text-lg mb-4">Page # 3</p>
            <p className="text-lg my-2">This was my 2nd article about : </p>
            <h1 className="text-3xl font-bold my-4">
              Writing Loops In CSS For Dynamic Classes
            </h1>
            <Image
              src="/article1.jpg"
              alt="Article 1 picture"
              width={500}
              height={100}
            />
          </div>
          <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#130428] via-[#38126D] to-[#190634] border border-[#693B93] backdrop-blur-md text-white rounded-r-xl p-6">
            <p className="text-lg mb-4">Page # 4</p>
            <p className="text-lg my-2">
              In this article, I dive into how Sass loops (@for, @each, and
              @while) can be used to generate dynamic CSS classes. This approach
              helps reduce code duplication, improves maintainability, and keeps
              stylesheets clean. Whether you're creating a utility framework or
              just avoiding repetitive .mt-1 to .mt-10 classes, this article
              guides you with practical, real-world examples.
            </p>
            <a
              href="https://medium.com/@mahnoorfaysal/writing-loops-in-css-for-dynamic-classes-58bc29eb2fec"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-cyan-400 underline mt-10 block  w-[200px]"
            >
              Read full article →
            </a>
          </div>
        </HTMLFlipBook>
      </div>
    </main>
  );
}
