import TaskItem from '../components/TaskItem';
import ProgressBar from '../components/ProgressBar';
import WeeklySummary from '../components/WeeklySummary';
import GoalCard from '../components/GoalCard';

const sampleGoal = { title: 'Belajar React', deadline: '2026-05-01', taskCount: 5 };

const sampleTasks = [
  { id: '1', title: 'Belajar React Hooks', duration_estimate: 45, planned_slot: 'morning', status: 'done' },
  { id: '2', title: 'Setup Express routes', duration_estimate: 60, planned_slot: 'afternoon', status: 'todo' },
];

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <WeeklySummary plannedHours={10} completedHours={7} completionRate={70} />

      <GoalCard goal={sampleGoal} />

      <ProgressBar completed={1} total={2} label="Progress minggu ini" />

      {sampleTasks.map((t) => (
        <TaskItem key={t.id} task={t} onStatusChange={() => {}} />
      ))}
    </div>
  );
}
