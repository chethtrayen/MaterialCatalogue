import db from './dbClient';

const _createMaterialTable = () => {
  db.serialize(() => {
    db.run(
      `CREATE TABLE materials (
            id INTEGER PRIMARY KEY,
            name TEXT NOT_NULL,
            cost REAL NOT_NULL,
            volume INTEGER NOT_NULL,
            color TEXT NOT_NULL,
            deliveryDate TEXT NOT_NULL
        )`
    );
  });
};

export const createTables = () => {
  console.log('Creating tables....');
  _createMaterialTable();
  console.log('Finish creating tables');
};
