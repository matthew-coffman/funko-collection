import React, { useState } from 'react';
import {
  Page,
  Toolbar,
  Link,
  Block,
  Button,
} from 'tailwind-mobile/react';

export default function ToolBar() {
  return (
    <Page>
      <Block className="flex items-center justify-center justify-between">
      <Toolbar className={`left-0 ${'bottom-0 fixed'} w-full`} >
        <Button className="items-end p-4"><Link toolbar>Link 1</Link></Button>
        <Button className="items-end p-4"><Link toolbar>Link 1</Link></Button>
        <Button className="items-end p-4"><Link toolbar>Link 1</Link></Button>
      </Toolbar>
      </Block>
    </Page>
  );
}
ToolBar.displayName = 'ToolBar';
