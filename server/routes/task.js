const express = require('express');
const router = express.Router();
const Hotel = require('../models/schemas');

// Get all
router.get('/HotelMarParaiso', async (req, res) => {
    const hotels = await Hotel.find();
    res.json(hotels);
});

// Create
router.post('/HotelMarParaiso', async (req, res) => {
    const hotel = new Hotel(req.body);
    await hotel.save();
    res.json({ status: 'Hotel Saved' });
});

// Update
router.put('/HotelMarParaiso/:id', async (req, res) => {
    await Hotel.findByIdAndUpdate(req.params.id, req.body);
    res.json({ status: 'Hotel Updated' });
});

// Delete
router.delete('/HotelMarParaiso/:id', async (req, res) => {
    await Hotel.findByIdAndRemove(req.params.id);
    res.json({ status: 'Hotel Deleted' });
});

module.exports = router;
