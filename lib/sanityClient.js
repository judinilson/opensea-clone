import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "5evagumw",
  dataset: "production",
  apiVersion: "v1",
  token:
    "skfklc6n2yz9idsHwgktxZlbEAw3OFzvQW9plomwcy6enwVzB2eHgoJxjfMFVA5DhoKoVdOqPIGthYNrhONKlCOFtL9R4ANHl3yZi3oWTR3rJ2WNzrsz8pjR9F0v8b6HUaqUB7N6GnTyAGQb0dEqcZ8RzisdBH1kB1Cg0U12BKEB3qaczSot",
  useCdn: false,
});
