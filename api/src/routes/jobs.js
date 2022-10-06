const {Router}= require("express")
const {getRemainingSpots,getNurseHiringPosibility}= require("../controllers/jobsControllers")

const router= Router()

router.get("/remaining", getRemainingSpots)
router.get("/hiring", getNurseHiringPosibility)

module.exports= router