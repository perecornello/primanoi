const express = require("express");

const router = express.Router();

// Import item-related actions

const servicesellerActions = require("./controllers/ServicesellerActions");
const landActions = require("./controllers/LandActions");
// Route to get a list of items

router.get("/serviceseller", servicesellerActions.browse);
router.get("/land", landActions.browse);

// Route to get a specific item by ID

router.get("/serviceseller/:id", servicesellerActions.read);
router.get("/land/:id", landActions.read);

// Route to add a new item
router.post("/serviceseller", servicesellerActions.add);
router.post("/land", landActions.add);

// Route to delete an item
router.delete("/serviceseller/:id", servicesellerActions.destroy);
router.delete("/land/:id", landActions.destroy);

// Route to edit an item
router.put("/serviceseller/:id", servicesellerActions.edit);
router.put("/land/:id", landActions.edit);

module.exports = router;