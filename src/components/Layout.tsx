import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Layout = (props: React.PropsWithChildren) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeClasses] = useState(
    'text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700',
  );
  const [secondaryClasses] = useState(
    'text-gray-800 bg-gray-50 dark:text-white hover:bg-gray-50 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700',
  );

  const checkActiveButton = (path: string): string => {
    if (path === location.pathname) return activeClasses;
    return secondaryClasses;
  };
  return (
    <div className="">
      <header className="sticky top-0 z-50">
        <nav className="bg-gray-800 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-white">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="flex items-center justify-between w-full">
              <span className="text-white dark:text-gray-800 font-medium text-md lg:py-2.5 mr-2">
                Age Of Empires Unit
              </span>
              <div>
                <a
                  href="#"
                  className={checkActiveButton('/')}
                  onClick={() => location.pathname !== '/' && navigate('/')}
                >
                  Home
                </a>
                <a
                  href="#"
                  className={checkActiveButton('/units')}
                  onClick={() =>
                    location.pathname !== '/units' && navigate('/units')
                  }
                >
                  Units
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="flex justify-center px-5 lg:px-0 pb-4">
        <div className="w-full lg:w-[1000px]">{props?.children}</div>
      </div>
    </div>
  );
};
