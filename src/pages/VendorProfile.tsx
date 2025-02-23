import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, Mail, Phone, Globe, Instagram, Facebook, Calendar } from 'lucide-react';

// This would typically come from an API
const vendorDetails = {
  id: 1,
  name: "Floral Dreams",
  category: "Florists",
  location: "New York, NY",
  description: "Creating stunning floral arrangements for weddings and special events. We specialize in romantic and elegant designs that will make your special day unforgettable.",
  rating: 4.9,
  reviews: 128,
  contact: {
    email: "hello@floraldreams.com",
    phone: "(555) 123-4567",
    website: "www.floraldreams.com",
    instagram: "@floraldreams",
    facebook: "floraldreamsny"
  },
  gallery: [
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800"
  ],
  services: [
    "Wedding Bouquets",
    "Ceremony Decorations",
    "Reception Centerpieces",
    "Arch & Altar Designs",
    "Boutonnières & Corsages",
    "Event Styling"
  ],
  recentEvents: [
    {
      title: "Sarah & James Wedding",
      date: "June 15, 2023",
      image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Emily & Michael Wedding",
      date: "July 22, 2023",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800"
    }
  ]
};

const VendorProfile = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img
                src={vendorDetails.gallery[0]}
                alt={vendorDetails.name}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-serif">{vendorDetails.name}</h1>
                <button className="bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600 transition-colors">
                  Contact Now
                </button>
              </div>
              <p className="text-rose-500 text-lg mb-2">{vendorDetails.category}</p>
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                {vendorDetails.location}
              </div>
              <div className="flex items-center mb-6">
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <span className="font-medium text-lg">{vendorDetails.rating}</span>
                <span className="text-gray-500 ml-2">({vendorDetails.reviews} reviews)</span>
              </div>
              <p className="text-gray-600">{vendorDetails.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white mt-8">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif mb-6">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-rose-500 mr-3" />
              <span>{vendorDetails.contact.email}</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-rose-500 mr-3" />
              <span>{vendorDetails.contact.phone}</span>
            </div>
            <div className="flex items-center">
              <Globe className="h-5 w-5 text-rose-500 mr 3" />
              <span>{vendorDetails.contact.website}</span>
            </div>
            <div className="flex items-center">
              <Instagram className="h-5 w-5 text-rose-500 mr-3" />
              <span>{vendorDetails.contact.instagram}</span>
            </div>
            <div className="flex items-center">
              <Facebook className="h-5 w-5 text-rose-500 mr-3" />
              <span>{vendorDetails.contact.facebook}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-50 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vendorDetails.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-white mt-8">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif mb-6">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {vendorDetails.gallery.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Events */}
      <div className="bg-gray-50 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif mb-6">Recent Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vendorDetails.recentEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;