const express = require("express");
const router = express.Router();

//Data container
const items = [];

// Creating new item
router.post('/items', (req,res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(items);
});

// Get all items when requested
router.get('/items',(req,res) => {
    res.json(items);
});

// Get single item
router.get('/items/:id', (req,res) => {
    const id = parseInt(req.params.id, 10);
    const item = items.find(i => i.id === id);
    if(item) {
        res.json(item);
    } else {
        res.status(404).send("Item not found")
    }
});

// Updating an item
router.put('/items/:id', (req,res) => {
    const id = parseInt(req.params.id, 10);
    const index = items.findIndex(i => i.id === id);
    if(index !== -1) {
        items[index] = req.body;
        res.json(items[index]);
    } else {
        res.status(404).send("item not found")
    }
});

// Deleting an item

router.delete('/items/:id', (req,res) => {
    const id = parseInt(req.params.id, 10);
    const index = items.findIndex(i => i.id === id);

    if( index !== -1) {
        items.splice(index,1);
        res.json(items);
    } else {
        res.status(404).send("Item not found")
    }
});

module.exports = router;







