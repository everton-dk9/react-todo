import NewTaskButton from "../../components/NewTaskButton";
import TaskCard from "../../components/TaskCard";
import db from '../../../db.json';
import './styles.css';

function TasksPage() {
  const tasks = db.tasks;
  const taskList = tasks.map(
    task => <TaskCard key={task.id} createdAt={task.created_at} {...task} />
  );

  return (
    <>
      <main className="tasks-page">
        <div className="tasks-heading">
          <h1>Tarefas</h1>
          <NewTaskButton />
        </div>
        <section>
          <div className="task-list">
            {taskList}
          </div>
        </section>
      </main>
    </>
  );
}

export default TasksPage;