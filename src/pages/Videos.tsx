import React, { useState } from 'react';
import { Play, Filter, Clock, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const categories = ["All", "Traditional", "Modern", "Destination", "Rustic", "Luxury"];

const videos = [
  {
    id: 1,
    title: "Sarah & James - A Rustic Romance",
    category: "Rustic",
    date: "June 2023",
    thumbnail: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
    duration: "25:16",
    views: "2.5K",
    likes: 156
  },
  {
    id: 2,
    title: "Emily & Michael - Urban Love Story",
    category: "Modern",
    date: "August 2023",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    duration: "32:45",
    views: "4.2K",
    likes: 289
  },
  {
    id: 3,
    title: "Jessica & David - Beach Paradise",
    category: "Destination",
    date: "September 2023",
    thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
    duration: "28:30",
    views: "3.8K",
    likes: 245
  },
  {
    id: 4,
    title: "Anna & Robert - Garden Dreams",
    category: "Traditional",
    date: "October 2023",
    thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
    duration: "35:20",
    views: "5.1K",
    likes: 312
  },
  {
    id: 5,
    title: "Lauren & Thomas - Winter Wonderland",
    category: "Luxury",
    date: "December 2023",
    thumbnail: "https://images.unsplash.com/photo-1517722014278-c256a91a6fba?auto=format&fit=crop&q=80&w=800",
    duration: "40:15",
    views: "6.3K",
    likes: 428
  },
  {
    id: 6,
    title: "Rachel & John - Vineyard Romance",
    category: "Traditional",
    date: "July 2023",
    thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
    duration: "29:45",
    views: "3.2K",
    likes: 198
  }
];

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("recent");

  const filteredVideos = videos.filter(
    video => selectedCategory === "All" || video.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[40vh] overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000"
            alt="Wedding Videos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Wedding Films</h1>
            <p className="text-xl opacity-90">Discover beautiful wedding stories captured on film</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Filters */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-lg border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedCategory === category
                        ? "bg-rose-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="liked">Most Liked</option>
            </select>
          </div>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <AnimatedSection key={video.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group transform transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
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
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-rose-500">{video.category}</span>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center text-gray-500 cursor-pointer"
                      >
                        <Heart className="h-5 w-5 mr-1" />
                        <span>{video.likes}</span>
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{video.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{video.date}</span>
                      <span className="mx-2">•</span>
                      <span>{video.views} views</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Videos;