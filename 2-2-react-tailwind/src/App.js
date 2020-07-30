import React from 'react';
import TextSizes from './components/TextSizes';
import FontWeights from './components/FontWeights';
import TextColors from './components/TextColors';
import BackgroundColors from './components/BackgroundColors';
import Card from './components/Card';

// Imagine you are a a developer working
// for a hotel that helps customers find
// resorts and books the one they would like.

// Let 'resorts' be an array of resorts
// where the data comes from some database or API.
const resorts = [
  {
    name: "Green Valley Ranch Resort Spa & Casino",
    shortDescription: "Posh casino hotel offering a spa, a cinema & 2 outdoor pools, plus dining options, bars & lounges.",
    longDescription: "With unparalleled accommodations, a striking European-inspired aesthetic, and incomparable amenities, Green Valley Ranch offers a refined off-the-Strip resort experience—all amongst one of Las Vegas’ most coveted and convenient locales.",
    imageURL: "https://www.greenvalleyranch.com/wp-content/uploads/2020/04/GVR_BackyardPool_4x3.jpg",
    url: "https://www.greenvalleyranch.com/"
  },
  {
    name: "Cancun Resort Las Vegas by Diamond Resorts",
    shortDescription: "Simple villas in a Mayan-themed complex with pools, waterslides & a spa, plus a Mexican restaurant.",
    longDescription: "Discover comfort in accommodations featuring a private master bedroom with a king bed, and two full bathrooms. Relax in a separate dining area with a living space that includes a queen size sleeper sofa.",
    imageURL: "https://www.cancunresortlv.com/sites/www.cancunresortlv.com/files/cancun-pool_1728X500.png",
    url: "https://www.cancunresortlv.com/"
  }
];

function App() {
  return (
    <div className="flex space-x-5 p-8">
      {
        resorts.map((resort, index) => {
          return (
            <Card
              key={index}
              heading={resort.name}
              subheading={resort.shortDescription}
              image={
                {
                  url: resort.imageURL,
                  alt: resort.name
                }
              }
              actions={
                [
                  {
                    text: "Learn more",
                    callback: () => {
                      const win = window.open(resort.url);
                      
                      console.log(win);

                      if(win === undefined) {
                        console.log("Blocked by browser...");
                      } else {
                        win.focus();
                      }
                    }
                  }
              ]
              } />
          )
        })
      }
    </div>
  );
}

export default App;
