
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SectionHeading from '../components/ui-custom/SectionHeading';
import { MapPin, Phone, Mail, Clock, ArrowRight, ArrowLeft } from 'lucide-react';

const locations = [
  {
    name: 'Torrington',
    address: '1299 East Main Street, Torrington, CT 06790',
    phone: '(860) 618-7007',
    hours: 'Mon-Fri: 7:30am-5:00pm, Sat-Sun: Closed',
  },
  {
    name: 'Thomaston',
    address: '109 East Main Street, Thomaston, CT 06787',
    phone: '(860) 283-3005',
    hours: 'Mon-Fri: 7:30am-5:30pm, Sat-Sun: Closed',
  },
  {
    name: 'Bantam',
    address: '932 Bantam Road, Bantam, CT 06750',
    phone: '(860) 567-3380',
    hours: 'Mon-Fri: 7:30am-5:30pm, Sat-Sun: Closed',
  },
  {
    name: 'Watertown',
    address: '789 Main Street, Watertown, CT 06795',
    phone: '(860) 945-6000',
    hours: 'Mon-Fri: 7:30am-5:30pm, Sat-Sun: Closed',
  },
  {
    name: 'Naugatuck',
    address: '144 Rubber Avenue, Naugatuck, CT 06770',
    phone: '(203) 729-4145',
    hours: 'Mon-Fri: 7:30am-5:30pm, Sat-Sun: Closed',
  },
  {
    name: 'Orange',
    address: '404 Boston Post Road, Orange, CT 06477',
    phone: '(203) 553-9950',
    hours: 'Mon-Fri: 7:30am-5:30pm, Sat-Sun: Closed',
  }
];

const services = [
  'Oil Change & Maintenance',
  'Brake Repair & Service',
  'Engine Diagnostics',
  'AC & Heating Service',
  'Emissions Testing',
  'Battery Service',
  'Electrical System',
  'Suspension & Steering',
  'Transmission Service',
  'Tire Service',
  'Check Engine Light',
  'Other'
];

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    vehicle: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { selectedLocation, selectedService, ...formData });
    setFormSubmitted(true);
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  return (
    <Layout>
      <section className="relative py-32 hero-gradient bg-[url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-white mb-6">Contact Us</h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg">
            Schedule a service appointment or get in touch with any questions about your vehicle.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold mb-6">Our Locations</h2>
              <div className="space-y-8">
                {locations.map((location, index) => (
                  <div key={index} className="card p-6">
                    <h3 className="text-xl font-semibold mb-3">{location.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 mr-2 mt-0.5 text-secondary" />
                        <span className="text-medium-gray">{location.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-2 text-secondary" />
                        <a href={`tel:${location.phone.replace(/\D/g,'')}`} className="text-medium-gray hover:text-primary transition-colors">
                          {location.phone}
                        </a>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 mt-0.5 text-secondary" />
                        <span className="text-medium-gray">{location.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="card">
                <div className="card-header">
                  <h2 className="text-2xl">Schedule Service</h2>
                </div>
                
                <div className="p-6">
                  {!formSubmitted ? (
                    <>
                      {/* Progress Bar */}
                      <div className="mb-8">
                        <div className="flex justify-between mb-2">
                          <span className={`text-sm ${currentStep >= 1 ? 'text-primary font-medium' : 'text-medium-gray'}`}>Location</span>
                          <span className={`text-sm ${currentStep >= 2 ? 'text-primary font-medium' : 'text-medium-gray'}`}>Service</span>
                          <span className={`text-sm ${currentStep >= 3 ? 'text-primary font-medium' : 'text-medium-gray'}`}>Details</span>
                          <span className={`text-sm ${currentStep >= 4 ? 'text-primary font-medium' : 'text-medium-gray'}`}>Confirm</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-primary h-2.5 rounded-full transition-all duration-300" 
                            style={{ width: `${(currentStep / 4) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit}>
                        {/* Step 1: Location Selection */}
                        {currentStep === 1 && (
                          <div className="animate-fade-in">
                            <h3 className="text-xl font-semibold mb-4">Select a Location</h3>
                            <p className="text-medium-gray mb-6">Choose the Quiet Zone CT location that's most convenient for you.</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                              {locations.map((location, index) => (
                                <div 
                                  key={index}
                                  className={`p-4 rounded border cursor-pointer transition-all duration-200 ${
                                    selectedLocation === location.name 
                                      ? 'border-primary bg-primary/5' 
                                      : 'border-gray-200 hover:border-primary/30'
                                  }`}
                                  onClick={() => setSelectedLocation(location.name)}
                                >
                                  <h4 className="font-medium mb-1">{location.name}</h4>
                                  <p className="text-sm text-medium-gray">{location.address}</p>
                                </div>
                              ))}
                            </div>
                            
                            <div className="flex justify-end">
                              <button 
                                type="button" 
                                className="btn-primary"
                                disabled={!selectedLocation}
                                onClick={nextStep}
                              >
                                Next Step <ArrowRight className="ml-2 h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        )}
                        
                        {/* Step 2: Service Selection */}
                        {currentStep === 2 && (
                          <div className="animate-fade-in">
                            <h3 className="text-xl font-semibold mb-4">Select a Service</h3>
                            <p className="text-medium-gray mb-6">What type of service does your vehicle need?</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                              {services.map((service, index) => (
                                <div 
                                  key={index}
                                  className={`p-4 rounded border cursor-pointer transition-all duration-200 ${
                                    selectedService === service 
                                      ? 'border-primary bg-primary/5' 
                                      : 'border-gray-200 hover:border-primary/30'
                                  }`}
                                  onClick={() => setSelectedService(service)}
                                >
                                  <h4 className="font-medium">{service}</h4>
                                </div>
                              ))}
                            </div>
                            
                            <div className="flex justify-between">
                              <button 
                                type="button" 
                                className="btn-primary"
                                onClick={prevStep}
                              >
                                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                              </button>
                              <button 
                                type="button" 
                                className="btn-primary"
                                disabled={!selectedService}
                                onClick={nextStep}
                              >
                                Next Step <ArrowRight className="ml-2 h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        )}
                        
                        {/* Step 3: Personal Details */}
                        {currentStep === 3 && (
                          <div className="animate-fade-in">
                            <h3 className="text-xl font-semibold mb-4">Your Details</h3>
                            <p className="text-medium-gray mb-6">Please provide your contact information and vehicle details.</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                              <div>
                                <label htmlFor="name" className="block mb-2 font-medium">Full Name</label>
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleInputChange}
                                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                  required
                                />
                              </div>
                              <div>
                                <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                  required
                                />
                              </div>
                              <div>
                                <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
                                <input
                                  type="tel"
                                  id="phone"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                  required
                                />
                              </div>
                              <div>
                                <label htmlFor="vehicle" className="block mb-2 font-medium">Vehicle (Make, Model, Year)</label>
                                <input
                                  type="text"
                                  id="vehicle"
                                  name="vehicle"
                                  value={formData.vehicle}
                                  onChange={handleInputChange}
                                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                  required
                                />
                              </div>
                              <div>
                                <label htmlFor="date" className="block mb-2 font-medium">Preferred Date</label>
                                <input
                                  type="date"
                                  id="date"
                                  name="date"
                                  value={formData.date}
                                  onChange={handleInputChange}
                                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                  required
                                />
                              </div>
                              <div>
                                <label htmlFor="time" className="block mb-2 font-medium">Preferred Time</label>
                                <select
                                  id="time"
                                  name="time"
                                  value={formData.time}
                                  onChange={handleInputChange}
                                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                  required
                                >
                                  <option value="">Select a time</option>
                                  <option value="Morning (7:30am - 10:00am)">Morning (7:30am - 10:00am)</option>
                                  <option value="Mid Day (10:00am - 1:00pm)">Mid Day (10:00am - 1:00pm)</option>
                                  <option value="Afternoon (1:00pm - 3:00pm)">Afternoon (1:00pm - 3:00pm)</option>
                                  <option value="Late Afternoon (3:00pm - 5:00pm)">Late Afternoon (3:00pm - 5:00pm)</option>
                                </select>
                              </div>
                            </div>
                            
                            <div className="mb-6">
                              <label htmlFor="message" className="block mb-2 font-medium">Additional Information</label>
                              <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={4}
                                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                              ></textarea>
                            </div>
                            
                            <div className="flex justify-between">
                              <button 
                                type="button" 
                                className="btn-primary"
                                onClick={prevStep}
                              >
                                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                              </button>
                              <button 
                                type="button" 
                                className="btn-primary"
                                onClick={nextStep}
                                disabled={!formData.name || !formData.email || !formData.phone || !formData.vehicle || !formData.date || !formData.time}
                              >
                                Review & Submit <ArrowRight className="ml-2 h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        )}
                        
                        {/* Step 4: Review & Submit */}
                        {currentStep === 4 && (
                          <div className="animate-fade-in">
                            <h3 className="text-xl font-semibold mb-4">Review Your Information</h3>
                            <p className="text-medium-gray mb-6">Please review the information below before submitting your appointment request.</p>
                            
                            <div className="bg-light-background p-6 rounded mb-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                                <div>
                                  <p className="font-medium text-sm text-medium-gray">Location</p>
                                  <p className="font-medium">{selectedLocation}</p>
                                </div>
                                <div>
                                  <p className="font-medium text-sm text-medium-gray">Service</p>
                                  <p className="font-medium">{selectedService}</p>
                                </div>
                                <div>
                                  <p className="font-medium text-sm text-medium-gray">Name</p>
                                  <p className="font-medium">{formData.name}</p>
                                </div>
                                <div>
                                  <p className="font-medium text-sm text-medium-gray">Email</p>
                                  <p className="font-medium">{formData.email}</p>
                                </div>
                                <div>
                                  <p className="font-medium text-sm text-medium-gray">Phone</p>
                                  <p className="font-medium">{formData.phone}</p>
                                </div>
                                <div>
                                  <p className="font-medium text-sm text-medium-gray">Vehicle</p>
                                  <p className="font-medium">{formData.vehicle}</p>
                                </div>
                                <div>
                                  <p className="font-medium text-sm text-medium-gray">Date</p>
                                  <p className="font-medium">{formData.date}</p>
                                </div>
                                <div>
                                  <p className="font-medium text-sm text-medium-gray">Time</p>
                                  <p className="font-medium">{formData.time}</p>
                                </div>
                              </div>
                              
                              {formData.message && (
                                <div className="mt-4">
                                  <p className="font-medium text-sm text-medium-gray">Additional Information</p>
                                  <p className="font-medium">{formData.message}</p>
                                </div>
                              )}
                            </div>
                            
                            <div className="flex justify-between">
                              <button 
                                type="button" 
                                className="btn-primary"
                                onClick={prevStep}
                              >
                                <ArrowLeft className="mr-2 h-4 w-4" /> Edit Information
                              </button>
                              <button 
                                type="submit" 
                                className="btn-secondary"
                              >
                                Submit Request
                              </button>
                            </div>
                          </div>
                        )}
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-8 animate-fade-in">
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">Appointment Request Submitted!</h3>
                      <p className="text-medium-gray mb-6">
                        Thank you for choosing Quiet Zone CT. We've received your appointment request and 
                        will contact you shortly to confirm. A confirmation email has been sent to {formData.email}.
                      </p>
                      <button
                        type="button"
                        className="btn-primary"
                        onClick={() => {
                          setFormSubmitted(false);
                          setCurrentStep(1);
                          setSelectedLocation('');
                          setSelectedService('');
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            date: '',
                            time: '',
                            vehicle: '',
                            message: ''
                          });
                        }}
                      >
                        Schedule Another Appointment
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
