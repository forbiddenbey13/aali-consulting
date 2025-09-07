import React from 'react';

const MapleLeafLogo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-32 h-32 text-blue-600"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.5 15.75a.75.75 0 0 0 1.5 0V12a.75.75 0 0 0-1.5 0v5.25ZM12 6a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 12 6Zm2.25 4.5a.75.75 0 0 0-1.5 0v5.25a.75.75 0 0 0 1.5 0v-5.25ZM12 12a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75A.75.75 0 0 1 12 12Zm-2.25 4.5a.75.75 0 0 0-1.5 0v5.25a.75.75 0 0 0 1.5 0v-5.25ZM12 18a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75A.75.75 0 0 1 12 18Z"
          clipRule="evenodd"
        />
      </svg>
      <p className="mt-4 text-2xl font-bold text-blue-800">AALI</p>
      <p className="text-lg text-blue-600">CONSULTING</p>
    </div>
  );
};

export default MapleLeafLogo;