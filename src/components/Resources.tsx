import { FileDown } from "lucide-react";
import { Button } from "./ui/button";

export const Resources = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Resources</h2>
        <div className="max-w-2xl mx-auto bg-card backdrop-blur-lg rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Understanding AI and the Art of Prompting</h3>
          <p className="text-muted-foreground mb-6">
            Download our comprehensive guide to understanding AI and creating effective prompts.
          </p>
          <Button 
            variant="default"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/understanding-ai-prompting.pdf.pdf';
              link.download = 'understanding-ai-prompting.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="w-full sm:w-auto"
          >
            <FileDown className="mr-2 h-4 w-4" />
            Download PDF Guide
          </Button>
        </div>
      </div>
    </section>
  );
};