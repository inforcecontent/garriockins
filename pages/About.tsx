import React from 'react';
import { ShieldCheck, Award, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-brand-blue py-20 md:py-32">
        <div className="absolute inset-0 bg-brand-dark/50 mix-blend-multiply"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Built on trust, integrity, and a commitment to our community. Protecting Manitoba families and businesses for over 70 years.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg mx-auto text-gray-600">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">A Legacy of Trust</h2>
          <p className="mb-6">
            Garriock Insurance was founded with a simple mission: to provide honest, reliable insurance advice to our neighbours. Over the decades, we have grown from a small local office to one of the most respected independent brokerages in the region.
          </p>
          <p className="mb-10">
            Despite our growth, our core values remain unchanged. We believe that insurance is a people business. We take the time to listen, to understand your life or your business, and to be there when you need us most—especially during a claim.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <ShieldCheck className="w-10 h-10 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
              <p>To provide peace of mind through comprehensive insurance solutions delivered with personalized care and integrity.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <Heart className="w-10 h-10 text-brand-accent mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Values</h3>
              <p>Community first. Honest advice. Advocacy for our clients. Continuous professional development.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Work With an Independent Broker?</h2>
          <p className="mb-6">
            Unlike direct writers or banks who sell only their own products, we have access to a wide network of Canada's leading insurance companies. This allows us to shop the market on your behalf, comparing coverage and rates to find the perfect fit for your budget.
          </p>
          <p>
            We work for <strong>you</strong>, not the insurance company.
          </p>
        </div>
      </div>

      {/* Team/Stats Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-accent mb-2">1950</div>
              <div className="text-gray-400">Established</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-accent mb-2">5,000+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-accent mb-2">15+</div>
              <div className="text-gray-400">Insurance Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-accent mb-2">100%</div>
              <div className="text-gray-400">Locally Owned</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;