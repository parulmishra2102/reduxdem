import { faker } from "@faker-js/faker/locale/en";
export const createRandomMovie = () => {
  return `${faker.word.adjective()} ${faker.word.noun()}`;
};
