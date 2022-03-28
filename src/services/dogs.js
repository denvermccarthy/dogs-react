import { checkError, client } from './client';

export const fetchDogs = async () => {
  const resp = await client.from('dogs').select();
  return checkError(resp);
};

export const fetchDogById = async (id) => {
  const resp = await client.from('dogs').select().match({ id }).single();
  return checkError(resp);
};
