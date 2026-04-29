const express = require('express');
const cors = require('cors');
const requestLogger = require('./middleware/requestLogger');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/auth');
const goalRoutes = require('./routes/goals');
const aiRoutes = require('./routes/ai');
const healthRoutes = require('./routes/health');
const metricsRoutes = require('./routes/metrics');

const app = express();

// Middleware global
app.use(cors());
app.use(express.json());
app.use(requestLogger);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/goals', goalRoutes);
app.use('/api/ai', aiRoutes);
app.use('/health', healthRoutes);
app.use('/metrics', metricsRoutes);

// Aktifkan di Cycle 2 setelah diimplementasikan:
// const taskRoutes = require('./routes/tasks');
// const progressRoutes = require('./routes/progress');
// app.use('/api/tasks', taskRoutes);
// app.use('/api/progress', progressRoutes);

// Error handler — harus di paling akhir
app.use(errorHandler);

module.exports = app;

