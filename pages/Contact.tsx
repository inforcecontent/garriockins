import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import LeadGenForm from '../components/LeadGenForm';
import { PHONE_NUMBER, EMAIL_ADDRESS, ADDRESS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about your policy? Need a new quote? We're here to help. Reach out to us via phone, email, or visit our office.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue shrink-0 mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                    <a href={`tel:${PHONE_NUMBER}`} className="text-lg font-bold text-gray-900 hover:text-brand-blue">{PHONE_NUMBER}</a>
                    <p className="text-xs text-gray-400 mt-1">Mon-Fri 8:30am - 4:30pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue shrink-0 mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <a href={`mailto:${EMAIL_ADDRESS}`} className="text-lg font-bold text-gray-900 hover:text-brand-blue break-all">{EMAIL_ADDRESS}</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue shrink-0 mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Office</p>
                    <p className="text-lg font-bold text-gray-900">{ADDRESS}</p>
                    <p className="text-sm text-gray-500 mt-1">Free parking available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-dark text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-brand-accent mr-3" />
                <h3 className="text-xl font-bold">Office Hours</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex justify-between"><span>Monday - Friday</span> <span>8:30 AM - 4:30 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span>Closed</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <LeadGenForm type="full" title="Send us a Message" subtitle="Fill out the form below for quotes, claims, or general inquiries." className="h-full" />
          </div>

        </div>

        {/* Map Placeholder */}
        <div className="mt-16 bg-gray-200 rounded-xl h-96 w-full flex items-center justify-center overflow-hidden relative shadow-inner">
           <img 
            src="https://picsum.photos/1200/400?grayscale" 
            alt="Map Location" 
            className="w-full h-full object-cover opacity-50"
           />
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-white px-6 py-3 rounded-lg shadow-lg flex items-center">
                <MapPin className="w-6 h-6 text-brand-accent mr-2" />
                <span className="font-bold text-gray-900">Find us at 396 Main St</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;