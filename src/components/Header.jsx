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
        <button className="menu-button" aria-label="Menu Button">
          <img
           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAXCAYAAAD6FjQuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABMSURBVHgB7dNBDQAhDETR31W0EpCAY5CEgwIeoAEy79LjJE2+uXsBEvtVG2NOkI9Ac6wRZL4xj/uzX0WuY4p61ZiiljMo6mVjb0bdAVkwKcVo+BeMAAAAAElFTkSuQmCC"
            alt="Menu"
          />
        </button>
        <ul id="nav" className="nav-links">
          <button className="close-button" aria-label="Close Button">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADeSURBVHgBtZWBDYIwEEWLEziCG7iCbuAGMgIbwAhuoE7ACLiBI8Am32uU2ABt7x/hJxcSrvdfCdercz8BOEmUzihfu1gvL6/46+5ISU0d1Ndh4oK51ICJ8ahqTFZYVhYQMfbqwkUPFpAw7iUO08VqAGXMAEzGGsAqYwVgnTEJ4I2VgKzxLuPfJ3KvoigGZxHiPy8UPSq0xjwA6XZrzQAo+hiGUUGdPAoAw8lTAfC9QShjBaDx+VifDxLnXB9LvpTHcyF1DHfQMDvOfMFbYj9d4AEtjLNC6m4S3cx4K30ANf2mFhiWw3YAAAAASUVORK5CYII="
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
