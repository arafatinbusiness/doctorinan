import React from 'react';

const StorySection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            My Mission: To Heal Through Advice
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A personal note from Dr. Muniful Islam Inan, MBBS
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 shadow-xl">
          <blockquote className="text-black-900 text-lg md:text-xl leading-relaxed">
            <p className="mb-7 bangla-text">
              "আমাদের দেশে অনেক রোগী চিকিৎসা নিতে গিয়ে প্রবল সন্দেহে পড়ে যান। 
            </p>
            
            <ul className="mt-4 mb-6 list-disc pl-5">
              <li className="mb-4">
                <p className="bangla-text">
                  আপনি কি চান আপনার রোগের জন্য একদম সঠিক ডাক্তার দেখাতে?
                </p>
              </li>
              <li className="mb-4">
                <p className="bangla-text">
                  আপনি কি চান যতগুলো টেস্ট দরকার, শুধু ততগুলোই করতে?
                </p>
              </li>
              <li className="mb-4">
                <p className="bangla-text">
                  আপনি কি চান একগাদা ওষুধ না খেয়ে, শুধু প্রয়োজনীয় ওষুধগুলোই জানতে?
                </p>
              </li>
            </ul>
            
            <p className="bangla-text">
              তাহলে আমরা আছি আপনার পাশে।কখন, কার কাছে, কোনটা এবং কতটুকু দরকার, সব জানতে পারবেন আমাদের কাছ থেকে। <br /> শুধু একটি মেসেজ বা ফোন কলেই সমাধান।"
            </p>
          </blockquote>
          
          
        </div>

        
      </div>
    </section>
  );
};

export default StorySection;
