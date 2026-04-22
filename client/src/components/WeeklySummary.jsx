export default function WeeklySummary({ plannedHours, completedHours, completionRate }) {
  return (
    <div className="weekly-summary">
      <h3 className="summary-title">Ringkasan Minggu Ini</h3>
      <div className="summary-stats">
        <div className="stat-item">
          <span className="stat-value">{plannedHours ?? 0}</span>
          <span className="stat-label">Jam Terencana</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{completedHours ?? 0}</span>
          <span className="stat-label">Jam Selesai</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{completionRate ?? 0}%</span>
          <span className="stat-label">Completion Rate</span>
        </div>
      </div>
    </div>
  );
}
