import { Button } from "./ui/button";
import { useEffect, useState, useReducer } from "react";
import { Twitter } from "lucide-react";

const initialState = {
  quote: "Generate a new quote by clicking the button below.",
  image: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_QUOTE":
      return { ...state, quote: action.payload };
    case "FETCH_IMAGE":
      return { ...state, image: action.payload };
    default:
      return state;
  }
};

const QuoteBox = () => {
  //   const [quote, setQuote] = useState("");

  const [state, dispatch] = useReducer(reducer, initialState);
  const { quote, image } = state;
  const strList = ["I feel like me and Taylor", "eyes and explode", "marry a"];

  const images = [
    "../images/Kw1.png",
    "../images/Kw2.png",
    "../images/Kw3.png",
    "../images/Kw4.png",
    "../images/Kw5.png",
  ];

  //   const [randomImage, setRandomImage] = useState(images[0]);

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const fetchNewQuote = () => {
    fetch("https://api.kanye.rest")
      .then((response) => response.json())
      .then((data) => {
        if (containsString(data.quote)) {
          fetchNewQuote();
        } else {
          dispatch({ type: "FETCH_QUOTE", payload: data.quote });
          dispatch({ type: "FETCH_IMAGE", payload: getRandomImage() });
        }
      });
  };

  const containsString = (quote: string) => {
    return strList.some((word) => quote.includes(word));
  };

  useEffect(() => {
    fetchNewQuote();
  }, []);

  const handleNewQuote = () => {
    fetchNewQuote();
  };

  const tweetQuote = () => {
    const tweet = `https://twitter.com/intent/tweet?text=${quote}`;
    window.open(tweet, "_blank");
  };

  return (
    <section className="flex-1 justify-center items-center py-4">
      <div className="mx-4 p-3 rounded-lg">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 flex justify-center">
            Kanye once said:
          </h1>
          <div className="flex gap-4 justify-center w-full rounded-xl px-12 py-8 ">
            <div className="w-[40%] flex items-center">
              <img
                src={image}
                alt="Kanye West"
                className="max-w-[400px] max-h-[400px]"
              />
            </div>
            <div className="w-[55%] border justify-center flex flex-col px-4 rounded-xl shadow-md">
              <p className="text-4xl text-center p-3 font-normal flex justify-center items-center h-[50%]">
                "{quote ? quote : "Loading..."}"
              </p>
              <p className=" text-base text-right pt-2 border px-2 flex justify-end items-center ">
                - Kanye West
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-3">
        <Button
          className="rounded-full gap-2 items-center bg-blue-500"
          onClick={tweetQuote}
        >
          <Twitter size={18} />
          Tweet this
        </Button>
      </div>
    </section>
  );
};

export default QuoteBox;
