import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        // console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      // console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
    // console.log('PUT request', content);
    const jatedb = await openDB('jate', 1);
    const tx = jatedb.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    const request = store.put({id: 1, content: content});
    const result = await request;
    // console.log('🚀 - data saved to the database', result);
    return result;
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
    // console.log('GET request');
    const jatedb = await openDB('jate', 1);
    const tx = jatedb.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    const request = store.get(1);
    const result = await request;
    // if(result) {
    //   console.log('Data retreived');
    // } else {
    //   console.log('Data not found.')
    // }
    // console.log(result);
    return result?.value;
};

initdb();
