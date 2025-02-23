import React from 'react';
import { Play, Clock, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const featuredWeddings = [
  {
    id: 1,
    title: "Emma & James - Rustic Elegance",
    thumbnail: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
    views: "2.5K",
    date: "3 days ago",
    duration: "25:16"
  },
  {
    id: 2,
    title: "Sarah & Michael - Beach Paradise",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    views: "4.2K",
    date: "1 week ago",
    duration: "32:45"
  },
  {
    id: 3,
    title: "Victoria & David - Garden Romance",
    thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
    views: "3.8K",
    date: "2 weeks ago",
    duration: "28:30"
  }
];

const trendingVendors = [
  {
    id: 1,
    name: "Floral Dreams",
    category: "Florist",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviews: 128
  },
  {
    id: 2,
    name: "Sweet Delights",
    category: "Bakery",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviews: 156
  },
  {
    id: 3,
    name: "Elegant Events",
    category: "Event Planning",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviews: 98
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[80vh] overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2000"
            alt="Wedding"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-6">Capture Your Perfect Moment</h1>
            <p className="text-xl mb-8">Discover the most talented wedding vendors and breathtaking wedding films all in one place.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/vendors"
                className="bg-rose-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-rose-600 transition-colors"
              >
                Find Vendors
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Featured Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif">Featured Weddings</h2>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/videos" className="text-rose-500 hover:text-rose-600 font-medium">
                View All
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWeddings.map((wedding, index) => (
            <AnimatedSection key={wedding.id} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group transform transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={wedding.thumbnail}
                    alt={wedding.title}
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
                    {wedding.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{wedding.title}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{wedding.date}</span>
                    <span className="mx-2">•</span>
                    <span>{wedding.views} views</span>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Trending Vendors Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-rose-500 mr-3" />
                <h2 className="text-3xl font-serif">Trending Vendors</h2>
              </div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/vendors" className="text-rose-500 hover:text-rose-600 font-medium">
                  View All
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingVendors.map((vendor, index) => (
              <AnimatedSection key={vendor.id} delay={index * 0.2}>
                <Link to={`/vendor/${vendor.id}`}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden group transform transition-all duration-300"
                  >
                    <div className="relative h-64">
                      <img
                        src={vendor.image}
                        alt={vendor.name}
                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{vendor.name}</h3>
                      <p className="text-rose-500 mb-3">{vendor.category}</p>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-1" />
                        <span className="font-medium">{vendor.rating}</span>
                        <span className="text-gray-500 ml-2">({vendor.reviews} reviews)</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;