import React from "react";
import Link from "next/link";

import Image from "next/image";
import mtapLogo from "../Img/mtapLogo.png"
const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link href="/" aria-label="Go to Home">
            <Image
              src={mtapLogo}
              alt="Logo" height={100} width={100} loading="eager"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
