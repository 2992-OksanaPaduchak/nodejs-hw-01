import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
export const writeContacts = async (updatedContacts) => {
  const data = JSON.stringify(updatedContacts, null, 2);
  try {
    await fs.writeFile(PATH_DB, data, 'utf8');
  } catch (err) {
    console.error('File reading error', err);
  }
};
