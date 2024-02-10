import { Button } from "./ui/button";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <section className="border border-black">
      <nav className="flex justify-center items-center m-3">
        <div className="flex items-center justify-between gap-2 border border-red-500 rounded-full py-2 px-3 w-full">
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
