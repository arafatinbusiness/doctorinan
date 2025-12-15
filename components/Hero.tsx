
import React from 'react';
import PhoneIcon from './icons/PhoneIcon';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-cyan-600 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white text-center md:text-left font-sans">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-lg">
              Get Online Medicine Doctor Consultation Dhaka
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white opacity-95 max-w-lg mx-auto md:mx-0">
              From Dhaka, Cumilla or anywhere in Bangladesh, get urgent online medical advice 
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="https://wa.me/8801628617785"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:from-cyan-500 hover:to-blue-600"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call For Urgent Advice
              </a>
            </div>
          </div>
          <div className="relative h-full min-h-[200px] md:min-h-[400px]">
            <div className="hidden md:block absolute -bottom-16 -right-10 bg-blue-500 w-80 h-80 rounded-full opacity-30 animate-pulse"></div>
            <div className="hidden md:block absolute top-0 -left-10 bg-blue-500 w-60 h-60 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="relative z-10 h-full flex flex-col md:flex-row items-center md:items-end justify-center md:justify-start overflow-visible md:max-w-fit">
              <img 
                src="/assets/doctorinanprofile.png"
                alt="Smiling Doctor"
                className="w-full md:w-auto h-auto max-h-[400px] md:max-h-[360px] object-contain object-center md:object-left drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 hover:rotate-1"
                style={{ filter: 'drop-shadow(0 25px 25px rgba(0, 0, 0, 0.3))' }}
              />
              <div className="md:absolute md:left-full md:ml-3 md:top-1/2 md:-translate-y-1/2 relative mt-0 md:mt-0 text-center md:text-left text-white text-base md:text-sm font-extrabold whitespace-nowrap rounded-full px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-2xl hover:shadow-3xl hover:from-blue-700 hover:to-cyan-600 transition-all overflow-visible z-30 md:max-w-none">
                Dr. Muniful Islam Inan, MBBS
              </div>
            </div>
            <div className="hidden md:block absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
