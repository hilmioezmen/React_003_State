import React from 'react';



function Child(props) {
    return (
        <div>
            <h1> Hey, my name is {props.isim} </h1>
        </div>
    );
}
export default Child;


//1. yontem destructuring
// function Child({isim}) {
//     return (
//         <div>
//             <h1> Hey, my name is {isim} </h1>
//         </div>
//     );
// }


//2.yontem destructuring
// function Child(props) {
//   const {isim} = props
//     return (
//         <div>
//             <h1> Hey, my name is {props.isim} </h1>
//         </div>
//     );
// }





