import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer className="absolute bottom-0 w-full px-4">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row">
          <p className="text-center text-[#fefcf6] text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="https://github.com/ananth-123"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-blue-500 underline underline-offset-4"
            >
              Ananth
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/ananth-123/Kanye-Quote-Generator"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-blue-500 underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
