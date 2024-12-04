import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-2 bg-secondary rounded-full text-primary-foreground text-sm font-medium mb-6 inline-block">
            Our Mission
          </span>
          <h2 className="text-3xl font-bold mb-6">Making AI Accessible</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We believe that understanding AI shouldn't be limited to tech experts. Through engaging discussions, practical examples, and real-world applications, we're here to help you navigate the exciting world of artificial intelligence with confidence.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {["Weekly Episodes", "Example Insights", "Practical Tips"].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-card backdrop-blur-lg rounded-xl p-6 shadow-lg"
              >
                <h3 className="font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600 text-sm">
                  Join us every week for new insights into the world of AI.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};