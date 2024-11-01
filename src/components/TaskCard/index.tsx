import DeleteTaskButton from '../DeleteTaskButton'
import EditTaskButton from '../EditTaskButton'
import './styles.css'

type taskCardProps = {
  title: string
  content: string
  createdAt: string
}

function TaskCard({ title, content, createdAt }: taskCardProps) {
  function formatDateToSlashes(date: string) {
    const toDate = new Date(Date.parse(date));
    const day = toDate.getDate();
    const month = toDate.getMonth() + 1;
    const year = toDate.getFullYear();
    return `${day}/${month}/${year}`
  }

  return (
    <div className="task-card">
      <div className="task-header">
        <h3 className="title">{title}</h3>
        <p className="content" >{content}</p>
      </div>

      <div className="task-actions">
        <span>{formatDateToSlashes(createdAt)}</span>
        <div className='actions'>
          <EditTaskButton />
          <DeleteTaskButton />
        </div>
      </div>
    </div>
  );
}

export default TaskCard;