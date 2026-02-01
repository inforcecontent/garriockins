import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Insurance Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive protection solutions tailored to your unique needs. We simplify the complex world of insurance.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {SERVICES.map((service, index) => (
          <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
            
            {/* Visual */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-brand-blue/10 transition-colors z-10"></div>
                <img 
                  src={`https://picsum.photos/800/600?random=${index + 10}`} 
                  alt={service.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <span className={`${service.color} px-4 py-2 rounded-full text-sm font-bold shadow-md`}>
                    {service.title}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center mb-4">
                 <div className={`p-3 rounded-lg ${service.color} mr-4`}>
                   <service.icon className="w-6 h-6" />
                 </div>
                 <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {service.description} We work with you to understand your specific risks and find a policy that offers robust protection without unnecessary costs.
              </p>

              <h3 className="font-bold text-gray-900 mb-4">What's Covered:</h3>
              <ul className="space-y-3 mb-8">
                {[1, 2, 3, 4].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Comprehensive protection feature {item} covering specific risks.</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
              >
                Get a {service.title} Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Not sure what you need?</h2>
          <p className="text-gray-600 mb-8">Our licensed brokers are here to help analyze your needs and recommend the right coverage.</p>
          <Link to="/contact" className="text-brand-blue font-bold hover:underline text-lg">Contact us for a free consultation</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;