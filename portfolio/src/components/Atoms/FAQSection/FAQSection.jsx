import React from "react";
import "./FAQSection.css";
import ToggleExpandCard from "../ToggleExpandCard/ToggleExpandCard";
import MainTitle from "../MainTitle/MainTitle";

const FAQSection = () => {
  const websiteFAQs = [
    {
      question: "What type of websites do you build?",
      answer:
        "I specialize in business websites, e-commerce platforms, personal portfolios, blogs, and SaaS-based applications.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes, I ensure that all websites are fully responsive and work on all devices (mobile, tablet, and desktop).",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes, I can improve the design, functionality, and performance of your current website.",
    },
    {
      question: "Will I be able to update my website myself?",
      answer:
        "If you prefer, I can develop the website using a CMS (like WordPress) or a no-code tool so you can update content without coding knowledge.",
    },
    {
      question: "Do you provide hosting and domain services?",
      answer:
        "I can guide you in purchasing hosting and domain services, but I do not provide them directly.",
    },
    {
      question: "Will my website be SEO-friendly?",
      answer:
        "Yes, I follow SEO best practices to help your website rank better on search engines.",
    },
  ];
  return (
    <div className="FAQSectionContainer">
      {/* <MainTitle content={""}/> */}
      <div className="FAQSectionLeft">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="FAQSectionRight">
        {websiteFAQs.map((faq, index) => (
          <ToggleExpandCard
            key={index}
            questions={faq.question}
            answers={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
