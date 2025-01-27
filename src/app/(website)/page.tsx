import { client } from "@/sanity/lib/client";
import { getPropertiesQuery } from "@/sanity/queries";
import { GetPropertiesQueryResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import heroImage1 from "@/assets/home/hero-1.jpg";
import heroImage2 from "@/assets/home/hero-2.jpg";
import heroImage3 from "@/assets/home/hero-3.jpg";
import heroImage4 from "@/assets/home/hero-4.jpg";
import heroImage5 from "@/assets/home/hero-5.jpg";
import heroImage6 from "@/assets/home/hero-6.jpg";
import heroImage7 from "@/assets/home/hero-7.jpg";

export default async function Home() {
  const properties =
    await client.fetch<GetPropertiesQueryResult>(getPropertiesQuery);

  return (
    <main>
      <section>
        <div className="container mx-auto px-4 py-20">
          <div className="h-full text-center">
            <h1 className="text-8xl font-semibold tracking-tight leading-none mb-8">
              Find Your
              <br />
              Dream Home Today
            </h1>
            <p className="text-lg">
              Connecting You with Perfect Properties and Expert Guidance Every
              Step of the Way
            </p>
          </div>
          <div className="grid gap-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-7 mt-16 items-center h-72">
            {[
              { image: heroImage2, alt: "House 2" },
              { image: heroImage1, alt: "House 1" },
              { image: heroImage4, alt: "House 4" },
              { image: heroImage7, alt: "House 7" },
              { image: heroImage3, alt: "House 3" },
              { image: heroImage5, alt: "House 5" },
              { image: heroImage6, alt: "House 6" },
            ].map((item, index) => {
              const height = index % 2 === 0 ? "h-full" : "h-4/5";
              return (
                <div
                  key={index}
                  className={["flex justify-center items-center", height].join(
                    " "
                  )}
                >
                  <div className="bg-gray-200 w-full h-full rounded-lg mt-8">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      className="rounded-lg w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="max-w-screen-lg mx-auto px-4 py-10">
          <h2 className="text-center text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">Buying with us</h3>
              <p className="text-lg mt-2">
                We help you find the perfect home for you and your family. We do
                the hard work so you don&apos;t have to.
              </p>
              <Link
                href="/buying-with-us"
                className="inline-flex h-12 items-center justify-center mt-4 px-4 rounded-lg bg-green-700 hover:bg-green-800 text-white transition"
              >
                Learn more
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">Selling with us</h3>
              <p className="text-lg mt-2">
                We help you sell your home for the best price. We will handle
                all the details so you can focus on your next adventure.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">Rent your property</h3>
              <p className="text-lg mt-2">
                We help you find the perfect rental property. We will make sure
                you find a place that feels like home.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-lg mx-auto px-4 py-10">
          <h2 className="text-center text-3xl font-bold mb-8">
            Our Properties
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {
              /* If there are no properties, show a message */
              properties.length === 0 && (
                <p className="text-center text-lg">
                  No properties available at this time.
                </p>
              )
            }
            {properties.length !== 0 &&
              properties.map((property) => (
                <div key={property._id} className="bg-white rounded-lg">
                  {property.images && property.images[0] && (
                    <Image
                      src={urlFor(property?.images[0]).url() || ""}
                      alt={property.location}
                      width={400}
                      height={300}
                      className="mb-5"
                    />
                  )}
                  <h3 className="text-xl font-semibold">{property.location}</h3>
                  <p className="mt-2 line-clamp-4">{property.description}</p>
                  <p className="text-lg mt-2">
                    <span className="font-bold">Price:</span> $
                    {property.price.toLocaleString()}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-lg mx-auto px-4 py-10">
          <h2 className="text-center text-3xl font-bold mb-8">Contact Us</h2>
          <p className="text-center text-lg">
            If you have any questions or would like to learn more about our
            services, please contact us at:
          </p>
          <p className="text-center text-lg mt-2">
            Email:
            <a href="mailto:user@example.com" className="text-blue-500">
              user@example.com
            </a>
          </p>
          <p className="text-center text-lg mt-2">
            Phone:
            <a href="tel:+1234567890" className="text-blue-500">
              +1 (234) 567-890
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
