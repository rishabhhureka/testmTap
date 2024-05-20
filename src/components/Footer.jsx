
import googlePlayIcon from "../Img/gplay.a3ac839e.png"
import Image from "next/image";
import linkedinIcon from "../Img/linkedin.png"
import youtubeIcon from "../Img/youtube.png"
import twitterIcon from "../Img/twitter.png"
import instagramIcon from "../Img/instagram.png"
import tiktokIcon from "../Img/tiktok.png"
const Footer = () => (
  <footer>
  <div className="row">
      {/* Company Section */}
      <div className="column">
          <h3>Company</h3>
          <ul>
          {["Shop", "Where To Tap", "Compatibility", "Events", "Blog", "Affiliate Program", "Become a Retail Partner", "Knowledge Base", "Gallery"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      {/* Products Section (similar structure as Company) */}
      <div className="column">
          <h3>Products</h3>
          <ul>
          {["Shop", "Where To Tap", "Compatibility", "Events", "Blog", "Affiliate Program", "Become a Retail Partner", "Knowledge Base", "Gallery"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      {/* Trust & Legal Section (similar structure as Company) */}
      <div className="column">
          <h3>Trust &amp; Legal</h3>
          <ul>
          {["Shop", "Where To Tap", "Compatibility", "Events", "Blog", "Affiliate Program", "Become a Retail Partner", "Knowledge Base", "Gallery"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      {/* Support Section (similar structure as Company) */}
      <div className="column">
          <h3>Support</h3>
          <ul>
          {["Shop", "Where To Tap", "Compatibility", "Events", "Blog", "Affiliate Program", "Become a Retail Partner", "Knowledge Base", "Gallery"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
  </div>
  {/* Social Media Icons Section */}
  <div className="row">
      <div className="column social">
          {/* Add your SVG images or placeholders with appropriate links */}
          {/* For example: */}
          <a href="#" target="_blank" aria-label="linkedinIcon">
            <Image src={linkedinIcon} alt="linkedinIcon" height={55} width={55}/>
         
          </a>
          <a href="#" target="_blank" aria-label="Tiktok">
          <Image src={tiktokIcon} alt="tiktokIcon" height={55} width={55}/>
         
                            </a><a href="#" target="_blank" aria-label="Twitter">
                            <Image src={twitterIcon} alt="twitterIcon" height={55} width={55}/>
                            </a>
                            
                            <a href="#" target="_blank" aria-label="Instagram">
                            <Image src={instagramIcon} alt="instagramIcon" height={55} width={55}/>
                              </a>
                              
                              <a href="#" target="_blank" aria-label="Facebook"><svg
                                xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="55" height="55"
                                viewBox="0,0,256,256" style={{ fill: '#000000' }}>
                               <g
        fill="#fff"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="bold"
        fontSize="none"
        textAnchor="end"
        style={{ mixBlendMode: 'normal' }}
      >
        <g transform="scale(5.12, 5.12)">
          <path
            d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM37,19h-2c-2.14,0 -3,0.5 -3,2v3h5l-1,5h-4v15h-5v-15h-4v-5h4v-3c0,-4 2,-7 6,-7c2.9,0 4,1 4,1z"
          />
        </g>
      </g>
                            </svg></a>
                            <a href="#" target="_blank" aria-label="Youtube">    <Image src={youtubeIcon} alt="youtubeIcon" height={55} width={55}/></a>
          {/* Repeat for other social icons */}
      </div>
      <div className="column" style={{display:'flex', gap:8}}>
          {/* Additional App Store/Google Play links */}
          <a href="#" target="_blank" aria-label="dummy Link">
              <Image src={googlePlayIcon} className="app" alt="Google Play Icon" loading="lazy" />
          </a>
          <a href="#" target="_blank" aria-label="dummy Link">
              <Image src="data:image/png;base64,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" className="app" alt="App Store Icon" height={55} width={55} loading="lazy"/>
          </a>
      </div>
      <div className="column"><button>Login</button><button className="green">Get started for free</button></div>
  </div>
  <div className="row">
                    <div className="copy">
                        <p className="mtapFooterImage"><Image src="data:image/png;base64,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"
                                alt="" height={70} width={80} loading="lazy" /></p><br /> © 2023 by mTap Corporation. All Rights Reserved
                    </div>
                </div>
</footer>
  );
  
  export default Footer;
  