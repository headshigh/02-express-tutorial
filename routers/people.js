const express = require("express");
const router = express.Router();
let { people } = require("../data");
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");
router.use(express.urlencoded({ extended: false }));

router.get("/", getPeople);
router.post("/", createPerson);
router.post("/postman", createPersonPostman);

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);
module.exports = router;
//router.route('/:id).put(updatePerson).delete(deletePerson)
