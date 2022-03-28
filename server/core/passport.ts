import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { User } from '../../models';
import { UserData } from '../../pages';
import { createJwtToken } from '../../utils/createJwtToken';

const GoogleStrategy = require('passport-google-oauth2').Strategy;

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY,
};

passport.use(
    'jwt',
    new JwtStrategy(opts, (jwt_payload, done) => {
        done(null, jwt_payload.data);
    }),
);

passport.use(
    'google',
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:3001/auth/google/callback',
      },
      async (_: unknown, __: unknown, profile, done) => {
        try {
            let userData: UserData;
  
            const obj: Omit<UserData, 'id'> = {
                email: profile.email,
                password: profile.password,
                googleId: profile.id,
                isActive: 0,
                username: profile.username,
                phone: '',
            };
  
            const findUser = await User.findOne({
                where: {
                    googleId: obj.googleId,
                },
            });
    
            if (!findUser) {
                const user = await User.create(obj);
                userData = user.toJSON();
            } else {
                userData = await findUser.toJSON();
            }
  
            done(null, {
                ...userData,
                token: createJwtToken(userData),
            });
        } catch (error) {
            done(error);
        }
      },
    ),
  );

passport.serializeUser(function (user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        err ? done(err) : done(null, user);
    });
});

export { passport };