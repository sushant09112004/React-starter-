'use client';
import { useState } from 'react';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-white">
      {/* Progress Bar */}
      <div className="w-full max-w-3xl mx-auto mb-8">
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-sm">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div 
              key={index + 1}
              className={`${currentStep >= index + 1 ? 'text-blue-500' : 'text-gray-400'}`}
            >
              Step {index + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {currentStep === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Personal Information</h2>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Contact Details</h2>
            <div className="space-y-2">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Professional Info</h2>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Job Title"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Additional Information</h2>
            <div className="space-y-2">
              <textarea
                placeholder="Tell us about yourself"
                className="w-full p-2 border rounded h-32"
              ></textarea>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className={`px-4 py-2 rounded ${currentStep === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className={`px-4 py-2 rounded ${currentStep === totalSteps ? 'bg-green-500' : 'bg-blue-500'} text-white hover:opacity-90`}
          >
            {currentStep === totalSteps ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}
