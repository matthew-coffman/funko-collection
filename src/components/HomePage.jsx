import React from 'react';
// Konsta UI components
import {     
    Page,
    Navbar,
    Toolbar,
    Block, 
    Button, 
    List, 
    ListItem, 
    Link, 
    BlockTitle 
} from 'konsta/react';

const HomePage = () => (
  // Use Page, Navbar & Toolbar from Framework7
  <Page name="home">
    <Navbar title="My App" large />
    <Toolbar bottom>
      <Link toolbar>Left Link</Link>
      <Link toolbar>Right Link</Link>
    </Toolbar>
    {/* In page content we can use Konsta UI components  */}
    <Block strong>
      <p>
        Here is your Framework7 & Konsta UI app. Let's see what we have here.
      </p>
    </Block>
    <BlockTitle>Navigation</BlockTitle>
    <List>
      <ListItem href="/about/" title="About" />
      <ListItem href="/form/" title="Form" />
    </List>

    <Block strong className="flex space-x-4">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </Block>
  </Page>
);
export default HomePage;