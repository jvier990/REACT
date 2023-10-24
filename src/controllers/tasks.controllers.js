const db = require("../db");

const getAllTask = async (req, res) => {
  try {
    const result = await db.query(
      '   select * from "Concesionarios_El_Rayo_McQueen_QCHAU"."Automoviles"'
    );
    res.json(result.rows);
  } catch (error) {
    console.log(error.massage);
  }
  console.log(result);
};

const getTask = async (req, res) => {
  try {
    console.log(req.params.id);
    const { id } = req.params;
    const result = await db.query(
      '  select * from "Concesionarios_El_Rayo_McQueen_QCHAU"."Automoviles" WHERE "ID" = $1',
      [id]
    );
    if (result.rows.length === 0)
      return res.status(404).json({ massage: "task not found" });
    res.json(result.rows);
    console.log(result);
  } catch (error) {
    console.log(error.massage);
  }
};

const postTask = async (req, res) => {
  const { id, Modelo, Marca, Año, Precio } = req.body;
  const result = await db.query(
    '  INSERT INTO "Concesionarios_El_Rayo_McQueen_QCHAU"."Automoviles" ("ID","Modelo","Marca","Año","Precio") VALUES ($1,$2,$3,$4,$5) RETURNING *',
    [id, Modelo, Marca, Año, Precio]
  );
  res.json(result.rows[0]);
  console.log(result);
};
const deleteTask = async (req, res) => {
  try {
    console.log(req.params.id);
    const { id } = req.params;
    const result = await db.query(
      '  delete from "Concesionarios_El_Rayo_McQueen_QCHAU"."Automoviles" WHERE "ID" = $1',
      [id]
    );
    console.log("ELIMANOS");
    console.log(result);
  } catch (error) {
    console.log(error.massage);
  }
};

const updateTask = (req, res) => {
  res.send("Updating a task ");
};

module.exports = {
  getAllTask,
  getTask,
  postTask,
  updateTask,
  deleteTask,
};
