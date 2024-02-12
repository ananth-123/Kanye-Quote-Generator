import { Button } from "./ui/button";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <section className="">
      <nav className="flex justify-center items-center pt-2 max-w-5xl mx-auto">
        <div className="flex items-center justify-between gap-2 border shadow-lg rounded-full py-2 px-3 w-full">
          <span className="text-red-500 font-bold">Random Kanye Quotes</span>
          <div>
            <Button className="rounded-full gap-2 items-center hover:bg-slate-50 hover:text-black">
              <Github size={18} />
              Github
            </Button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
