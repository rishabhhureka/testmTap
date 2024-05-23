import React from "react";
import Link from "next/link";
import Image from "next/image";
import mtapLogo from "../Img/mtapLogo.png"
import menuIcon from "../Img/menu.png"
import closeIcon from "../Img/close.png"
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
        <button className="menu-button" aria-label="Menu Button">
          <Image
           src={menuIcon}
            alt="Menu" 
          />
        </button>
        <ul id="nav" className="nav-links">
          <button className="close-button" aria-label="Close Button">
            <Image
              src={closeIcon}
              alt="Close" 
            />
          </button>
          <li>
            <Link href="/" aria-current="page" className="nav-link">Product Page</Link>
          </li>
          <li>
            <Link href="/blog" className="nav-link">Blog</Link>
          </li>
        
        </ul>
      </nav>
    </header>
  );
};

export default Header;
