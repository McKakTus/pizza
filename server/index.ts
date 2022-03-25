import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { passport } from './core/passport';

import AuthController from './controllers/AuthController';

dotenv.config({
    path: 'server/.env',
});

import './core/db';

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.get('/auth/sms', passport.authenticate('jwt', { session: false }), AuthController.sendSMS);

app.post(
  '/auth/sms/activate',
  passport.authenticate('jwt', { session: false }),
  AuthController.activate,
);

app.listen(3001, () => {
    console.log('Server Runned');
});