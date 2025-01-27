import { Card, CardContent } from "../ui/Card";

const TestimonialsSection = () => {
  return (
    <section className="py-12 bg-[#285943] text-white">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="w-8/12">
          <h2 className="text-4xl font-bold mb-8 text-[#aafcb8]">
            What Our Happy Clients Are Saying
          </h2>
          <p>
            Don&apos;t just take our word for it—hear from the families and
            individuals we&apos;ve had the pleasure of helping. From first-time
            buyers to seasoned investors, our clients share their stories of how
            we made their home-buying journey seamless, stress-free, and
            rewarding.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {[
            {
              quote:
                "Working with this team made buying our first home a breeze. They were always available to answer our questions and guided us through every step.",
              author: "Sarah and Tom K.",
            },
            {
              quote:
                "Their local market knowledge is unparalleled. They found us a great property in our dream neighborhood before it even hit the market!",
              author: "Michael R.",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="bg-white text-black">
              <CardContent className="pt-6">
                <p className="italic mb-4">&quot;{testimonial.quote}&quot;</p>
                <p className="font-semibold">- {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
