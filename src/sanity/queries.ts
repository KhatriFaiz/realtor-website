import { defineQuery } from "next-sanity";

export const getPropertiesQuery = defineQuery(`*[_type == "property"]`);
