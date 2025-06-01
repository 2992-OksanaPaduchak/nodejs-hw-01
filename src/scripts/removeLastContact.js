import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    contacts.pop();
    await writeContacts(contacts);
    console.log('File deleted successfully.');
  } catch (err) {
    console.error('Error deleting file.', err);
  }
};

removeLastContact();
