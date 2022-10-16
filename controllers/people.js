let { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};
const createPerson = (req, res) => {
  if (!req.body.name) {
    return res
      .status(400)
      .json({ success: false, msg: "please enter the name" });
  } else {
    res.status(201).json({ success: true, person: req.body.name });
  }
};
const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ sucess: false, msg: "please provide name value" });
  }
  res.status(201).json({ sucess: true, data: [...people, name] });
};
const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
};
const deletePerson = (req, res) => {
  if (
    !people.find((data) => {
      return data.id == Number(req.params.id);
    })
  ) {
    return res
      .status(404)
      .json({ sucess: false, message: "no data exists by that id" });
  }
  const filtered = people.filter((data) => {
    return data.id !== Number(req.params.id);
  });
  console.log(filtered);
  return res.status(200).json({ sucess: true, data: filtered });
};
module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
