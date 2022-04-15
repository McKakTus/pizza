import { NextPage } from 'next';
import React from 'react';
import { UserData } from '..';
import { Api } from '../../api';
import { Profile } from '../../components/Profile';
import { checkAuth } from '../../utils/checkAuth';

interface ProfilePageProps {
  profileData: UserData | null;
}

const ProfilePage: NextPage<ProfilePageProps> = ({ profileData }) => {
  return (
    <>
      <div className='container'>
        <Profile 
          name={profileData.name} 
          email={profileData.email}
          birthday={profileData.birthday}
          phone={profileData.phone}
        />
      </div>
    </>
  );
};

export default ProfilePage;

export const getServerSideProps = async (ctx) => {
    try {
      const user = await checkAuth(ctx);
  
      const userId = ctx.query.id;
      const profileData = await Api(ctx).getUserInfo(Number(userId));
  
      if (!user || !profileData) {
        throw new Error();
      }
  
      return {
        props: {
          profileData,
        },
      };
    } catch (error) {
      return {
        props: {},
        redirect: { permanent: false, destination: '/' },
      };
    }
};