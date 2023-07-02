import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            onClick={toggleAccordion}
            aria-expanded={isExpanded ? 'true' : 'false'}
          >
            {title}
          </button>
        </h2>
        {isExpanded && (
          <div className="accordion-collapse collapse show">
            <div className="accordion-body">{content}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
