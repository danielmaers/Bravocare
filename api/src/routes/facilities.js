const {Router}= require("express")
const {getFacilities, getNurseHiringPriority,getMoreShifts}= require("../controllers/facilitiesControllers")

const router= Router()

router.get("/", getFacilities)
router.get("/nursepriority/:facID", getNurseHiringPriority)
router.get("/moreshifts",getMoreShifts)


module.exports= router