import { motion } from "framer-motion";

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
          <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-4">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSecjWdAio9iHvlpFjnqQYEiYnNO1THEG7S0co8sv7BFQrh8Ag/viewform?embedded=true" 
              width="100%" 
              height="500px" 
              className="border-0 mx-auto"
              title="Newsletter Subscription Form"
            >
              Loading...
            </iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};