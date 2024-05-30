"use client";
import Image from "next/image";
import { useState } from "react";
// import "../../styles/pro.css"

import plusIcon from "../../Img/plus.baed9fac.svg";
import star from "../../Img/stars.jpg";
import followUpCard from "../../Img/card-img1.3c431fc5.png";
import networkingHub from "../../Img/icons-min1.52053dab.svg";
import syncCRM from "../../Img/icons-min2.a143bfa1.svg";
import aiProfileCreation from "../../Img/icons-min3.6d3bf29b.svg";
import followupText from "../../Img/icons-min4.35cc0ef3.svg";
import scanContacts from "../../Img/icons-min5.d42066b4.svg";
import "./teams.css";
// import { motion, useScroll, useTransform } from 'framer-motion';

// const ParallaxVideo = () => {
//   const { scrollYProgress } = useScroll();
//   const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

//   return (
//     <motion.div style={{ y }}>
//       <video
//         autoPlay
//         loop
//         muted
//         style={{
//           width: '100%',
//           height: 'auto',
//           objectFit: 'cover',
//           position: 'absolute',
//           zIndex: -1,
//         }}
//       >
//         <source src="https://videos.pexels.com/video-files/5818973/5818973-hd_1280_720_24fps.mp4" type="video/mp4" />
//       </video>
//     </motion.div>
//   );
// };

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className={isOpen ? "open accordion-group" : "close accordion-group"}>
    <h4 onClick={onClick}>
      {question}{" "}
      <span>
        <Image
          className="plus"
          src={plusIcon}
          alt="plus"
          height={50}
          width={50}
        />
        <Image
          className="minus"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAHCAYAAABKiB6vAAAABmJLR0QA/wD/AP+gvaeTAAAAeUlEQVQ4jdXTMQrCQBRF0ZNpItElZAcWWYpdlhVwOWltXYGtYCWkEQQLNcUYsNUUmXlwi9/dB+8Ts8UBD7wz4Yo9Vp8ONjgnIPYv3VRkl4DMHAYUAZW8UyIE8TfuC8vMSY/ndLS4WX4mv3JEDcVXszUa+UztghNeMAIXQcEonyf7xgAAAABJRU5ErkJggg=="
          alt="minus"
          width={50}
          height={50}
        />
      </span>
    </h4>
    {isOpen && (
      <div className="accordion-content">
        <p>{answer}</p>
      </div>
    )}
  </div>
);
export default function Teams() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const accordionData = [
    {
      question:
        "Will my gift recipient be able to make changes to their profile?",
      answer:
        "Yes, they will receive instructions for claiming their mTap account and making updates to their profile in the packaging of their new card.",
    },
    {
      question: "Does mTap work Internationally?",
      answer:
        "Yes, they will receive instructions for claiming their mTap account and making updates to their profile in the packaging of their new card.",
    },
    {
      question: "Can I add a custom logo or job title to a gifted card?",
      answer:
        "Yes, they will receive instructions for claiming their mTap account and making updates to their profile in the packaging of their new card.",
    },
    {
      question: "How does my gift recipient use their card?",
      answer:
        "Yes, they will receive instructions for claiming their mTap account and making updates to their profile in the packaging of their new card.",
    },
  ];

  return (
    <main data-v-0a07a5aa>
      <div className="business-pro-section">
        <div className="star-background">
          <Image
            src={star}
            alt="Star Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <section
          className="business-pro-module content-overlay"
          data-v-0a07a5aa
        >
          <div className="container container-xs" data-v-0a07a5aa>
            <div className="text-animated-block" data-v-0a07a5aa>
              <h1 data-v-0a07a5aa>PRO</h1>
              <h2 data-v-0a07a5aa>FOR TEAMS</h2>
              <h5 data-v-0a07a5aa>
                Seamless Lead Management Across Your Organization
              </h5>
              <p>
                Collect better data on your team's in-person business
                development, sync your tools, and empower employees to network
                effortlessly
              </p>
              <div className="btn-group">
                <button className="explore-btn">EXPLORE ALL FEATURES</button>
                <button className="trial-btn">START FREE TRIAL</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section
        className="business-card"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        data-v-0a07a5aa
      >
        <div className="card__content" style={{ width: "80%" }}>
          <div className="card-inner" style={{ backgroundColor: "white" }}>
            <div className="col">
              {/* Next.js Image for optimized image loading */}
              <Image src={followUpCard} alt="" width={500} height={300} />
            </div>
            <div className="col">
              <div className="text-wrp">
                <h2 style={{ color: "black" }}>
                  {" "}
                  Build a more complete picture of your sales pipeline
                </h2>
                <p style={{ color: "black" }}>
                  Knowing how your team is networking can be key to building a
                  more complete picture around your sales pipeline. mTap Pro
                  Teams allows your team to use the features of mTap Pro to
                  streamline their networking and contact management process,
                  while allowing you to manage company materials shown on their
                  profiles and track KPIs around networking success.
                </p>
                <a
                  href="#"
                  className="black-btn"
                  aria-label="Read more about Make Follow Up Easy"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container container-xs" data-v-0a07a5aa>
                        <div className="card-inner card-type-2 pro-page" data-v-0a07a5aa>
                            <div className="col" data-v-0a07a5aa><Image src={networkingBusinessCards} alt="NETWORKING"
                                    data-v-0a07a5aa  /></div>
                            <div className="col" data-v-0a07a5aa>
                                <div className="text-wrp" data-v-0a07a5aa>
                                    <p data-v-0a07a5aa>Networking with business cards has always been clunky. mTap Pro
                                        handles everything for you, including automatic follow ups with new connections
                                        and uploading contacts to your CRM.</p><a href="#" className="black-btn"
                                        data-v-0a07a5aa>START FREE TRIAL</a>
                                </div>
                            </div>
                        </div>
                    </div> */}
        {/* Meeting with mTap means:

Waving goodbye to manual input errors that cause companies to lose between 10 and 20% of their new contacts

Scheduling meetings automatically without the dreaded back-and-forth time selection

Spending your time continuing conversations, not manually inputting new contacts into your CRM

Promptly following up with every person you want to meet again

Throwing away paper business cards after you scan them (Finally, a clean desk!)

Remembering the context of your relationship and action items for each new contact */}
      </section>
      <section className="business-card" data-v-0a07a5aa>
      <div className="teamsHeading" data-v-0a07a5aa>
              <h2 data-v-0a07a5aa>
              Meeting with mTap means:
               
              </h2>
            </div>
      <div className="teamscontainer">
    <div className="teamscard-grid" >
      <div className="teamscard">
        <div className="teamsicon-container">
          <Image src={networkingHub} alt="Icon" className="teamsicon" />
        </div>
        <h3 className="teamstitle">Waving goodbye to manual input errors that cause companies to lose between 10 and 20% of their new contacts</h3>
      </div>

      <div className="teamscard">
        <div className="teamsicon-container">
          <Image src={syncCRM} alt="Icon" className="teamsicon" />
        </div>
        <h3 className="teamstitle">Scheduling meetings automatically without the dreaded back-and-forth time selection</h3>
     
      </div>

      <div className="teamscard">
        <div className="teamsicon-container">
          <Image src={aiProfileCreation} alt="Icon" className="teamsicon" />
        </div>
        <h3 className="teamstitle">Spending your time continuing conversations, not manually inputting new contacts into your CRM</h3>
       
      </div>

      <div className="teamscard">
        <div className="teamsicon-container">
          <Image src={followupText} alt="Icon" className="teamsicon" />
        </div>
        <h3 className="teamstitle">Promptly following up with every person you want to meet again</h3>
       
      </div>

      <div className="teamscard">
        <div className="teamsicon-container">
          <Image src={scanContacts} alt="Icon" className="teamsicon" />
        </div>
        <h3 className="teamstitle">Throwing away paper business cards after you scan them (Finally, a clean desk!)</h3>
       
      </div>
      <div className="teamscard">
        <div className="teamsicon-container">
          <Image src={scanContacts} alt="Icon" className="teamsicon" />
        </div>
        <h3 className="teamstitle">Remembering the context of your relationship and action items for each new contact</h3>
       
      </div>
    </div>
  </div>
        {/* <div className="teamcontainer teamscontainer-xs" data-v-0a07a5aa>
          <div className="card-grid" data-v-0a07a5aa style={{flexDirection:'column'}}>
            <div className="col" data-v-0a07a5aa>
              <h2 data-v-0a07a5aa>
              Meeting with mTap means:
               
              </h2>
            </div>
            <div className="col" data-v-0a07a5aa>
              <ul data-v-0a07a5aa>
                <li data-v-0a07a5aa>
                  <div className="overlap-group" data-v-0a07a5aa>
                    <p className="text-wrapper" data-v-0a07a5aa>
                      Organize relationships with mTap Networking Hub
                    </p>
                    <i data-v-0a07a5aa>
                      <Image
                        className="vector"
                        src={networkingHub}
                        alt="networkinghub"
                        data-v-0a07a5aa
                      />
                    </i>
                  </div>
                </li>
                <li data-v-0a07a5aa>
                  <div className="overlap-group" data-v-0a07a5aa>
                    <p className="text-wrapper" data-v-0a07a5aa>
                      Automatically sync new contacts with your CRM
                    </p>
                    <i data-v-0a07a5aa>
                      <Image
                        className="vector"
                        src={syncCRM}
                        alt="synccrm"
                        data-v-0a07a5aa
                      />
                    </i>
                  </div>
                </li>
                <li data-v-0a07a5aa>
                  <div className="overlap-group" data-v-0a07a5aa>
                    <p className="text-wrapper" data-v-0a07a5aa>
                      Build your profile with the help of AI-assisted profile
                      creation
                    </p>
                    <i data-v-0a07a5aa>
                      <Image
                        className="vector"
                        src={aiProfileCreation}
                        alt="aiProfileCreation"
                        data-v-0a07a5aa
                      />
                    </i>
                  </div>
                </li>
                <li data-v-0a07a5aa>
                  <div className="overlap-group" data-v-0a07a5aa>
                    <p className="text-wrapper" data-v-0a07a5aa>
                      Set up automatic follow-up from your email or by text
                      message
                    </p>
                    <i data-v-0a07a5aa>
                      <Image
                        className="vector"
                        alt="followuptext"
                        src={followupText}
                        data-v-0a07a5aa
                      />
                    </i>
                  </div>
                </li>
                <li data-v-0a07a5aa>
                  <div className="overlap-group" data-v-0a07a5aa>
                    <p className="text-wrapper" data-v-0a07a5aa>
                      Scan contacts from paper business cards with your camera.
                    </p>
                    <i data-v-0a07a5aa>
                      <Image
                        className="vector"
                        src={scanContacts}
                        alt="scancontacts"
                        data-v-0a07a5aa
                      />
                    </i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </section>
      <section className="btn-wrap row-block" data-v-0a07a5aa>
        <div className="container container-xs" data-v-0a07a5aa>
          <div className="flex-justify-end" data-v-0a07a5aa>
            <a href="#" className="btn-inline btn-type1" data-v-0a07a5aa>
              Explore all Features
            </a>
            <a href="#" className="btn-inline btn-type2" data-v-0a07a5aa>
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
      <section className="what-plan-to-pick row-block" data-v-0a07a5aa>
        <div className="container container-xs" data-v-0a07a5aa>
          <div className="full-card flex-align" data-v-0a07a5aa>
            <h2 data-v-0a07a5aa className="text-black">
              Have a Team?
            </h2>
            <a href="#" data-v-0a07a5aa>
              Explore mTap Pro Teams
            </a>
          </div>
        </div>
      </section>
      <section className="our-accordion row-block" data-v-0a07a5aa>
        <div className="container container-xs" data-v-0a07a5aa>
          <div className="accordion-wrap" data-v-0a07a5aa>
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
