import React, { useState } from 'react';
import {
  Page,
  Block,
  MenuList,
  MenuListItem
} from 'tailwind-mobile/react';
import UserIcon from './UserIcon';

export default function UserMenuList() {
  const isPreview = document.location.href.includes('examplePreview');
  const [selected, setSelected] = useState('home');
  const [selectedMedia, setSelectedMedia] = useState('home');

  return (
    <Page>
      <Block strong>
        <p>
          Menu list unlike usual links list is designed to indicate currently
          active screen (or section) of your app. Think about it like a Tabbar
          but in a form of a list.
        </p>
      </Block>
      <MenuList>
        <MenuListItem
          title="Home"
          active={selected === 'home'}
          onClick={() => setSelected('home')}
          media={<UserIcon />}
          
        />
        <MenuListItem
          title="Profile"
          active={selected === 'profile'}
          onClick={() => setSelected('profile')}
          media={<UserIcon />}
        />
        <MenuListItem
          title="Settings"
          active={selected === 'settings'}
          onClick={() => setSelected('settings')}
          media={<UserIcon />}
        />
      </MenuList>
    </Page>
  );
}
UserMenuList.displayName = 'UserMenuList';
