const express = require('express');
const pool = require('../db');

const router = express.Router();

// GET /api/races - list of all races
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name, date FROM races ORDER BY date ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err.message });
  }
});

// GET /api/races/:id/results
// GET /api/races/:id/results with JOIN names of drivers and teams
router.get('/:id/results', async (req, res) => {
  const raceId = req.params.id;
  try {
    const result = await pool.query(`
      SELECT results.position, results.points,
             drivers.name AS driver_name,
             teams.name AS team_name
      FROM results
      JOIN drivers ON results.driver_id = drivers.id
      JOIN teams ON results.team_id = teams.id
      WHERE results.race_id = $1
      ORDER BY results.position ASC
    `, [raceId]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err.message });
  }
});

module.exports = router;
