'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import mtapLogo from "../Img/mtapLogo.png";
import menuIcon from "../Img/menu.png";
import closeIcon from "../Img/close.png";
// import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
// import { renewToken } from '../utils/auth';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

// const Header = async() => {
  // const session = await getSession();
  // const user = session?.user;
  // console.log(user);

  // useEffect(() => {
  //   const renew = async () => {
  //     await renewToken();
  //   };

  //   if (user) {
  //     const intervalId = setInterval(renew, 4320 * 60 * 1000); // Renew token every 4320 minutes (3 days)
  //     return () => clearInterval(intervalId);
  //   }
  // }, [user]);
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
            onClick={toggleMenu}
          />
        </button>
        <ul id="nav" className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <button className="close-button" aria-label="Close Button">
            <Image
              src={closeIcon}
              alt="Close" 
              onClick={toggleMenu}
            />
          </button>
          <li>
            <Link href="/product" aria-current="page" className="nav-link">Shop NFC</Link>
          </li>
          <li>
            <Link href="/subscriptions" className="nav-link">Subscriptions</Link>
          </li>
          <li>
            <Link href="/pro" className="nav-link">Pro</Link>
          </li>
         
          <li>
            <Link href="/blog" className="nav-link">Blog</Link>
          </li>
          <li>
            <Link href="/teams" className="nav-link">For Teams</Link>
          </li>
        </ul>
        {/* <ul className="auth-links">
        {user ? (
            <li>
              <Link href="/api/auth/logout" aria-current="page" className="auth-link">Sign Out {user.nickname}</Link>
            </li>
          ) : (
            <li>
              <Link href="/api/auth/login" aria-current="page" className="auth-link">Sign In</Link>
            </li>
          )}
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
