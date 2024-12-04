import { motion } from "framer-motion";

const episodes = [
  {
    title: "Understanding ChatGPT",
    description: "Dive deep into how ChatGPT works and its practical applications.",
    duration: "45 min",
    date: "Latest Episode",
  },
  {
    title: "AI in Everyday Life",
    description: "Discover how AI is already making your life easier.",
    duration: "38 min",
    date: "Previous Episode",
  },
  {
    title: "The Future of Work",
    description: "How AI is transforming the workplace and what it means for you.",
    duration: "42 min",
    date: "Featured Episode",
  },
];

export const Episodes = () => {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Latest Episodes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {episodes.map((episode, index) => (
            <motion.div
              key={episode.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-card backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-sm font-medium text-secondary">
                {episode.date}
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-3 text-primary">{episode.title}</h3>
              <p className="text-gray-600 mb-4">{episode.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{episode.duration}</span>
                <button className="text-secondary hover:underline font-medium">
                  Listen Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};