import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const EventCard = ({ event }) => {
  const { title, description, date, time, venue, category, image, registrationLink } = event;

  return (
    <motion.div 
      className="card h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-0 right-0 bg-coral text-white px-3 py-1 text-sm font-medium">
          {category}
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-deep-blue mb-2">{title}</h3>
        
        <div className="mb-4 text-sm text-gray-600 space-y-2">
          <div className="flex items-center">
            <FaCalendarAlt className="text-ocean-blue mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <FaClock className="text-ocean-blue mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-ocean-blue mr-2" />
            <span>{venue}</span>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4 flex-grow">{description}</p>
        
        <a 
          href={registrationLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary flex items-center justify-center mt-auto"
        >
          Register Now <FaExternalLinkAlt className="ml-2" size={14} />
        </a>
      </div>
    </motion.div>
  );
};

export default EventCard;