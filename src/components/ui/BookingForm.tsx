'use client';

import React, { useState } from 'react';

type Service = 'hvac' | 'plumbing' | 'electrical';
type TimeSlot = 'morning' | 'afternoon' | 'evening';

interface FormData {
  service: Service;
  date: string;
  timeSlot: TimeSlot;
  name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
}

const BookingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    service: 'hvac',
    date: '',
    timeSlot: 'morning',
    name: '',
    email: '',
    phone: '',
    address: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // In a real application, this would be an API call to your backend
      // For this demo, we'll simulate a successful submission after a short delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    } catch (err) {
      setError('There was an error submitting your request. Please try again.');
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Thank You!</h3>
        <p className="mb-6 text-blue-700">Your service request has been submitted successfully. One of our representatives will contact you shortly to confirm your appointment.</p>
        <p className="text-blue-600">Reference number: {Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Service Selection */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-blue-700 mb-1">
            Service Type *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-blue-300 text-blue-700 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="hvac">HVAC Service</option>
            <option value="plumbing">Plumbing Service</option>
            <option value="electrical">Electrical Service</option>
          </select>
        </div>

        {/* Date Selection */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-blue-700 mb-1">
            Preferred Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-2 border border-blue-300 text-blue-700 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Time Slot */}
        <div>
          <label htmlFor="timeSlot" className="block text-sm font-medium text-blue-700 mb-1">
            Preferred Time *
          </label>
          <select
            id="timeSlot"
            name="timeSlot"
            value={formData.timeSlot}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-blue-300 text-blue-700 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
            <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
            <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
          </select>
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-blue-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-blue-300 text-blue-700 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-blue-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-blue-300 text-blue-700 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-blue-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-blue-300 text-blue-700 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label htmlFor="address" className="block text-sm font-medium text-blue-700 mb-1">
            Service Address *
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-blue-300 text-blue-700 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label htmlFor="description" className="block text-sm font-medium text-blue-700 mb-1">
            Description of Issue
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-blue-300 text-blue-700 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Please provide details about your service needs..."
          />
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Book Service'}
        </button>
      </div>

      <p className="text-sm text-blue-500 mt-4">
        By submitting this form, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
      </p>
    </form>
  );
};

export default BookingForm;
