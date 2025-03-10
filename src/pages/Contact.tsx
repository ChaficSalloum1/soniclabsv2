
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          Coming soon: Get in touch with our team to discuss your project.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
