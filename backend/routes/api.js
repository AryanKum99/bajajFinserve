const express = require('express');
const router = express.Router();

router.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(char => char === char.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.sort().pop() || null;

    res.json({
        is_success: true,
        user_id: "Aryan_Kumar_24112003",
        email: "aryan.kumar2021a@vitstudent.ac.in",
        roll_number: "21BCT0275",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    });
});

router.get('/bfhl', (req, res) => {
    res.json({ status: 200, operation_code: 1 });
});

module.exports = router;
