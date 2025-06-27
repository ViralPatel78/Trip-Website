// src/components/BlogFAQ.js
import React, { useState } from 'react';
import '../styles/BlogFAQ.css';

const faqs = [
  {
    question: "What is the best time to book a trip?",
    answer: "It's ideal to book 1-3 months in advance for domestic travel, and 2-6 months for international destinations.",
  },
  {
    question: "Do you offer customized travel packages?",
    answer: "Yes! We offer fully customizable travel experiences tailored to your preferences.",
  },
  {
    question: "Is travel insurance included in bookings?",
    answer: "Travel insurance is optional but highly recommended. You can add it during checkout.",
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer: "Absolutely. Most bookings can be rescheduled or canceled with minimal fees depending on the provider's policy.",
  },
];

const BlogFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="faq-page">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Your answers are just a scroll away.</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="toggle-icon">{activeIndex === index ? '−' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogFAQ;
