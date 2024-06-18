import Image from 'next/image';
import React from 'react'

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
    <div className={isOpen ? 'open accordion-group' : 'close accordion-group'}>
      <h4 onClick={onClick}>
        {question} <span><Image className="plus" src={plusIcon} alt="plus" /><Image className="minus" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAHCAYAAABKiB6vAAAABmJLR0QA/wD/AP+gvaeTAAAAeUlEQVQ4jdXTMQrCQBRF0ZNpItElZAcWWYpdlhVwOWltXYGtYCWkEQQLNcUYsNUUmXlwi9/dB+8Ts8UBD7wz4Yo9Vp8ONjgnIPYv3VRkl4DMHAYUAZW8UyIE8TfuC8vMSY/ndLS4WX4mv3JEDcVXszUa+UztghNeMAIXQcEonyf7xgAAAABJRU5ErkJggg==" alt="minus" width={50} height={50}/></span>
      </h4>
      {isOpen && <div className="accordion-content">
        <p>{answer}</p>
      </div>}
    </div>
  );
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
const Faq = () => {
  return (
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
  )
}

export default Faq