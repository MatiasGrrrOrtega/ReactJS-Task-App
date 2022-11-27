import {useContext} from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskCard({ task }) {

    const {deleteTask}= useContext(TaskContext);

    return (
        <div className="flex flex-col justify-between text-white p-3 bg-zinc-800 rounded-xl m-2 w-80 min-h-48">
            <div>
                <h1 className="text-xl text-center font-bold capitalize">{task.title}</h1>
                <p className="bg-indigo-900 break-words rounded-md">{task.description}</p>
            </div>
            <div>
                <button className="bg-red-500/100 hover:bg-red-700  rounded-md p-1 mt-1" onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
            </div>
        </div>
    );
}

export default TaskCard;
