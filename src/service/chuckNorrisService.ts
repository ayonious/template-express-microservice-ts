import chuckClient from '../client/chuckClient';

const getChuckSentence = async (name: string): Promise<string> => {
  const chuckSentence = await chuckClient();
  return `Hi ${name}, ${chuckSentence}`;
};

export default getChuckSentence;
