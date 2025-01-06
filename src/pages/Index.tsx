import { Hero } from "../components/Hero";
import { Episodes } from "../components/Episodes";
import { Newsletter } from "../components/Newsletter";
import { About } from "../components/About";
import { Resources } from "../components/Resources";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Episodes />
      <Resources />
      <About />
      <Newsletter />
    </main>
  );
};

export default Index;