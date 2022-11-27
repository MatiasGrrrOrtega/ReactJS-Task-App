import TaskCard from "./TaskCard";
import {useContext} from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {

    const {tasks}= useContext(TaskContext);

    if (tasks.length === 0) {
        return <h1 className="text-white text-center text-lg mt-3 uppercase">No hay tareas aun</h1>;
    }

    return (
        <div className="flex flex-wrap justify-evenly">
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}

export default TaskList;
