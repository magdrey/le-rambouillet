import React, { useState } from "react";
import { faqs } from "./ContactCardData";
import FaqItem from "./FaqItem";

function FAQ() {
  // eslint-disable-next-line
  const [questions, setQuestion] = useState(faqs);

  return (
    <div className="FAQ">
      {questions.map((question, index) => (
        <FaqItem key={index} {...question} />
      ))}
    </div>
  );
}

export default FAQ;
