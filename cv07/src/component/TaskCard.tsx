import {Task} from "../data/init-data";

interface Props{
    task: Task
    onTaskDone: (task: Task) => void
}
const TaskCard = ({task, onTaskDone}: Props) => {
    const doneClickHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        task.done =  e.target.checked;
        onTaskDone(task);
    };

    return <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p>{task.creationDate.toISOString()}</p>
        <br/>
        <p>{task.updateDate?.toISOString()}</p>
        <input type="checkbox" name="done" onChange={doneClickHandle} checked={task.done}/>
    </div>
}

export default TaskCard;