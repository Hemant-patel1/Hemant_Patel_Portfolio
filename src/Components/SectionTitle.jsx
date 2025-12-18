import React from 'react';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-8 sm:mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;