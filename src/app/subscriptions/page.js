"use client"
import { useState } from 'react';
import plusIcon from "../../Img/plus.baed9fac.svg"
import Image from 'next/image';
import "./subscriptions.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className={isOpen ? 'open accordion-group' : 'close accordion-group'}>
    <h4 onClick={onClick}>
      {question} <span><Image className="plus" src={plusIcon} alt="plus" /><Image className="minus" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAHCAYAAABKiB6vAAAABmJLR0QA/wD/AP+gvaeTAAAAeUlEQVQ4jdXTMQrCQBRF0ZNpItElZAcWWYpdlhVwOWltXYGtYCWkEQQLNcUYsNUUmXlwi9/dB+8Ts8UBD7wz4Yo9Vp8ONjgnIPYv3VRkl4DMHAYUAZW8UyIE8TfuC8vMSY/ndLS4WX4mv3JEDcVXszUa+UztghNeMAIXQcEonyf7xgAAAABJRU5ErkJggg==" alt="minus"  width={50} height={50} /></span>
    </h4>
    {isOpen && <div className="accordion-content">
      <p>{answer}</p>
    </div>}
  </div>
);
export default function Subscriptions() {
  const [plan, setPlan] = useState('annual');
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('pending');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const accordionData = [
    {
      question: 'Will my gift recipient be able to make changes to their profile?',
      answer: 'Yes, they will receive instructions for claiming their mTap account and making updates to their profile in the packaging of their new card.'
    },
    {
      question: 'Does mTap work Internationally?',
      answer: 'Yes, they will receive instructions for claiming their mTap account and making updates to their profile in the packaging of their new card.'
    },
    {
      question: 'Can I add a custom logo or job title to a gifted card?',
      answer: 'Yes, they will receive instructions for claiming their mTap account and making updates to their profile in the packaging of their new card.'
    },
    {
      question: 'How does my gift recipient use their card?',
      answer: 'Yes, they will receive instructions for claiming their mTap account and making updates to their profile in the packaging of their new card.'
    }
  ];

  return (
  <main>
       <section className="next-level-networking row-block">
      <h3>Next Level Networking</h3>
      <p>Find the plan that’s right for you</p>
      <div className="container text-center">
        <div className="tabs-slider">
          <input 
            type="radio" 
            id="radio-1" 
            name="tabs" 
            value="annual" 
            checked={plan === 'annual'} 
            onChange={() => setPlan('annual')} 
          />
          <label className="tab-label" htmlFor="radio-1">
            Annual
            <span className="notification">Save 20-30%</span>
          </label>
          <input 
            type="radio" 
            id="radio-2" 
            name="tabs" 
            value="monthly" 
            checked={plan === 'monthly'} 
            onChange={() => setPlan('monthly')} 
          />
          <label className="tab-label" htmlFor="radio-2">Monthly</label>
          <span className="glider"></span>
        </div>
      </div>
      <div className="filter-container">
      <div className="filter">
        <div className="form-group">
          <div className="btn-group">
            <button   className={`btn-default btn btn-xs ${activeTab === 'pending' ? 'active' : ''}`}
              onClick={() => handleTabChange('pending')}>
         {activeTab === 'pending' ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />} Pending
            </button>
           
            <button   className={`btn-success btn btn-xs ${activeTab === 'verify' ? 'active' : ''}`}
              onClick={() => handleTabChange('verify')}>
             {activeTab === 'verify' ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />} Verify
            </button>
            <button   className={`btn-danger btn btn-xs ${activeTab === 'decline' ? 'active' : ''}`}
              onClick={() => handleTabChange('decline')}>
              <span className="fa-circle fa"> {activeTab === 'decline' ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}</span> Decline
            </button>
          </div>
          {/* <span className="text-muted">0</span> */}
        </div>
      </div>
      </div>
            {/* Mobile view section */}

      <div className="mobile-view">
      <div className="container container-xs">
         <div className="list-fix-row">
       
              {activeTab === 'pending' && (
          <div className="active col-fix-3 fix-type1">
            <h2>FREE<br /><span>{plan === 'annual' ? '$1.99/m' : '$4.99/m'}</span></h2>
            <p>Replace Your Paper Business Card</p>
            <a href="#">CREATE YOUR PROFILE</a>
            <ul>
              <li>AI-Assisted Profile Creation</li>
              <li>Customizable Profile</li>
              <li>Contact Exchange by QR Code, NFC, and Airdrop</li>
              <li>Unlimited Card Shares</li>
              <li>Unlimited Links and Attachments</li>
              <li>New Contacts Dashboard</li>
            </ul>
          </div>
         )}
            {activeTab === 'verify' && (
          <div className="active col-fix-3 fix-type2">
            <h2>PRO<br /><span>{plan === 'annual' ? '$3.99/m' : '$5.99/m'}</span></h2>
            <p>A complete networking solution</p>
            <a href="#">Start Free Trial</a>
            <p className="small">Everything in Free, Plus:</p>
            <ul>
              <li>Create Up to 3 Swappable Profile</li>
              <li>Paper Card Scan-And-Upload Too</li>
              <li>Native Integration with Many CRMs</li>
              <li>Automated SMS Follow Up</li>
              <li>Gmail Integration for Automated Follow Up</li>
            </ul>
          </div>
            )}
              {activeTab === 'decline' && (
          <div className=" active col-fix-3 fix-type3">
            <h2>Pro Teams<br /><span>{plan === 'annual' ? '$4.99/m' : '$6.99/m'}</span></h2>
            <p>Complete integration for your entire team</p>
            <a href="#">Start Free Trial</a>
            <p className="small">Everything in Pro, Plus:</p>
            <ul>
              <li>Centralized Team Management</li>
              <li>Admin Dashboard</li>
              <li>CRM Integration across your team</li>
            </ul>
          </div>
              )}
 </div>
        </div>
      </div>

      {/* Normal screen  */}
      <div className="container container-xs desktopView">
         <div className="list-fix-row">
       
          
          <div className="active col-fix-3 fix-type1">
            <h2>FREE<br /><span>{plan === 'annual' ? '$1.99/m' : '$4.99/m'}</span></h2>
            <p>Replace Your Paper Business Card</p>
            <a href="#">CREATE YOUR PROFILE</a>
            <ul>
              <li>AI-Assisted Profile Creation</li>
              <li>Customizable Profile</li>
              <li>Contact Exchange by QR Code, NFC, and Airdrop</li>
              <li>Unlimited Card Shares</li>
              <li>Unlimited Links and Attachments</li>
              <li>New Contacts Dashboard</li>
            </ul>
          </div>
     
         
          <div className="active col-fix-3 fix-type2">
            <h2>PRO<br /><span>{plan === 'annual' ? '$3.99/m' : '$5.99/m'}</span></h2>
            <p>A complete networking solution</p>
            <a href="#">Start Free Trial</a>
            <p className="small">Everything in Free, Plus:</p>
            <ul>
              <li>Create Up to 3 Swappable Profile</li>
              <li>Paper Card Scan-And-Upload Too</li>
              <li>Native Integration with Many CRMs</li>
              <li>Automated SMS Follow Up</li>
              <li>Gmail Integration for Automated Follow Up</li>
            </ul>
          </div>
 
            
          <div className=" active col-fix-3 fix-type3">
            <h2>Pro Teams<br /><span>{plan === 'annual' ? '$4.99/m' : '$6.99/m'}</span></h2>
            <p>Complete integration for your entire team</p>
            <a href="#">Start Free Trial</a>
            <p className="small">Everything in Pro, Plus:</p>
            <ul>
              <li>Centralized Team Management</li>
              <li>Admin Dashboard</li>
              <li>CRM Integration across your team</li>
            </ul>
          </div>
    
 </div>
        </div>
    </section>
    <section className="what-plan-to-pick row-block">
    <div className="container container-xs">
      <div className="full-card">
        <h2 className='text-black'>Dont know what plan to pick?</h2>
        <p>Take our personalized quiz and find your match!</p>
        <a href="#">Take the Quiz</a>
      </div>
    </div>
  </section>
  <section className="pricing-table row-block">
                    <div className="container container-xs">
                        <div className="table-block">
                        <svg aria-hidden="true" style={{ display: 'none' }}>
        <defs>
          <symbol id="icon-1" width="21" height="17" viewBox="0 0 21 17" fill="none">
            <title>lock</title>
            <path
              d="M20.6426 2.2924L7.72337 16.6053C7.61085 16.7304 7.47714 16.8297 7.32992 16.8974C7.1827 16.9651 7.02486 17 6.86545 17C6.70604 17 6.5482 16.9651 6.40098 16.8974C6.25376 16.8297 6.12006 16.7304 6.00753 16.6053L0.355362 10.3434C0.242698 10.2186 0.153328 10.0704 0.0923554 9.90735C0.0313824 9.74426 1.67882e-09 9.56948 0 9.39296C-1.67882e-09 9.21644 0.0313824 9.04165 0.0923554 8.87857C0.153328 8.71549 0.242698 8.56731 0.355362 8.44249C0.468025 8.31767 0.601776 8.21866 0.748978 8.15111C0.89618 8.08356 1.05395 8.04879 1.21328 8.04879C1.37261 8.04879 1.53038 8.08356 1.67758 8.15111C1.82478 8.21866 1.95854 8.31767 2.0712 8.44249L6.86646 13.755L18.9288 0.393697C19.1563 0.141617 19.4649 0 19.7867 0C20.1085 0 20.4171 0.141617 20.6446 0.393697C20.8722 0.645777 21 0.987671 21 1.34417C21 1.70066 20.8722 2.04255 20.6446 2.29463L20.6426 2.2924Z"
              fill="white"></path>
          </symbol>
          <symbol id="icon-2" width="21" height="17" viewBox="0 0 21 17" fill="none">
            <title>star</title>
            <path
              d="M20.6426 2.2924L7.72337 16.6053C7.61085 16.7304 7.47714 16.8297 7.32992 16.8974C7.1827 16.9651 7.02486 17 6.86545 17C6.70604 17 6.5482 16.9651 6.40098 16.8974C6.25376 16.8297 6.12006 16.7304 6.00753 16.6053L0.355362 10.3434C0.242698 10.2186 0.153328 10.0704 0.0923554 9.90735C0.0313824 9.74426 1.67882e-09 9.56948 0 9.39296C-1.67882e-09 9.21644 0.0313824 9.04165 0.0923554 8.87857C0.153328 8.71549 0.242698 8.56731 0.355362 8.44249C0.468025 8.31767 0.601776 8.21866 0.748978 8.15111C0.89618 8.08356 1.05395 8.04879 1.21328 8.04879C1.37261 8.04879 1.53038 8.08356 1.67758 8.15111C1.82478 8.21866 1.95854 8.31767 2.0712 8.44249L6.86646 13.755L18.9288 0.393697C19.1563 0.141617 19.4649 0 19.7867 0C20.1085 0 20.4171 0.141617 20.6446 0.393697C20.8722 0.645777 21 0.987671 21 1.34417C21 1.70066 20.8722 2.04255 20.6446 2.29463L20.6426 2.2924Z"
              fill="black"></path>
          </symbol>
        </defs>
      </svg>
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            <h1>Our Features</h1>
                                        </th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th>CONTENT</th>
                                        <th>Free</th>
                                        <th>Pro</th>
                                        <th>Pro Teams</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> Bio &amp; Contact Info</td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-2"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                    </tr>
                                    <tr>
                                        <td>Cover Image &amp; Photo Gallery</td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-2"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                    </tr>
                                    <tr>
                                        <td>Socials and Other URLs</td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-2"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                    </tr>
                                    <tr>
                                        <td>Video &amp; File Uploads</td>
                                        <td></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-2"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                    </tr>
                                    <tr>
                                        <td>Team Directory</td>
                                        <td></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-2"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                    </tr>
                                    <tr>
                                        <td>Embedded Apps on Profile</td>
                                        <td></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-2"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                    </tr>
                                    <tr>
                                        <td>Custom Profile &amp; Dashboard Branding</td>
                                        <td></td>
                                        <td></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                    </tr>
                                    <tr>
                                        <td> </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>SHARING</th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> Profile Sharing via QR and NFC</td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-2"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                    </tr>
                                    <tr>
                                        <td>Unique Shareable Profile Link</td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-2"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                    </tr>
                                    <tr>
                                        <td>Contact Exchange &amp; Lead Capture</td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-2"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                    </tr>
                                    <tr>
                                        <td>Accessible on iOS, Android, Web</td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-2"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                    </tr>
                                    <tr>
                                        <td> </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>INTEGRATIONS &amp; ANALYTICS</th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>CSV Exports for Contacts</td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-2"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                    </tr>
                                    <tr>
                                        <td>Native CRM Integrations</td>
                                        <td></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-2"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                    </tr>
                                    <tr>
                                        <td>4000+ Zapier Integrations</td>
                                        <td></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-2"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                    </tr>
                                    <tr>
                                        <td>Individual Profile Analytics</td>
                                        <td></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-2"></use>
                                            </svg></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                    </tr>
                                    <tr>
                                        <td> Advanced Team Analytics</td>
                                        <td></td>
                                        <td></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                    </tr>
                                    <tr>
                                        <td> </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>COLLABORATION &amp; ADMINISTRATION</th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Collaborative Admin Dashboard</td>
                                        <td></td>
                                        <td></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                    </tr>
                                    <tr>
                                        <td>Profile Management for Teams</td>
                                        <td></td>
                                        <td></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                    </tr>
                                    <tr>
                                        <td>Custom Templates &amp; Section Locks</td>
                                        <td></td>
                                        <td></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                    </tr>
                                    <tr>
                                        <td>Centralized Lead Storage</td>
                                        <td></td>
                                        <td></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                    </tr>
                                    <tr>
                                        <td>Onboarding &amp; Customer Support</td>
                                        <td></td>
                                        <td></td>
                                        <td><svg className="icon icon-lock">
                                                <use href="#icon-1"></use>
                                            </svg></td>
                                    </tr>
                                    <tr>
                                        <td> </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section className="what-plan-to-pick row-block">
                    <div className="container container-xs">
                        <div className="full-card">
                            <h2 className='text-black'>We&#39;ll tailor a plan that makes you<br />soar. Talk to us.</h2><a href="#">Schedule a
                                meeting</a>
                        </div>
                    </div>
                </section>
                <section className="our-accordion row-block">
      <div className="container container-xs">
        <div className="accordion-wrap">
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
  )
}



{/* <span className="fa-check-circle fa"><Checkbox
label="CheckCircleOutlineIcon"
icon={<RadioButtonUncheckedIcon />}
checkedIcon={<CheckCircleIcon />}
/> </span> */}