import React from 'react';

function Food({favorite}) {
  
  return <h1>I like {favorite} </h1>;
}

function App() {
  return <div><h1>Fucking shit 보이</h1>
    <Food favorite="kimchi"/>  
    <Food favorite="삼겹살"/>  
    <Food favorite="마늘"/>  
    <Food favorite="소고기"/>  
    </div>;
      
  
}

export default App;

