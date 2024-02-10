import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Twitter } from "lucide-react";

const GetImage = async () => {
  const [image, setImage] = useState("");
};

const QuoteBox = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://api.kanye.rest")
      .then((response) => response.json())
      .then((data) => setQuote(data.quote));
  }, []);

  return (
    <section className="flex-1 justify-center items-center my-4">
      <div className="border border-black p-3 rounded-lg">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Kanye once said:</h1>
          <div className="flex gap-4 justify-center  ">
            <div className="">
              <img src="" alt="Kanye West" />
            </div>
            <div>
              <p className="text-lg font-bold">
                {quote ? quote : "Loading..."}
              </p>
              <p className="text-sm text-right">- Kanye West</p>
              <div className="text-right mt-2">
                <Button className=" rounded-full">New Quote</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <Button className="rounded-full gap-2 items-center bg-blue-500">
          <Twitter size={18} />
          Tweet this
        </Button>
      </div>
    </section>
  );
};

export default QuoteBox;
