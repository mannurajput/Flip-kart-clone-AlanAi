

import Header from './Header';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect } from 'react';
import { Product } from "./Product"
import Card from './Card'
import { useState } from 'react'
function App() {
  const [data, setdata] = useState([])
  useEffect(() => {
    alanBtn({
      key: "4786650fdb37209b159b0d7df97acd482e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command }) => {
        if (command === "shoe") {
          filter('shoe')
        }

        else if (command === "shirt") {
          filter("shirt")

        }
        else if (command === "skirt") {
          filter("skirt")
        }
        else if (command === "short") {
          filter("short")
        }
        else if (command === "pant") {
          filter("pant")
        }
        else if (command === "sandal") {
          filter("sandal")
        }
      }
    })
    filter("")
  }, []);


  const filter = (names) => {
    const filtered = Product.filter(function (item) {
      if (item.name.includes(names)) {
        return true;
      }
      else return null;

    })
    setdata(filtered)


  }


  return (
    <div className="App">
      <Header />
      <div
        style={{
          flexWrap: "wrap",
          display: "flex",
          backgroundColor: "lightgray",
          marginLeft: "10px",
        }}
      >
        {data.map((item) => (
          <Card
            image={item.image}
            name={item.name}
            rating={item.rating}
            actualPrice={item.actualPrice}
            offerPrice={item.offerPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
