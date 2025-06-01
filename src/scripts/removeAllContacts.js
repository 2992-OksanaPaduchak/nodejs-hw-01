import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('File deleted successfully.');
  } catch (err) {
    console.error('Error deleting file.', err);
  }
};

removeAllContacts();
