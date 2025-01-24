import Image from "next/image";
import davidWhiteImage from "@/assets/david_white.jpg";
import { client } from "@/sanity/lib/client";
import { getPropertiesQuery } from "@/sanity/queries";
import { GetPropertiesQueryResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  const properties =
    await client.fetch<GetPropertiesQueryResult>(getPropertiesQuery);

  return (
    <main>
      <section>
        <div className="max-w-screen-lg mx-auto p-4 grid gap-10 md:grid-cols-2">
          <div className="flex justify-center flex-col space-y-4">
            <h1 className="text-4xl font-bold">
              Welcome to the Realtor Website
            </h1>
            <p className="text-lg">
              This is a website for realtors to showcase their properties and
              services. It is built with Next.js and Tailwind CSS.
            </p>
          </div>
          <div>
            <Image src={davidWhiteImage} alt="David White" />
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="max-w-screen-lg mx-auto px-4 py-10">
          <h2 className="text-center text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">Buy</h3>
              <p className="text-lg mt-2">
                We help you find the perfect home for you and your family. We do
                the hard work so you don&apos;t have to.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">Sell</h3>
              <p className="text-lg mt-2">
                We help you sell your home for the best price. We will handle
                all the details so you can focus on your next adventure.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">Rent</h3>
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
