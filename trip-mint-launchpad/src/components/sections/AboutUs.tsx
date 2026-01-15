import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about" className="py-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Us
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Trip Mint Travel provides independent assistance for flight changes, cancellations, 
              and general travel-related queries. We help passengers understand their available options 
              and next steps.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
