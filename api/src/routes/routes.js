const { Router } = require("express");
const getBreedsDogsHandler = require("../handlers/getBreedsDogsHandler");
const getBreedsDogsByIdHandler = require("../handlers/getBreedsDogByIdHandler");
const getDogsByNameHandler = require("../handlers/getDogsByNameHandler");
const postDogsHandler = require("../handlers/postDogsHandler");
const getDogsByTemperamentsHandler = require("../handlers/getDogsByTemperamentsHandler");
const getAllDogsHandler = require("../handlers/getAllDogsHandler");

const router = Router();

router.get("/dogs", getBreedsDogsHandler);
router.get("/dogs/:id", getBreedsDogsByIdHandler);
router.get("/name", getDogsByNameHandler);
router.post("/dogs", postDogsHandler);
router.get("/temperaments", getDogsByTemperamentsHandler);
router.get("/home", getAllDogsHandler);

module.exports = router;
