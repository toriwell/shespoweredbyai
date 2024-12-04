import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <img 
          src="/lovable-uploads/aecc90dd-b68b-48ac-8899-c40cc2fdeedc.png" 
          alt="She's Powered by AI Logo" 
          className="w-48 h-48 mx-auto mb-8"
        />
        <span className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium mb-6 inline-block rounded-full">
          Welcome to the Future of AI
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-primary">
          She's Powered by AI
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Demystifying generative AI and making it accessible for everyone. Join us on a journey to understand and harness the power of artificial intelligence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Listen Now
          </motion.button>
          <motion.a
            href="mailto:shespoweredbyai@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Us
          </motion.a>
        </div>
      </motion.div>
      <div className="absolute -z-10 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur-3xl" />
      </div>
    </section>
  );
};