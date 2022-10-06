const { Router } = require("express");
const Facilities= require("./facilities")
const Jobs= require("./jobs")

const router = Router();

router.use("/facilities", Facilities );
router.use("/jobs", Jobs);

router.get("/", (req, res) => {
  res.send("Back End de Challenge");
});
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
