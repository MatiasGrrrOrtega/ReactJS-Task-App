import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {

    return (
      <main className="bg-zinc-900 h-screen">
        <h1 className="text-white text-center text-5xl font-bold">TASK APP</h1>
        <TaskForm />
        <TaskList />
      </main>
    );
}

export default App;