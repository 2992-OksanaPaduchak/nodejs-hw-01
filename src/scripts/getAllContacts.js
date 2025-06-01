import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (err) {
    console.error('Contact read error', err);
    return [];
  }
};

console.log(await getAllContacts());
