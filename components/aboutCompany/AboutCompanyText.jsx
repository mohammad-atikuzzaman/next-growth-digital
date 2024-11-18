// import React from 'react';

// const AboutCompanyText = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default AboutCompanyText;

import React from "react";

const AboutCompanyText = () => {
  const features = [
    {
      title: "Data-Driven Approach",
      description:
        "A data-driven approach is a methodology that involves using data analysis to make strategic decisions and guide an organization. This approach can help companies make better decisions.",
    },
    {
      title: "Custom Strategies Reality",
      description:
        "Custom strategies can be used in a variety of contexts, including marketing, trading, UI/UX & product design and software development. You are easy all step good benefit.",
    },
    {
      title: "100% Proven Results",
      description:
        "With a track record of success across various industries, we have helped businesses achieve higher rankings, increased traffic, and higher conversion rates.",
    },
    {
      title: "Solved Transparency & Reporting",
      description:
        "Transparency reporting is the practice of releasing documents that disclose information about how an organization operates, including how it enforces rules and policies.",
    },
  ];

  return (
    <div className="flex flex-col items-center px-6 py-10 bg-gray-100">
      <div className="w-full max-w-3xl">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4 py-4">
            {/* Line and Circle */}
            <div className="flex flex-col items-center">
              <div
                className={`w-3 h-3 rounded-full ${
                  index === 0 ? "bg-violet-600" : "bg-violet-300"
                }`}
              ></div>
              {index !== features.length - 1 && (
                <div className="w-1 h-full bg-violet-300"></div>
              )}
            </div>
            {/* Content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCompanyText;
