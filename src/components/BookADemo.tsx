import React from 'react';
import behance from '../../public/Icons/behance.svg';
import google from '../../public/Icons/google.svg';
import clutch from '../../public/Icons/clutch.svg';
import dribbble from '../../public/Icons/dribbble.svg';
import Image from 'next/image';
import { IoIosStar } from 'react-icons/io';
import Link from 'next/link';

const portfolioInfo = [
  {
    icon: behance,
    description: 'Creative Team On Behance',
    stars: 0,
    link: 'https://www.behance.net/brandnasu',
  },
  {
    icon: dribbble,
    description: 'Creative Team On Dribbble',
    stars: 0,
    link: 'https://dribbble.com/brandnasu',
  },
  {
    icon: clutch,
    description: 'Reviewed On',
    stars: 5,
    link: 'https://clutch.co/profile/brandnasu',
  },
  {
    icon: google,
    description: 'Reviewed On',
    stars: 5,
    link: '',
  },
];

const BookADemo = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,_#F7F7F7_50%,_#2E1C6A_50%)] px-5">
      <div
        data-aos="zoom-out"
        data-aos-easing="ease"
        data-aos-duration="400"
        className="relative max-w-[1040px] w-full mx-auto overflow-hidden rounded-xl border-animation"
      >
        <div className="relative bg-white rounded-xl p-6 pt-10 flex items-center text-center space-y-4 justify-center z-10">
          <div className="flex flex-col gap-y-8 md:flex-row justify-evenly items-center w-full">
            {portfolioInfo.map((portfolio, idx) => (
              <div key={idx}>
                <Link
                  href={portfolio.link}
                  target="_blank"
                  className="flex flex-col md:gap-5 gap-3 justify-center items-center"
                >
                  <Image
                    src={portfolio.icon}
                    alt="Logo"
                    width={100}
                    height={100}
                  />
                  <div className="flex justify-center items-center gap-2 text-sm">
                    <p className="font-medium">{portfolio.description}</p>
                    <div
                      className={`flex gap-0.5 ${
                        idx === 2 ? 'text-red-500' : 'text-yellow-400'
                      } text-lg`}
                    >
                      {Array.from({ length: portfolio.stars }).map(
                        (_, starIdx) => (
                          <IoIosStar key={starIdx} />
                        )
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookADemo;
