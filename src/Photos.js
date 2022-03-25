import Item from './App';
import data from './photos.json';
import React from "react";
// import './App.css';


// function App() {
// 	return (
// 		<div className="contaner">
// 			<div className="list-item">
// 				{data.map((item, index) => (
// 					<Item key={item.id} title={item.title} img={item.thumbnailUrl} link={item.url} />
// 				))}
// 			</div>
// 		</div>
// 	);
// }

function App() {
    const date = new Date().toString();
    return (
      <div className='container' style={{display: "flex", flexWrap: "wrap", gap: "30px"}}>
        {data.map((item, idx) => (
          <div key={idx} style={{ width: "calc(33.33% - 30px)", boxShadow: "0 3px 0 #9E9E9E" }}>
            <h3>{item.title}</h3>
            <img style={{ maxWidth: "100%" }} src={item.url} alt=""></img>
            <p>{date}</p>
          </div>
        ))
        }
      </div >
    );
  }
  
export default App;