import "../app/globals.css";
import googlePlayIcon from "../_nuxt/gplay.a3ac839e.png"
import Image from "next/image";

const Footer = () => (
  <footer>
  <div className="row">
      {/* Company Section */}
      <div className="column">
          <h3>Company</h3>
          <ul>
              <li>Shop</li>
              <li>Where To Tap</li>
              <li>Compatibility</li>
              <li>Events</li>
              <li>Blog</li>
              <li>Affiliate Program</li>
              <li>Become a Retail Partner</li>
              <li>Knowledge Base</li>
              <li>Gallery</li>
          </ul>
      </div>
      {/* Products Section (similar structure as Company) */}
      <div className="column">
          <h3>Products</h3>
          <ul>
              <li>Shop</li>
              <li>Where To Tap</li>
              <li>Compatibility</li>
              <li>Events</li>
              <li>Blog</li>
              <li>Affiliate Program</li>
              <li>Become a Retail Partner</li>
              <li>Knowledge Base</li>
              <li>Gallery</li>
          </ul>
      </div>
      {/* Trust & Legal Section (similar structure as Company) */}
      <div className="column">
          <h3>Trust &amp; Legal</h3>
          <ul>
              <li>Shop</li>
              <li>Where To Tap</li>
              <li>Compatibility</li>
              <li>Events</li>
              <li>Blog</li>
              <li>Affiliate Program</li>
              <li>Become a Retail Partner</li>
              <li>Knowledge Base</li>
              <li>Gallery</li>
          </ul>
      </div>
      {/* Support Section (similar structure as Company) */}
      <div className="column">
          <h3>Support</h3>
          <ul>
              <li>Shop</li>
              <li>Where To Tap</li>
              <li>Compatibility</li>
              <li>Events</li>
              <li>Blog</li>
              <li>Affiliate Program</li>
              <li>Become a Retail Partner</li>
              <li>Knowledge Base</li>
              <li>Gallery</li>
          </ul>
      </div>
  </div>
  {/* Social Media Icons Section */}
  <div className="row">
      <div className="column social">
          {/* Add your SVG images or placeholders with appropriate links */}
          {/* For example: */}
          <a href="#" target="_blank" aria-label="dummy Link">
          <svg
                                xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 31 30"
                                fill="none">
                                <path
                                    d="M28.0076 0.0703125H2.68129C2.07066 0.0703125 1.48504 0.312885 1.05326 0.744666C0.621478 1.17645 0.378906 1.76207 0.378906 2.3727V27.699C0.378906 28.3096 0.621478 28.8952 1.05326 29.327C1.48504 29.7588 2.07066 30.0013 2.68129 30.0013H28.0076C28.6182 30.0013 29.2038 29.7588 29.6356 29.327C30.0674 28.8952 30.3099 28.3096 30.3099 27.699V2.3727C30.3099 1.76207 30.0674 1.17645 29.6356 0.744666C29.2038 0.312885 28.6182 0.0703125 28.0076 0.0703125ZM10.7396 21.943C10.7396 22.2483 10.6184 22.5411 10.4025 22.757C10.1866 22.9729 9.89377 23.0942 9.58846 23.0942C9.28314 23.0942 8.99033 22.9729 8.77444 22.757C8.55855 22.5411 8.43726 22.2483 8.43726 21.943V12.7334C8.43726 12.4281 8.55855 12.1353 8.77444 11.9194C8.99033 11.7035 9.28314 11.5822 9.58846 11.5822C9.89377 11.5822 10.1866 11.7035 10.4025 11.9194C10.6184 12.1353 10.7396 12.4281 10.7396 12.7334V21.943ZM9.58846 10.4311C9.24693 10.4311 8.91307 10.3298 8.6291 10.14C8.34513 9.9503 8.12381 9.68061 7.99311 9.36508C7.86241 9.04955 7.82822 8.70235 7.89484 8.36738C7.96147 8.03242 8.12593 7.72474 8.36743 7.48324C8.60893 7.24174 8.91661 7.07728 9.25157 7.01065C9.58654 6.94403 9.93374 6.97822 10.2493 7.10892C10.5648 7.23961 10.8345 7.46094 11.0242 7.74491C11.214 8.02888 11.3152 8.36274 11.3152 8.70426C11.3152 9.16224 11.1333 9.60145 10.8095 9.92529C10.4856 10.2491 10.0464 10.4311 9.58846 10.4311ZM23.4028 21.943C23.4028 22.2483 23.2815 22.5411 23.0656 22.757C22.8497 22.9729 22.5569 23.0942 22.2516 23.0942C21.9463 23.0942 21.6535 22.9729 21.4376 22.757C21.2217 22.5411 21.1004 22.2483 21.1004 21.943V16.7626C21.1004 15.9993 20.7972 15.2673 20.2575 14.7276C19.7177 14.1879 18.9857 13.8846 18.2224 13.8846C17.4591 13.8846 16.7271 14.1879 16.1874 14.7276C15.6476 15.2673 15.3444 15.9993 15.3444 16.7626V21.943C15.3444 22.2483 15.2231 22.5411 15.0072 22.757C14.7914 22.9729 14.4985 23.0942 14.1932 23.0942C13.8879 23.0942 13.5951 22.9729 13.3792 22.757C13.1633 22.5411 13.042 22.2483 13.042 21.943V12.7334C13.0435 12.4515 13.1483 12.1798 13.3368 11.97C13.5252 11.7602 13.7841 11.6269 14.0643 11.5953C14.3445 11.5637 14.6265 11.6361 14.8569 11.7987C15.0873 11.9612 15.25 12.2027 15.3142 12.4773C16.093 11.949 17.0009 11.6428 17.9406 11.5916C18.8802 11.5404 19.8161 11.7462 20.6476 12.1867C21.4792 12.6273 22.175 13.286 22.6604 14.0922C23.1458 14.8984 23.4025 15.8216 23.4028 16.7626V21.943Z"
                                    fill="#0288D1"></path>
                            </svg>
          </a>
          <a href="#" target="_blank" aria-label="dummy Link"><svg
                                xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 31 31"
                                fill="none">
                                <path
                                    d="M30.7582 9.18519V14.9259C30.7582 15.2304 30.6369 15.5225 30.421 15.7378C30.2051 15.9531 29.9123 16.0741 29.607 16.0741C27.2022 16.0796 24.8319 15.5029 22.6998 14.3935V20.0926C22.6998 22.9854 21.5476 25.7598 19.4966 27.8053C17.4457 29.8508 14.664 31 11.7635 31C8.86299 31 6.08129 29.8508 4.03033 27.8053C1.97937 25.7598 0.827148 22.9854 0.827148 20.0926C0.827148 14.7968 4.69948 10.1152 9.83524 9.20241C10.0009 9.17304 10.171 9.18025 10.3336 9.22354C10.4962 9.26683 10.6473 9.34514 10.7763 9.45296C10.9052 9.56078 11.0089 9.69548 11.08 9.84759C11.1511 9.9997 11.188 10.1655 11.1879 10.3333V16.4601C11.188 16.6774 11.1262 16.8903 11.0098 17.074C10.8934 17.2577 10.7271 17.4046 10.5303 17.4978C10.065 17.7179 9.66737 18.0585 9.379 18.484C9.09063 18.9096 8.92204 19.4045 8.8908 19.9172C8.85957 20.4299 8.96684 20.9415 9.20142 21.3988C9.43601 21.856 9.78931 22.2421 10.2245 22.5168C10.6597 22.7914 11.1608 22.9446 11.6755 22.9603C12.1903 22.976 12.6998 22.8537 13.151 22.606C13.6022 22.3584 13.9785 21.9946 14.2407 21.5525C14.5028 21.1104 14.6412 20.6062 14.6415 20.0926V1.14815C14.6415 0.84364 14.7628 0.551604 14.9786 0.336285C15.1945 0.120965 15.4873 0 15.7927 0H21.5486C21.8539 0 22.1468 0.120965 22.3627 0.336285C22.5785 0.551604 22.6998 0.84364 22.6998 1.14815C22.7017 2.97461 23.4301 4.72572 24.725 6.01723C26.0199 7.30874 27.7757 8.03514 29.607 8.03704C29.9123 8.03704 30.2051 8.158 30.421 8.37332C30.6369 8.58864 30.7582 8.88068 30.7582 9.18519Z"
                                    fill="#ee1d52"></path>
                            </svg></a><a href="#" target="_blank" aria-label="dummy Link"><svg
                                xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 33 27"
                                fill="none">
                                <path
                                    d="M32.3408 5.38101L27.902 9.54264C27.0053 19.2884 18.2391 26.8628 7.74776 26.8628C5.59219 26.8628 3.81519 26.5427 2.46574 25.9108C1.37756 25.4 0.932201 24.853 0.82086 24.6971C0.72158 24.5575 0.65723 24.3987 0.632619 24.2325C0.608007 24.0663 0.623771 23.8971 0.678731 23.7374C0.733691 23.5777 0.826427 23.4318 0.950009 23.3104C1.07359 23.1891 1.22483 23.0955 1.39241 23.0366C1.43101 23.0227 4.99095 21.7408 7.25192 19.3009C5.99805 18.3344 4.90348 17.1993 4.00373 15.9326C2.16289 13.3702 0.102339 8.91909 0.737725 2.26744C0.757865 2.05608 0.842003 1.85452 0.98023 1.68649C1.11846 1.51846 1.30502 1.39096 1.51794 1.31901C1.73086 1.24705 1.96129 1.23364 2.18207 1.28035C2.40285 1.32706 2.6048 1.43194 2.76413 1.58265C2.81609 1.63136 7.70471 6.18967 13.6815 7.66781V6.82018C13.6792 5.93134 13.8667 5.05105 14.2328 4.23116C14.5989 3.41127 15.1363 2.66834 15.8133 2.04614C16.4708 1.43056 17.2532 0.944684 18.1142 0.617185C18.9752 0.289686 19.8975 0.127196 20.8266 0.139302C22.073 0.150828 23.295 0.464511 24.3738 1.04986C25.4525 1.6352 26.3514 2.47229 26.983 3.47974H31.5005C31.7355 3.47957 31.9653 3.54478 32.1608 3.66712C32.3563 3.78946 32.5087 3.96342 32.5986 4.16699C32.6886 4.37056 32.7121 4.59458 32.6662 4.81069C32.6203 5.0268 32.5071 5.22528 32.3408 5.38101Z"
                                    fill="#75E6DA"></path>
                            </svg></a><a href="#" target="_blank" aria-label="dummy Link"><svg
                                xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 32 30"
                                fill="none">
                                <path
                                    d="M22.826 0.0703125H8.51827C6.30546 0.0725979 4.18396 0.922335 2.61927 2.43307C1.05457 3.94381 0.174486 5.99216 0.172119 8.12867V21.943C0.174486 24.0795 1.05457 26.1278 2.61927 27.6386C4.18396 29.1493 6.30546 29.9991 8.51827 30.0013H22.826C25.0388 29.9991 27.1603 29.1493 28.725 27.6386C30.2897 26.1278 31.1698 24.0795 31.1721 21.943V8.12867C31.1698 5.99216 30.2897 3.94381 28.725 2.43307C27.1603 0.922335 25.0388 0.0725979 22.826 0.0703125ZM15.6721 21.943C14.2572 21.943 12.8741 21.5379 11.6977 20.7789C10.5212 20.02 9.60429 18.9412 9.06283 17.6791C8.52137 16.417 8.3797 15.0282 8.65573 13.6883C8.93177 12.3485 9.6131 11.1177 10.6136 10.1517C11.6141 9.18575 12.8888 8.5279 14.2765 8.26139C15.6642 7.99487 17.1026 8.13166 18.4098 8.65444C19.717 9.17723 20.8342 10.0625 21.6203 11.1984C22.4064 12.3343 22.826 13.6697 22.826 15.0358C22.824 16.8671 22.0697 18.6229 20.7285 19.9178C19.3873 21.2128 17.5688 21.9411 15.6721 21.943ZM24.6144 8.12867C24.2607 8.12867 23.9149 8.02739 23.6208 7.83765C23.3267 7.64791 23.0975 7.37822 22.9621 7.06269C22.8267 6.74716 22.7913 6.39996 22.8603 6.065C22.9293 5.73003 23.0997 5.42235 23.3498 5.18085C23.5999 4.93936 23.9186 4.7749 24.2655 4.70827C24.6124 4.64164 24.972 4.67583 25.2988 4.80653C25.6256 4.93723 25.905 5.15855 26.1015 5.44252C26.298 5.72649 26.4029 6.06035 26.4029 6.40188C26.4029 6.85985 26.2145 7.29907 25.8791 7.6229C25.5437 7.94674 25.0888 8.12867 24.6144 8.12867ZM20.4414 15.0358C20.4414 15.9466 20.1616 16.8369 19.6376 17.5941C19.1135 18.3514 18.3687 18.9416 17.4972 19.2901C16.6258 19.6386 15.6668 19.7298 14.7417 19.5521C13.8165 19.3744 12.9668 18.9359 12.2998 18.2919C11.6328 17.6479 11.1785 16.8274 10.9945 15.9342C10.8105 15.0409 10.905 14.1151 11.2659 13.2737C11.6269 12.4322 12.2382 11.7131 13.0225 11.2071C13.8068 10.7011 14.7289 10.4311 15.6721 10.4311C16.937 10.4311 18.1501 10.9162 19.0445 11.7798C19.9389 12.6433 20.4414 13.8146 20.4414 15.0358Z"
                                    fill="#F652A0"></path>
                            </svg></a><a href="#" target="_blank" aria-label="dummy Link"><svg
                                xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="55" height="55"
                                viewBox="0,0,256,256" style={{ fill: '#000000' }}>
                                <g fill="#fff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                    stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray=""
                                    stroke-dashoffset="0" font-family="none" font-weight="bold" font-size="none"
                                    textAnchor="end" style={{ mixBlendMode: 'normal' }}>
                                    <g transform="scale(5.12,5.12)">
                                        <path
                                            d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM37,19h-2c-2.14,0 -3,0.5 -3,2v3h5l-1,5h-4v15h-5v-15h-4v-5h4v-3c0,-4 2,-7 6,-7c2.9,0 4,1 4,1z">
                                        </path>
                                    </g>
                                </g>
                            </svg></a><a href="#" target="_blank" aria-label="dummy Link"><svg
                                xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 34 27"
                                fill="none">
                                <path
                                    d="M32.7816 4.62104C32.6422 4.06127 32.3751 3.54355 32.0024 3.11057C31.6297 2.6776 31.162 2.34178 30.6379 2.13084C25.5667 0.120457 17.4952 0.138678 17.0514 0.138678C16.6076 0.138678 8.53612 0.120457 3.46484 2.13084C2.94079 2.34178 2.47312 2.6776 2.1004 3.11057C1.72769 3.54355 1.46062 4.06127 1.32123 4.62104C0.938068 6.13642 0.482422 8.90602 0.482422 13.5007C0.482422 18.0955 0.938068 20.8651 1.32123 22.3804C1.46041 22.9405 1.72739 23.4585 2.10011 23.8918C2.47284 24.325 2.94062 24.6611 3.46484 24.8722C8.32309 26.796 15.9271 26.8628 16.9537 26.8628H17.149C18.1757 26.8628 25.7841 26.796 30.6379 24.8722C31.1622 24.6611 31.6299 24.325 32.0027 23.8918C32.3754 23.4585 32.6424 22.9405 32.7816 22.3804C33.1647 20.862 33.6204 18.0955 33.6204 13.5007C33.6204 8.90602 33.1647 6.13642 32.7816 4.62104ZM22.1138 14.0064L15.0128 18.8653C14.9237 18.9264 14.8201 18.9614 14.713 18.9667C14.606 18.972 14.4996 18.9474 14.4051 18.8955C14.3106 18.8436 14.2317 18.7664 14.1766 18.672C14.1216 18.5776 14.0926 18.4697 14.0926 18.3597V8.64181C14.0926 8.53183 14.1216 8.42389 14.1766 8.32951C14.2317 8.23514 14.3106 8.15787 14.4051 8.10596C14.4996 8.05405 14.606 8.02944 14.713 8.03476C14.8201 8.04008 14.9237 8.07514 15.0128 8.13618L22.1138 12.9951C22.195 13.0506 22.2615 13.1257 22.3076 13.2139C22.3536 13.3021 22.3777 13.4007 22.3777 13.5007C22.3777 13.6008 22.3536 13.6993 22.3076 13.7876C22.2615 13.8758 22.195 13.9509 22.1138 14.0064Z"
                                    fill="#ff0000"></path>
                            </svg></a>
          {/* Repeat for other social icons */}
      </div>
      <div className="column" style={{display:'flex', gap:8}}>
          {/* Additional App Store/Google Play links */}
          <a href="#" target="_blank" aria-label="dummy Link">
              <Image src={googlePlayIcon} className="app" alt="Google Play Icon" />
          </a>
          <a href="#" target="_blank" aria-label="dummy Link">
              <Image src="data:image/png;base64,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" className="app" alt="App Store Icon" height={55} width={55}/>
          </a>
      </div>
      <div className="column"><button>Login</button><button className="green">Get started for free</button></div>
  </div>
  <div className="row">
                    <div className="copy">
                        <p className="mtapFooterImage"><Image src="data:image/png;base64,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"
                                alt="" height={70} width={80} /></p><br /> © 2023 by mTap Corporation. All Rights Reserved
                    </div>
                </div>
</footer>
  );
  
  export default Footer;
  