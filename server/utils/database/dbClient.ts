import sqlite3 from 'sqlite3';
sqlite3.verbose();

// Connect to in-memory database
const db = new sqlite3.Database(':memory:');

export default db;
