const { Router } = require("express");
const {
  getAllTask,
  getTask,
  postTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks.controllers");
const router = Router();
const Con = require("../db");

router.get("/task", getAllTask);

router.get("/task/:id", getTask);

router.post("/task", postTask);

router.delete("/task/:id", deleteTask);

router.put("/task/:id", updateTask);

module.exports = router;
