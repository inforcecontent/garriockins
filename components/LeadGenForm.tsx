import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

interface LeadGenFormProps {
  type?: 'short' | 'full';
  title?: string;
  subtitle?: string;
  className?: string;
}

const LeadGenForm: React.FC<LeadGenFormProps> = ({ 
  type = 'full', 
  title = "Get Your Free Quote", 
  subtitle = "Fill out the form below and an advisor will contact you shortly.",
  className = ""
}) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className={`bg-white p-8 rounded-xl shadow-xl border border-green-100 text-center ${className}`}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
        <p className="text-gray-600 mb-6">Thank you for contacting Garriock Insurance. One of our advisors will be in touch with you within 24 hours.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-brand-blue font-semibold hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white p-6 md:p-8 rounded-xl shadow-xl border-t-4 border-brand-accent ${className}`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 text-sm">{subtitle}</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input 
              required
              type="text" 
              id="firstName" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all outline-none"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input 
              required
              type="text" 
              id="lastName" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all outline-none"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input 
            required
            type="email" 
            id="email" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all outline-none"
            placeholder="john@example.com"
          />
        </div>

        {type === 'full' && (
          <div>
             <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
             <input 
              type="tel" 
              id="phone" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all outline-none"
              placeholder="(555) 123-4567"
            />
          </div>
        )}

        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">I'm interested in...</label>
          <select 
            id="interest" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all outline-none bg-white"
          >
            <option>Home Insurance</option>
            <option>Auto Insurance</option>
            <option>Commercial Insurance</option>
            <option>Life Insurance</option>
            <option>Farm Insurance</option>
            <option>Other</option>
          </select>
        </div>

        {type === 'full' && (
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Details (Optional)</label>
            <textarea 
              id="message" 
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all outline-none"
              placeholder="Tell us about your needs..."
            ></textarea>
          </div>
        )}

        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="w-full bg-brand-accent hover:bg-amber-600 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed mt-2"
        >
          {status === 'submitting' ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Get My Free Quote <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
        
        <p className="text-xs text-center text-gray-500 mt-4">
          Your information is secure. We never share your data with third parties.
        </p>
      </form>
    </div>
  );
};

export default LeadGenForm;