import React from 'react';
import {
    Page,
  } from 'tailwind-mobile/react';
import UserMenuList from '../elements/UserMenuList';
const UserProfilePage = () => (
    <Page name="profile" title="profile">
      <UserMenuList/>
    </Page>
);
export default UserProfilePage;