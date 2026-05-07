"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";

export default function FAQSection() {
  return (
    <section className="py-24 bg-card/20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Câu hỏi thường gặp</h2>
        </div>

        {/* base-ui Accordion: single open is default, defaultValue controls initially open */}
        <Accordion className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={i}
              className="bg-card/40 border border-white/10 rounded-2xl px-6 data-[open]:bg-card/60 transition-colors"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline py-6 text-base md:text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
