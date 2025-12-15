import React from 'react';

const TrustSection: React.FC = () => {
  const images = [
    { src: '/assets/inangroup.jpeg', alt: 'All senior experts', title: 'All senior experts' },
    { src: '/assets/inangroup2.jpeg', alt: 'Eastern Medical College Family', title: 'Eastern Medical College Family' },
    { src: '/assets/inangroup3.jpeg', alt: 'With my Senior', title: 'With my Senior' },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Part of the Inan Group Family
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            These photos show our team collaborating with the wider Inan Group—a trusted network of healthcare professionals across Bangladesh.
            We stand together to bring you reliable, compassionate medical advice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-6">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-contain rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="px-6 pb-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {img.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {idx === 0 ? 'Meeting with senior medical experts.' : 
                   idx === 1 ? 'Celebrating with Eastern Medical College family.' : 
                   'A moment with my senior mentor.'}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full">
            <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-blue-800 font-medium">
              Trusted by thousands of patients across Bangladesh.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
