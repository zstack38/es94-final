import React from 'react';
import type { Metadata } from 'next';
// Use relative path import instead of alias to fix module resolution issue
import BookingForm from '../../components/ui/BookingForm';

export const metadata: Metadata = {
  title: 'Book a Service | Breeze Home Solutions',
  description: 'Schedule your HVAC, plumbing, or electrical service with Breeze Home Solutions. Easy online booking available.',
  keywords: 'book service, schedule appointment, HVAC service, plumbing service, electrical service, Chicago',
};

const BookNowPage = () => {
  return (
    <>
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Your Service</h1>
          <p className="text-xl">Schedule your HVAC, plumbing, or electrical service with our easy online form</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Service Request Form</h2>
            <BookingForm />
          </div>
          
          <div className="mt-12 bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-700">What to Expect</h2>
            <ol className="space-y-4">
              <li className="flex gap-3">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-lg text-blue-800">Submit Your Request</h3>
                  <p className="text-blue-600">Fill out the form with your service needs and preferred appointment time.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-lg text-blue-800">Confirmation Call</h3>
                  <p className="text-blue-600">A team member will call you to confirm your appointment and answer any questions.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-lg text-blue-800">Service Visit</h3>
                  <p className="text-blue-600">Our professional technician will arrive at your home during the scheduled time window.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-lg text-blue-800">Follow-Up</h3>
                  <p className="text-blue-600">We'll check in to ensure your complete satisfaction with our service.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookNowPage;
