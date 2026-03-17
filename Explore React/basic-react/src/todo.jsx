// 1st way: There is one way to use component
// export default function ToDo(prep){
// return(
//     <li>Task: {prep.task} </li>
// )
// }



//2nd way: to using distructring and conditional rendering
// export default function ToDo({ task, isDone, time=0}) {
//     if (isDone === true) {
//         return (
//             <li>Done {task} Duration: {time} </li>
//         )
//     }
//     else{
//         return <li>Pending {task} Duration: {time} </li>
//     }
// }


// Conditional Rendering: 3rd Way(ternary) |condition? true: false
// export default function ToDo({ task, isDone, time=0}){
//     return isDone?<li> Done:{task} Duration: {time}</li>: <li>Pending:{task}</li>
// }

// Conditional rending :4th way
// export default function ToDo({ task, isDone, time=0}){
//     return isDone && <li> Done:{task} Duration: {time}</li>
// }

//Conditional rending :5th way
// export default function ToDo({ task, isDone, time=0}){
//     return isDone || <li> Pending:{task}</li>
// }

//Conditional rending :6th way using variable
export default function ToDo({ task, isDone, time = 0 }) {
    let listItems;
    if (isDone === true) {
        listItems=<li>Done {task} Duration: {time} </li>
    }
    else {
       listItems=<li>Pending Task:{task}</li>
    }
    return listItems;
}