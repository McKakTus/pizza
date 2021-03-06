import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { passport } from './core/passport';

import AuthController from './controllers/AuthController';

dotenv.config({
  path: 'server/.env',
});

const app = express();

app.use(cors());

app.use(express.json());
app.use(passport.initialize());

app.get('/user/:id', passport.authenticate('jwt', { session: false }), AuthController.getUserInfo);
app.get('/auth/me', passport.authenticate('jwt', { session: false }, AuthController.getMe));
app.get('/auth/sms', passport.authenticate('jwt', { session: false }), AuthController.sendSMS);
app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile']}));

app.get(
  '/auth/sms/activate',
  passport.authenticate('jwt', { session: false }),
  AuthController.activate,
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  AuthController.authCallback,
);

app.listen(3001, () => {
  console.log('Server Runned');
});