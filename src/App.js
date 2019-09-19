import React from 'react';

function Food({name,picture}) {
  
  return<div> 
    <h1>I like {name} </h1>
    <img src={picture} />
  </div>
}

const foodlike =[
  {name: "Chicken",
  image:
  "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FVqWQh6bFmtM%2Fmaxresdefault.jpg&f=1&nofb=1"
  },
  {name: "Jokbal",
  image:
  "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FrRQIRcQqb4k%2Fmaxresdefault.jpg&f=1&nofb=1"
  },
  {
  name: "Bossam",
  image:
  "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwordfromtherok.files.wordpress.com%2F2012%2F10%2Fbossam.jpeg&f=1&nofb=1"
  },
  {name: "Makguksu",
  image:
  "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fhapskorea.com%2Fwp-content%2Fuploads%2F2017%2F06%2Fmakguksu-.jpg&f=1&nofb=1"
  }

];
function App() {
  return <div>
    {foodlike.map(dish => <Food name={dish.name} picture={dish.image}/>) }
    </div>;
      
  
}

export default App;

