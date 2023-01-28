import React from 'react';
import {     
    Page,
    Button,
    Link, 
    BlockTitle,
    Card,
} from 'konsta/react';

const CollectionPage = () => (
  <Page name="profile">
    <BlockTitle withBlock={false}>Styled Cards</BlockTitle>
    <div className="divide-x sm:grid sm:grid-cols-6">
      <Card
        outline
        header={
          <>
            <div className="flex justify-center">
              <Link>NameOfFunko</Link>
            </div>
          </>
        }
        footer={
          <>
            <div className="flex justify-between material:hidden">
              <Link>Like</Link>
              <Link>Read more</Link>
            </div>
            <div className="flex justify-start ios:hidden space-x-2">
              <Button rounded inline>
                Like
              </Button>
              <Button rounded inline outline>
                Read more
              </Button>
            </div>
          </>
        }
      >
        <div
          className="flex items-center justify-center p-24 mb-4 text-white font-bold bg-center rounded-full material:rounded-xl material:text-[22px]"
          style={{
            backgroundImage:
              'url(https://www.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/897627/Black_Panther_Shirts_and_Jackets_0490e751-49fc-42a3-bf83-d59d3acd753e_large.jpg)',
          }}
        >
          Image of Funko Here
        </div>
        <div className="flex justify-center text-gray-500 mb-3">Posted on January 21, 2021</div>
        <p>
          Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies
          efficitur vitae non felis. Phasellus quis nibh hendrerit...
        </p>
      </Card>
      <Card
        footer={
          <>
            <div className="flex justify-between material:hidden">
              <Link>Like</Link>
              <Link>Read more</Link>
            </div>
            <div className="flex justify-start ios:hidden space-x-2">
              <Button rounded inline>
                Like
              </Button>
              <Button rounded inline outline>
                Read more
              </Button>
            </div>
          </>
        }
      >
        <div
          className="ios:-mx-4 ios:-mt-4 h-48 p-4 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl mb-4 material:text-[22px]"
          style={{
            backgroundImage:
              'url(https://cdn.framework7.io/placeholder/people-1000x600-3.jpg)',
          }}
        >
          Journey To Mountains
        </div>
        <div className="text-gray-500 mb-3">Posted on January 21, 2021</div>
        <p>
          Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies
          efficitur vitae non felis. Phasellus quis nibh hendrerit...
        </p>
      </Card>
    </div>
    </Page>
);
export default CollectionPage;