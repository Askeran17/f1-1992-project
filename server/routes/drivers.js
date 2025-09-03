// routes/drivers.js
const express = require('express');
const { body, validationResult } = require('express-validator');

const router = express.Router();

router.post(
  '/',
  body('name').notEmpty().withMessage('Имя обязательно'),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // логика добавления водителя
    res.status(201).json({ message: 'Водитель добавлен' });
  }
);

module.exports = router;
