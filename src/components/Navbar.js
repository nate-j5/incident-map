"use strict";
import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="bg-zinc-900 shadow-md p-4 flex justify-between items-center w-screen">
      <div className="flex items-center space-x-1">
        <div>
          <Image
            src="/assets/incident-logo.png"
            alt="Incident Logo"
            width={30}
            height={30}
            style={{ borderRadius: "50%", marginRight: "7px" }}
          />
        </div>
        <h1 className="text-white text-sm font-extralight">Incident Map</h1>
      </div>
      <div className="hidden md:flex space-x-6">
        <a
          className="text-white font-extralight text-xs hover:text-white transition"
          href="https://github.com/nate-j5/incident-map"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Code"
        >
          View Code ↗
        </a>
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
