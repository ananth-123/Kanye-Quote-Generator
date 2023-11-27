import Footer from "./components/Footer";
import React, { useEffect, useState } from "react";
import { Waves } from "lucide-react";
import photo1 from "./images/Kw1.png";
import photo2 from "./images/Kw2.png";
import photo3 from "./images/Kw3.png";
import photo4 from "./images/Kw4.png";
import photo5 from "./images/Kw5.png";

function App() {
  const [imageSrc, setImageSrc] = useState("");
  const [quote, setQuote] = useState("");
  const [showQuoteSection, setShowQuoteSection] = useState(false);

  useEffect(() => {
    setShowQuoteSection(false);
  }, []);

  const generateButtonClicked = () => {
    generateContent();
    setShowQuoteSection(true);
  };

  const getImage = () => {
    const images = [
      { src: photo1, alt: "Kanye West" },
      { src: photo2, alt: "Kanye West" },
      { src: photo3, alt: "Kanye West" },
      { src: photo4, alt: "Kanye West" },
      { src: photo5, alt: "Kanye West" },
    ];
    const randomImage = Math.floor(Math.random() * images.length);
    setImageSrc(images[randomImage].src);
  };

  const getQuote = async () => {
    try {
      const response = await fetch("https://api.kanye.rest", { method: "GET" });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const quoteData = await response.json();
      const quoteText = quoteData.quote;
      const substrings = [
        "I feel like me and Taylor",
        "eyes and explode",
        "marry a",
      ];
      if (!substrings.some((substring) => quoteText.includes(substring))) {
        setQuote(quoteText);
      } else {
        getQuote();
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  const generateContent = () => {
    getImage();
    getQuote();
  };

  return (
    <>
      <div className=" h-full">
        <div className="bg-slate-100 mx-10 my-10 p-8 rounded-3xl">
          <h1 className="text-3xl font-semibold text-slate-900 flex justify-center items-center gap-2">
            <Waves />
            Ye Quotes
          </h1>
          <div className="h-[0.125rem] w-full bg-slate-200 m-3"></div>
          {showQuoteSection ? (
            <div className="flex flex-row gap-4 justify-even">
              <div className="w-[40%] ml-8">
                {imageSrc && (
                  <img
                    src={imageSrc}
                    alt="Kanye West"
                    className="w-auto h-auto max-w-[400px] max-h-[400px] m-4"
                  />
                )}
              </div>
              <div className="w-60% text-center flex items-center justify-center">
                <p className="text-[#dfa417] italic  pl-4 text-2xl">{quote}</p>
              </div>
            </div>
          ) : (
            <div className="">
              <p className="text-center text-lg text-teal-800">
                Generate a quote
              </p>
            </div>
          )}
          <div className="flex justify-center mt-4">
            <button
              className="bg-teal-200 hover:bg-slate-300/90 text-base h-12 px-6 py-4 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium  transition-colors "
              onClick={generateButtonClicked}
            >
              Generate
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
