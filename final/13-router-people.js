const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
//people.js
/*const express = require("express");
const router = express.Router();
let { people } = require("../data");
router.use(express.urlencoded({ extended: false }));

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
router.post("/", (req, res) => {
  if (!req.body.name) {
    return res
      .status(400)
      .json({ success: false, msg: "please enter the name" });
  } else {
    res.status(201).json({ success: true, person: req.body.name });
  }
});
router.post("/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ sucess: false, msg: "please provide name value" });
  }
  res.status(201).json({ sucess: true, data: [...people, name] });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});
router.delete("/:id", (req, res) => {
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
});
module.exports = router;



//auth.js
const express = require("express");
const router = express.Router();
let { people } = require("../data");
router.use(express.urlencoded({ extended: false }));

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
router.post("/", (req, res) => {
  if (!req.body.name) {
    return res
      .status(400)
      .json({ success: false, msg: "please enter the name" });
  } else {
    res.status(201).json({ success: true, person: req.body.name });
  }
});
router.post("/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ sucess: false, msg: "please provide name value" });
  }
  res.status(201).json({ sucess: true, data: [...people, name] });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});
router.delete("/:id", (req, res) => {
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
});
module.exports = router;

 */
