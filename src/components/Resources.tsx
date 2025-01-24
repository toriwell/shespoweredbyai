import { FileDown, Link as LinkIcon } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "@/components/ui/use-toast";

export const Resources = () => {
  const handleDownload = async (pdfPath: string, fileName: string) => {
    try {
      const response = await fetch(pdfPath);
      if (!response.ok) {
        throw new Error('PDF not found');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Download failed",
        description: "Could not download the PDF. Please try again later.",
      });
    }
  };

  const getDirectDownloadUrl = (fileName: string) => {
    // Using window.location to get the base URL dynamically
    const baseUrl = window.location.origin;
    return `${baseUrl}/${fileName}`;
  };

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Resources</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-card backdrop-blur-lg rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Understanding AI and the Art of Prompting</h3>
            <p className="text-muted-foreground mb-6">
              Download our comprehensive guide to understanding AI and creating effective prompts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="default"
                onClick={() => handleDownload('/understanding-ai-prompting.pdf', 'understanding-ai-prompting.pdf')}
                className="w-full sm:w-auto"
              >
                <FileDown className="mr-2 h-4 w-4" />
                Download PDF Guide
              </Button>
            </div>
          </div>

          <div className="bg-card backdrop-blur-lg rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Understanding the generative AI options and associated costs</h3>
            <p className="text-muted-foreground mb-6">
              Explore different generative AI options and associated costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="default"
                onClick={() => handleDownload('/Types-of-generative-AI.pdf', 'Types-of-generative-AI.pdf')}
                className="w-full sm:w-auto"
              >
                <FileDown className="mr-2 h-4 w-4" />
                Download PDF Guide
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  const url = getDirectDownloadUrl('Types-of-generative-AI.pdf');
                  navigator.clipboard.writeText(url);
                  toast({
                    title: "Link copied!",
                    description: "Direct download link has been copied to your clipboard.",
                  });
                }}
                className="w-full sm:w-auto"
              >
                <LinkIcon className="mr-2 h-4 w-4" />
                Copy Direct Link
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};