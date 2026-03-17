//There is one way to use component
// export default function ToDo(prep){
// return(
//     <li>Task: {prep.task} </li>
// )
// }

//Other way to using distructring
export default function ToDo({ task, isDone, time=0}) {
    if (isDone === true) {
        return (
            <li>Done {task} Duration: {time} </li>
        )
    }
    else{
        return <li>Pending {task} Duration: {time} </li>
    }
}