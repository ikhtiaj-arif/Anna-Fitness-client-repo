import React from 'react';
import { motion } from 'framer-motion';

const ActionOutline = ({title}) => {
    return (
        <motion.button
        whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
        className="bg-transparent border-2 border-primary text-gradient-to-br w-full px-6 py-2 hover:bg-gradient-to-l from-primary to-blue-500 hover:text-white font-medium  rounded-full tra"> {title}
      </motion.button>
    );
};

export default ActionOutline;