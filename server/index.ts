import express from 'express';
import dotenv from 'dotenv';

dotenv.config({
    path: 'server/.env',
});

import './core/db';

const app = express();

app.listen(3001, () => {
    console.log('Server Runned');
});