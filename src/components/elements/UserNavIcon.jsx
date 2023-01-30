import React from 'react';
import {
  Page,
  Navbar,
  Link,

} from 'konsta/react';
import {  Chip } from 'tailwind-mobile/react';
import UserIcon from '../../assets/images/grass.png';

export default function UserNavIcon({}) {
    return (
        <Page name="profile" title="profile">
        <Navbar
          className="pr-12 sticky"
          transparent
          right={
          <Link>
            <Chip
              className="m-0.5"
              media={
                <img
                  alt="user-icon"
                  className="h-7 rounded-full"
                  src={UserIcon}
                />
              }
              outline
              colors={{ border: 'border-green-500' }}
            >
              Matthew Coffman
            </Chip>
          </Link>}
        />
      </Page>
    )
}