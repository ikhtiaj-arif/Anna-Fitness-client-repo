import React from 'react';
import { motion } from 'framer-motion';

const Action = ({title}) => {
    return (
        <motion.button 
        whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
        className="bg-gradient-to-br from-primary w-full to-secondary px-6 py-2 hover:bg-gradient-to-l text-white font-medium text-lg rounded-full">
          {title}
        </motion.button>
    );
};

export default Action;