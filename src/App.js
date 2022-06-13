 import './App.css';
 import { useState, useEffect } from 'react';
// // import Axios from 'axios';

// // function App() {

// //   const [data, setData] = useState(null);

// //   useEffect(() => {
// //     Axios.get("https://date.nager.at/api/v2/publicholidays/2020/US")
// //           .then( 
// //               (response) => {
// //                 setData(response.data);
// //               }
// //           );
// //   }, []);


// //   return (
// //     <div className='App'>
// //       {data?.map((holiday) => {
// //         return <h1>{holiday.name}</h1>
// //       })}   
    
// //     </div>
// //   )

// // }

// // export default App;

//----------------------------------------------------------

// import React, { useState } from 'react'

// function App(){
//   const [jump, setJump] = useState(0);


//   const jumpMonkey = () => {
//     setJump(jump => jump + 1);
//   }

//   return (
//     <div> 
//       <h1>Hello there little monkey!</h1>
//       {jump}
//       <button onClick={jumpMonkey}>You are gorgeous</button>
//     </div>
//   )
// }

// export default App;

//----------------------------------------------------------


function Comment(props) {
return (
  <div className="Comment">
    <div className="UserInfo">
      <Avatar user={props.author}/>
      <div className="UserInfo-name">
        {props.author.name}
      </div>
    </div>
    <div className="Comment-text">
      {props.text}
    </div>
    <div className="Comment-date">
      {formatDate(props.date)}
    </div>
  </div>
);


function Avatar() {
return (
  <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />

  )
}

//----------------------------------------------------------

function Comment(props) {
  return (
    <div className="Comment">
    <UserInfo user={props.author}/>
  <Avatar user={props.author}/>

      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
  

  <div className="UserInfo">
      <Avatar user={props.author}/>
      <div className="UserInfo-name">
        {props.author.name}
      </div>
  </div>

  }

//----------------------------------------------------------
