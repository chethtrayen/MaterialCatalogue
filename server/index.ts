import bodyParser from 'body-parser';
import express from 'express';
import materialRoutes from './src/routes/material.routes';
import cors from 'cors';
import { createTables } from './utils/database/migration';

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

// Run migration to create tables
createTables();

// Add routes
app.use('/material', materialRoutes);

app.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`);
});
