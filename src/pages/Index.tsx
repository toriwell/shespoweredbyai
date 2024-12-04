import { Hero } from "../components/Hero";
import { Episodes } from "../components/Episodes";
import { Newsletter } from "../components/Newsletter";
import { About } from "../components/About";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Episodes />
      <About />
      <Newsletter />
    </main>
  );
};

export default Index;