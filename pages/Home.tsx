import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Users, Award, Check } from 'lucide-react';
import LeadGenForm from '../components/LeadGenForm';
import { SERVICES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-blue overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-[800px] h-[800px] bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-brand-accent opacity-10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-800/50 border border-blue-700 text-blue-100 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Serving Manitoba Since 1950
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Insurance Made <span className="text-brand-accent">Simple</span> & Secure.
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We are your trusted local brokers, providing personalized coverage for your home, business, and life. Get the protection you deserve at a price you can afford.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-amber-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/services" 
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm text-white font-semibold rounded-lg transition-all text-center"
                >
                  View Services
                </Link>
              </div>

              <div className="mt-10 flex items-center justify-center lg:justify-start space-x-8 text-blue-200 text-sm font-medium">
                <div className="flex items-center"><Check className="w-5 h-5 text-brand-accent mr-2" /> Local Support</div>
                <div className="flex items-center"><Check className="w-5 h-5 text-brand-accent mr-2" /> Expert Advice</div>
                <div className="flex items-center"><Check className="w-5 h-5 text-brand-accent mr-2" /> Best Rates</div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="relative rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://picsum.photos/600/700?random=1" 
                  alt="Happy family protected by insurance" 
                  className="rounded-lg shadow-2xl object-cover h-[600px] w-full"
                />
                {/* Floating Card */}
                <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-xl max-w-xs animate-bounce-slow">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 space-x-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <span className="text-gray-500 text-xs ml-2">Google Reviews</span>
                  </div>
                  <p className="text-gray-800 text-sm font-medium italic">"The team at Garriock went above and beyond to find me the best rate!"</p>
                  <p className="text-gray-400 text-xs mt-2">- Jennifer M., Winnipeg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-blue font-bold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Coverage Solutions</h3>
            <p className="text-gray-600 text-lg">Whether you're protecting your first home, your growing business, or your family's future, we have the right policy for you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 border border-gray-100 group">
                <div className={`w-14 h-14 rounded-lg ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-brand-blue font-semibold hover:text-brand-accent transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Conversion Split Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-brand-blue">Garriock Insurance?</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Insurance isn't just about policies; it's about people. As an independent broker, we work for you, not the insurance companies. We shop the market to find you the best coverage at the best rates.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-brand-blue">
                      <Shield className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Independent Advice</h4>
                    <p className="text-gray-600 mt-1">Unbiased recommendations tailored to your unique situation.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600">
                      <Users className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Personalized Service</h4>
                    <p className="text-gray-600 mt-1">Direct access to experienced brokers who know you by name.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600">
                      <Award className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Claims Advocacy</h4>
                    <p className="text-gray-600 mt-1">We stand by your side when you need us most, guiding you through claims.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Lead Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-brand-blue transform rotate-3 rounded-xl opacity-10"></div>
              <LeadGenForm className="relative z-10" title="Request a Free Review" subtitle="Find out if you're overpaying for insurance. No obligation." />
            </div>

          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <img src="https://picsum.photos/1920/1080?random=2" alt="Background office" className="w-full h-full object-cover grayscale" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trusted by Your Neighbours</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We're proud to have served thousands of families and businesses in our community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
                <div className="flex text-brand-accent mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-200 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges / Logos (Simulated) */}
          <div className="mt-20 border-t border-white/10 pt-10">
            <p className="text-center text-gray-500 text-sm mb-6 uppercase tracking-widest">We partner with Canada's top insurers</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
               {/* Placeholders for Insurance Company Logos */}
               <div className="h-8 w-24 bg-white/50 rounded animate-pulse"></div>
               <div className="h-8 w-24 bg-white/50 rounded animate-pulse"></div>
               <div className="h-8 w-24 bg-white/50 rounded animate-pulse"></div>
               <div className="h-8 w-24 bg-white/50 rounded animate-pulse"></div>
               <div className="h-8 w-24 bg-white/50 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to secure your future?</h2>
          <p className="text-white/90 text-xl mb-8">
            Speak with one of our licensed brokers today. No call centers, just real local experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-brand-accent font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all w-full sm:w-auto"
            >
              Get a Quote Now
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-brand-dark/20 text-white font-bold rounded-lg hover:bg-brand-dark/30 transition-all border-2 border-white/30 w-full sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;