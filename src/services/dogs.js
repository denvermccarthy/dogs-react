import { checkError, client } from './client';

export const fetchDogs = async () => {
  const resp = await client.from('dogs').select();
  return checkError(resp);
};
