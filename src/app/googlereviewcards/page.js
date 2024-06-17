import Image from 'next/image';
import React from 'react';
import card1 from "../../Img/sect-1-card.png"
import card3 from "../../Img/sect-2-card.svg"
import card2 from "../../Img/sect-2-phone.png"
import Link from 'next/link';
import "./googlereview.css"
export default function GoogleReviewCards() {
  return (
    <>

      <div className="page-wrapper" style={{marginTop:'10rem'}}>


        <div className="container" >

        {/* <h1><span>Boost Business Reviews with</span> Google Review Cards</h1>
         */}
          <section className="section section1" >
            <div className="leftSide" >
              <div className="video"><video className="elementor-video" src="https://lp.mtap.io/wp-content/uploads/2023/06/4902015513813984544mobile_2_1.mov"  autoPlay="" muted="muted" playsInline="" controlsList="nodownload" loop></video></div>
              <div className="card">
                <Image className='cardImg card1' src={card1} alt="cards" />
                <Image className='cardImg card2' src={card1} alt="cards" />
                <Image className='cardImg card3' src={card1} alt="cards" />
                </div>
            </div>
            <div className="rightSide">
              <h2>Capture your customers’ <strong>reviews</strong> </h2>
              <div className="cta"> <Link href="https://mtap.io/shop-nfc/google-review-card"  className="lightredCta">TRY IT</Link></div>
            </div>
          </section>
          <section className="section section2" >
            <h2 className="text-center">HOW DOES IT WORK?</h2>
            <div className="leftSide">
              <div className="mobileSlide"><Image src={card2} alt="phone" /></div>
              <div className="card"><Image src={card3}alt="cards" /></div>
            </div>
            <div className="rightSide style-999">
              <h4>Tap the card on a customer’s phone.</h4>
              <h4><strong>That’s it. Seriously.</strong></h4>
              <h3>NO APPS REQUIRED.</h3>
            </div>
          </section>
          <section className="section section3">
            <h2 className="text-center">TRY IT OUT NOW!</h2>
            <div className="cardsBlks">
              <div className="row row1">
                <h3 className="title"> 5-card google<br /> review card bundle</h3>
                <span className="helptext">*regular google review card</span>
                <div className="pricecanceled">$99</div>
                <div className="offerPrice">$52.47</div>
                <div className="cardsCta"><Link href="https://mtap.io/shop-nfc/google-review-card?v=143">BUY</Link></div>
              </div>

              <div className="row row2">
                <h3 className="title"> 5-card Custom google<br /> review card bundle</h3>
                <span className="helptext">*includes business name and logo</span>
                <div className="pricecanceled">$174.95</div>
                <div className="offerPrice">$122.47</div>
                <div className="cardsCta"><Link href="https://mtap.io/shop-nfc/custom-google-review-card?v=147">BUY</Link></div>
              </div>
              <div className="row row3">
                <h3 className="title" > 10-card Custom google  review card bundle</h3>
                <span className="helptext"></span>
                <div className="pricecanceled">$349</div>
                <div className="offerPrice">$174.95</div>
                <div className="cardsCta"><Link href="https://mtap.io/shop-nfc/custom-google-review-card?v=148">BUY</Link></div>
              </div>
            </div>
          </section>
        </div>
        <div className="pageBottom">
          <section className="section sectionClients">
            <h2>our clients love it!</h2>
            <div className="clientsBlks">
              <div className="row">
                <div className="content">
                  <p >  mTap’s Google Review Cards are a game-changer for my restaurant!<br/>
With a simple tap after a meal, we’re getting heaps of positive reviews, attracting more customers than ever and boosting our online credibility. I’m thrilled!</p>
                </div>
                <div className="authInfo">- Maria R., Los Gringos, Arizona</div>
              </div>
              <div className="row">
                <div className="content"><p>I can’t believe the impact mTap’s Review Cards had on my Landscaping business! <br />
Customers leaving reviews with just a tap has skyrocketed our credibility, setting us apart from competitors and bringing in more clients. It’s been amazing!”</p></div>
                <div className="authInfo">- Julio P., Clean & Green, Texas</div>
              </div>
              <div className="row">
                <div className="content"><p>Using mTap’s Google Review Cards has been a dream come true for my massage studio! <br />
Clients love the convenience of tapping their phones to leave reviews, and our ratings have soared, making us the top choice for people looking for massages. I couldn’t be happier!”
                  </p></div>
                <div className="authInfo">- Jessica C. Warm Touch, Michigan</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
