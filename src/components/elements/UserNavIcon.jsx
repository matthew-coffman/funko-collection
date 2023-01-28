import React from 'react';
import {
  Page,
  Navbar,
  Link,

} from 'konsta/react';
import {  Chip } from 'tailwind-mobile/react';
import GrassPNG from '../../assets/images/grass.png';

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
                  src={GrassPNG}
                />
              }
              outline
              colors={{ border: 'border-green-500', text: 'text-white' }}
            >
              Matthew Coffman
            </Chip>
          </Link>}
        />
      </Page>
    )
}