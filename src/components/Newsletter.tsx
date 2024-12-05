import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const Newsletter = () => {
  return (
    <section className="py-20 px-4 bg-accent">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-primary">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Get the latest episodes and AI insights delivered straight to your inbox.
          </p>
          <Button
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSecjWdAio9iHvlpFjnqQYEiYnNO1THEG7S0co8sv7BFQrh8Ag/viewform', '_blank')}
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Subscribe to Newsletter
          </Button>
        </motion.div>
      </div>
    </section>
  );
};