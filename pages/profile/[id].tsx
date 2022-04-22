import { NextPage } from 'next';
import React from 'react';
import { UserData } from '..';
import { Api } from '../../utils/api';
import { Profile } from '../../components/Profile';

interface ProfilePageProps {
  profileData?: UserData | null;
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

export const getServerSideProps = async (ctx) => {
  try {
    const userId = ctx.query.id;
    const profileData = await Api(ctx).user.getUserInfo(Number(userId));

    if (!profileData) {
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

export default ProfilePage;
