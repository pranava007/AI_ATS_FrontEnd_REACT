import React from 'react';
import { FileInput, Label } from 'flowbite-react';

const Home = () => {

  return (
    <div className="w-full px-5 sm:px-10 lg:px-16 mt-1 .roboto-thin">
  <div className="flex flex-col w-full items-center justify-center space-y-6">
    
    {/* Job Description */}
    <div className="w-full max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h1 className="text-xl font-semibold mb-4 text-center">Job Description</h1>
      <Label
        htmlFor="job-description-file"
        className="flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600 transition-all"
      >
        <div className="flex flex-col items-center justify-center py-4">
          <svg
            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <FileInput id="job-description-file" className="hidden" />
      </Label>
    </div>

    {/* Resume */}
    <div className="w-full max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h1 className="text-xl font-semibold mb-4 text-center">Resume</h1>
      <Label
        htmlFor="resume-file"
        className="flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600 transition-all"
      >
        <div className="flex flex-col items-center justify-center py-4">
          <svg
            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <FileInput id="resume-file" className="hidden" />
      </Label>
    </div>

    {/* Buttons */}
    <div className="w-full max-w-2xl mx-auto flex justify-start space-x-4 mt-6 px-4">
      <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
        Submit
       
      </button>
      <button className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none">
        Clear
      </button>
    </div>
  </div>
</div>

  
  

  );
};

export default Home;
