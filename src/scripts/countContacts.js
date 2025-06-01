import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(contacts.length);
  } catch (err) {
    console.error('Contact count error', err);
  }
};

await countContacts();
