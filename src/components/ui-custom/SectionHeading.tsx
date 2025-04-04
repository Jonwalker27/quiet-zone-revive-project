
import React from 'react';

interface SectionHeadingProps {
  title: React.ReactNode; // Changed from string to ReactNode to accept JSX elements
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ title, subtitle, center = true }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className="mb-4">{title}</h2>
      {subtitle && <p className="text-medium-gray text-lg max-w-3xl mx-auto">{subtitle}</p>}
      <div className="section-divider"></div>
    </div>
  );
};

export default SectionHeading;
