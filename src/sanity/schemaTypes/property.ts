import { DocumentDefinition } from "sanity";

const property: DocumentDefinition = {
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "propertyType",
      title: "Property Type",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "bedrooms",
      title: "Bedrooms",
      type: "number",
    },
    {
      name: "bathrooms",
      title: "Bathrooms",
      type: "number",
    },
    {
      name: "sqft",
      title: "Sqft",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "location",
      subtitle: "propertyType",
      media: "images.0",
    },
  },
};

export default property;
