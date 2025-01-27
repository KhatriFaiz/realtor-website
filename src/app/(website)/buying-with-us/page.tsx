import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import Image from "next/image";
import Link from "next/link";
import buyingWithUsImage from "@/assets/buying-with-us-hero.jpg";
import TestimonialsSection from "@/components/buyingWithUs/TestimonialsSection";

export default function BuyingWithUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
        <div className="aboslute inset-0 z-0 after:absolute after:inset-0 after:z-[1] after:bg-black after:opacity-50">
          <Image
            src={buyingWithUsImage}
            alt="Happy family in front of a home"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
        <div className="relative z-10 space-y-4 p-4">
          <h1 className="text-4xl font-bold md:text-6xl">
            Your Dream Home Awaits!
          </h1>
          <p className="text-xl md:text-2xl">
            Guiding You Every Step of the Way to Find the Perfect Home
          </p>
          <Button asChild size="lg">
            <Link href="#contact">Start Your Journey</Link>
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why Buy with Us?
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            With over 20 years of experience in the local real estate market, we
            bring unparalleled expertise and personalized service to every
            client. Our commitment to finding you the perfect home goes beyond
            just transactions – we&apos;re here to make your dream a reality.
            From our in-depth local knowledge to our proven negotiation skills,
            we offer a home buying experience that&apos;s tailored to your
            unique needs and aspirations.
          </p>
        </div>
      </section>

      {/* The Buying Process */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Step-by-Step Home Buying Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Initial Consultation",
                description:
                  "We'll discuss your needs, budget, and preferences to create a customized plan.",
              },
              {
                title: "Home Search",
                description:
                  "We provide access to exclusive listings and guide you in exploring neighborhoods.",
              },
              {
                title: "Viewings and Tours",
                description:
                  "We schedule and attend property tours to help you find the right fit.",
              },
              {
                title: "Making an Offer",
                description:
                  "We handle negotiations to secure the best deal for you.",
              },
              {
                title: "Closing the Deal",
                description:
                  "We assist with paperwork, inspections, and everything needed for a smooth closing.",
              },
            ].map((step, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p>{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Working with Us */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What You Get When You Work with Us
          </h2>
          <ul className="list-disc list-inside text-lg space-y-4 max-w-3xl mx-auto">
            <li>
              Access to off-market properties not available to the general
              public
            </li>
            <li>
              Up-to-date insights on local market trends to inform your
              decisions
            </li>
            <li>
              Personalized support through every step of the home buying process
            </li>
            <li>
              Expert negotiation skills to ensure you get the best possible
              price
            </li>
            <li>
              A network of trusted professionals including lenders, inspectors,
              and attorneys
            </li>
          </ul>
        </div>
      </section>

      <TestimonialsSection />

      {/* Tools and Resources */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Resources to Help You Buy with Confidence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Mortgage Calculator",
                description:
                  "Estimate your monthly payments and see how much you can afford.",
                link: "#",
              },
              {
                title: "Neighborhood Guides",
                description:
                  "Explore detailed information about local areas and find your perfect community.",
                link: "#",
              },
              {
                title: "Home Buying Checklist",
                description:
                  "Download our comprehensive checklist to stay organized throughout the process.",
                link: "#",
              },
            ].map((resource, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {resource.title}
                  </h3>
                  <p className="mb-4">{resource.description}</p>
                  <Button asChild variant="outline">
                    <Link href={resource.link}>Access Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What&apos;s the first step in buying a home?
              </AccordionTrigger>
              <AccordionContent>
                The first step is to schedule a consultation with us. We&apos;ll
                discuss your needs, preferences, and budget to create a
                personalized home buying plan. We also recommend getting
                pre-approved for a mortgage to strengthen your position when
                making offers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How much does it cost to work with a real estate agent?
              </AccordionTrigger>
              <AccordionContent>
                As a buyer, working with us is typically free of charge. Our
                commission is usually paid by the seller at the closing of the
                sale. This means you get our expertise and support throughout
                the entire process at no direct cost to you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How long does the home-buying process take?
              </AccordionTrigger>
              <AccordionContent>
                The timeline can vary depending on factors such as market
                conditions, your specific needs, and financing. On average, the
                process from initial search to closing can take 2-3 months. We
                work diligently to ensure the process moves as quickly and
                smoothly as possible while finding you the perfect home.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gray-100" id="contact">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <Button size="lg" className="mb-4">
            Schedule a Consultation
          </Button>
          <div className="space-y-2">
            <p>Call us: (555) 123-4567</p>
            <p>Email: info@dreamhomerealty.com</p>
            <p>Visit us: 123 Main Street, Anytown, USA 12345</p>
          </div>
        </div>
      </section>
    </div>
  );
}
