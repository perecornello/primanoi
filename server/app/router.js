const express = require("express");

const router = express.Router();

// Import item-related actions

const servicesellerActions = require("./controllers/ServicesellerActions");

// Route to get a list of items

router.get("/serviceseller", servicesellerActions.browse);

// Route to get a specific item by ID

router.get("/serviceseller/:id", servicesellerActions.read);

// Route to add a new item
router.post("/serviceseller", servicesellerActions.add);

// Route to delete an item
router.delete("/serviceseller/:id", servicesellerActions.destroy);

// Route to edit an item
router.put("/serviceseller/:id", servicesellerActions.edit);

module.exports = router;