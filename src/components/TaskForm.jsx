import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {createTask} = useContext(TaskContext);

    const handleSubmit = (e) => {
        if (title == "" || description == "") {
            e.preventDefault();
        }else{
            e.preventDefault();
            createTask({
                title,
                description,
            });
            setTitle("");
            setDescription("");
        }
    };

    return (
        <div className="mt-2">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center text-white">
                <input
                placeholder="Escribe tu tarea"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                autoFocus
                className="w-80 h-10 p-2 text-slate-900"
                maxLength={24}
                />

                <textarea
                placeholder="Escribe la descripcion de tu tarea"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="w-80 h-20 p-2 text-slate-900 m-1"
                maxLength={180}
                ></textarea>

                <button className="bg-green-500/100 hover:bg-green-700 rounded-md p-1 w-80">Guardar</button>
            </form>
        </div>
    );
}

export default TaskForm;
