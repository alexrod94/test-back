const router = require("express").Router();
const Task = require("../models/Task.model");

// Create

router.post("/", async (req, res, next) => {
  try {
    const response = await Task.create(req.body);
    res.json({
      status: 200,
      msg: "Task created successfully",
    });
  } catch (err) {
    res.json({
      status: 400,
      msg: "Something has gone wrong. Please try again",
    });
  }
});

// Get all tasks
router.get("/", async (req, res, next) => {
  try {
    const response = await Task.find();
    res.json({
      status: 200,
      msg: "Tasks retrieved",
      data: response,
    });
  } catch (err) {
    res.json({
      status: 400,
      msg: "Something has gone wrong. Please try again",
    });
  }
});

// Get one task
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await Task.findById(id);
    res.json({
      status: 200,
      msg: "Tasks retrieved",
      data: response,
    });
  } catch (err) {
    res.json({
      status: 400,
      msg: "Something has gone wrong. Please try again",
    });
  }
});

// Update
router.put("/:id", async (req, res, next) => {
  try {
    const response = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      status: 201,
      msg: "Task modified",
      data: response,
    });
  } catch (err) {
    res.json({
      status: 400,
      msg: "Something has gone wrong. Please try again",
    });
  }
});

// Delete
router.delete("/:id", async (req, res, next) => {
  try {
    const response = await Task.findByIdAndDelete(req.params.id);
    res.json({
      status: 200,
      msg: "Task deleted",
      data: response,
    });
  } catch (err) {
    res.json({
      status: 400,
      msg: "Something has gone wrong. Please try again",
    });
  }
});

// Change completed

module.exports = router;
