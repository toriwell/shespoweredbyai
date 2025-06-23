import { motion } from "framer-motion";

const episodes = [
  {
    title: "Interview with Dunni Kamson",
    description: "This episode, we talk with Dunni Kamson, a mum of three, about her ingenious uses of AI.",
    duration: "5 min",
    date: "Latest Episode",
    url: "https://open.spotify.com/episode/5eAV3qMTfU2Xdk2ErfoT7w"
  },
  {
    title: "Introduction",
    description: "This is a quick introduction to tell you what the podcast is all about",
    duration: "3 min",
    date: "Previous Episode",
    url: "https://open.spotify.com/episode/5Zj6RQS6fgjrWSSEy9j9Wg?si=8af376987c2e4efb"
  },
  {
    title: "Generative AI and Prompting",
    description: "A quick and easy guide to understanding generative AI and how to use prompts effectively",
    duration: "5 min",
    date: "Featured Episode",
    url: "https://open.spotify.com/episode/7oqRjNC3NYyrYSysF8dvNx?si=68f6973110dd4c35"
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
                <a 
                  href={episode.url || "https://open.spotify.com/show/0GPwtr1mOLc7ODIf94C3ab?si=d397433c54a3480c"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline font-medium"
                >
                  Listen Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
