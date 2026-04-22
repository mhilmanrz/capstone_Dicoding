export default function GoalCard({ goal }) {
  const deadline = goal.deadline
    ? new Date(goal.deadline).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'Tidak ada deadline';

  return (
    <div className="goal-card">
      <h3 className="goal-title">{goal.title}</h3>
      <p className="goal-deadline">📅 {deadline}</p>
      <p className="goal-tasks">📋 {goal.taskCount ?? 0} tugas</p>
    </div>
  );
}
