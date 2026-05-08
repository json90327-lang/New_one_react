import {React,  useState } from 'react';
import './SHP.css';

const Index = () => {
    const [showdata, setshowdata]=useState(false);
    const uday =()=>{
        setshowdata(!showdata);
    };
  return (
    <div className='card'>
        <center><button className='btn' onClick={uday}>{showdata ? "hide":"show"}</button></center>
        {showdata && (
        <div className='content'>
            I woke up early in the Morning. I freshened up,  had a small tiffin, I took a small butter milk, and took 
            a short break. Then I went to the academy. Sir  Sir taught the What is the Props with small movies project
             like print the movies datails  .After class I Worked on python in Hackerrank Problems Later and I ate my lunch and took some rest. 
             After that, I saw the react js videos in youtube channel . Then I returned to my room and freshened up. I went to Ammavaru Tempule and I returned my room,
              I worked on create my resume and i practiced python interview questions. After eating food, I worked on improving my communication skills and 
              talk with copilot ,writing skills. Finally, I wrote my diary and went to sleep.
        </div>
        )}
    </div> 
//      {showdata ? (
//         <div> I woke up early in the Morning. I freshened up,  had a small tiffin, I took a small butter milk, and took 
//             a short break. Then I went to the academy. Sir  Sir taught the What is the Props with small movies project
//              like print the movies datails  .After class I Worked on python in Hackerrank Problems Later and I ate my lunch and took some rest. 
//              After that, I saw the react js videos in youtube channel . Then I returned to my room and freshened up. I went to Ammavaru Tempule and I returned my room,
//               I worked on create my resume and i practiced python interview questions. After eating food, I worked on improving my communication skills and 
//               talk with copilot ,writing skills. Finally, I wrote my diary and went to sleep.
//               </div>
        
//    ):(
//     <h3>data is hidden</h3>
//    )
// }
// </div> 

    );
};

export default Index

// import React, { useState } from 'react'

// const Index = () => {
//     const[showdata,setshowdata]=useState(false);
// const uday=()=>{
//     setshowdata(!showdata);
// };
//   return (
//     <div>
//         <button onClick={uday}>{showdata? "hide":"show"}</button>
//         {showdata&&(
//             <div className='content'>
//             I woke up early in the Morning. I freshened up,  had a small tiffin, I took a small butter milk, and 
//             took a short break. Then I went to the academy. Sir  Sir taught the What is the Props with small movies 
//             project like print the movies datails  .After class I Worked on python in Hackerrank Problems Later and
//              I ate my lunch and took some rest. After that, I saw the react js videos in youtube channel . Then I returned
//               to my room and freshened up. I went to Ammavaru Tempule and I returned my room, I worked on create my resume
//                and i practiced python interview questions. After eating food, I worked on improving my communication skills 
//                and talk with copilot ,writing skills. Finally, I wrote my diary and went to sleep. 
//         </div>
//         )} 
//     </div>
//   )
// }

// export default Index;