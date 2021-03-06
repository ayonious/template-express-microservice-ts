import client from 'axios';

const getChuckRandomFact = async () => {
  const res = await client.get('https://api.chucknorris.io/jokes/random');
  return res.data.value;
};

export default getChuckRandomFact;
