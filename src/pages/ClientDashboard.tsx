import React from 'react';
import { motion } from 'framer-motion';
import { Play, Image, Download, Share2, Heart, Clock } from 'lucide-react';

const clientData = {
  name: "Sarah & Michael Johnson",
  date: "June 15, 2023",
  location: "Sunset Beach Resort",
  media: {
    videos: [
      {
        id: 1,
        title: "Wedding Ceremony",
        thumbnail: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
        duration: "45:30"
      },
      {
        id: 2,
        title: "Reception Highlights",
        thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
        duration: "32:15"
      }
    ],
    photos: [
      {
        id: 1,
        title: "Ceremony Collection",
        thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
        count: 124
      },
      {
        id: 2,
        title: "Reception Collection",
        thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
        count: 186
      },
      {
        id: 3,
        title: "Family Portraits",
        thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
        count: 45
      }
    ]
  }
};

const ClientDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-serif text-gray-900">{clientData.name}</h1>
              <div className="flex items-center mt-2 text-gray-600">
                <Clock className="h-5 w-5 mr-2" />
                <span>{clientData.date}</span>
                <span className="mx-2">•</span>
                <span>{clientData.location}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600 transition-colors"
              >
                Share Album
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Videos Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif mb-6">Your Wedding Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientData.media.videos.map((video) => (
              <motion.div
                key={video.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                  >
                    <Play className="text-white h-16 w-16" />
                  </motion.div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-gray-600 hover:text-rose-500">
                      <Download className="h-5 w-5 mr-1" />
                      Download
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-rose-500">
                      <Share2 className="h-5 w-5 mr-1" />
                      Share
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-rose-500">
                      <Heart className="h-5 w-5 mr-1" />
                      Favorite
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Photos Section */}
        <div>
          <h2 className="text-2xl font-serif mb-6">Your Photo Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientData.media.photos.map((collection) => (
              <motion.div
                key={collection.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={collection.thumbnail}
                    alt={collection.title}
                    className="w-full h-48 object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                  >
                    <Image className="text-white h-16 w-16" />
                  </motion.div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {collection.count} photos
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{collection.title}</h3>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-gray-600 hover:text-rose-500">
                      <Download className="h-5 w-5 mr-1" />
                      Download All
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-rose-500">
                      <Share2 className="h-5 w-5 mr-1" />
                      Share
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;