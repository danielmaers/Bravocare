const {Facilities, Clinician_work_history,Nurses} =require("../db")

async function getFacilities(req, res, next){
    let facilities= await Facilities.findAll()
    res.send(facilities)
}

async function getNurseHiringPriority(req, res, next){
    const {facID}=req.params
    
    let facilities= await Facilities.findOne({where: {facility_id:facID}})
    
    let nurseData= await Clinician_work_history.findAll({where: {facility_id:facID}})
    let nurseList={}
     nurseData.forEach(element => {
        if(element.facility_id===facilities.facility_id){
        nurseList[element.nurse_id]=0}
     });
     
     nurseData.forEach(e => {
        if(e.worked_shift) nurseList[e.nurse_id]+=1
        if(e.call_out) nurseList[e.nurse_id]-=3
        if(e.no_call_no_show) nurseList[e.nurse_id]-=5
     });
     nurseList=Object.keys(nurseList).map(key=>{return {nurseID:Number(key), nurseScore:nurseList[key]}})
     nurseList.sort((a,b)=>{         
        if(a.nurseScore===b.nurseScore) return a.nurseID-b.nurseID
        else return b.nurseScore-a.nurseScore
     })

    res.send(nurseList)
}

async function getMoreShifts(req, res, next){
    let facilities= await Facilities.findAll()
    let workHistory= await Clinician_work_history.findAll({where:{worked_shift:true}})
    let nurses= await Nurses.findAll()
  
   facilities=facilities.map(e=>{
    let nurse={}
    workHistory.forEach(work=>{
        if(work.facility_id=== e.facility_id) {
            nurse[work.nurse_id]?nurse[work.nurse_id]+=1:nurse[work.nurse_id]=1
        }
    })
    let max={nurseName:null, shifts:0}
    Object.keys(nurse).forEach(key=>{
        if(nurse[key]>max.shifts){
            max.nurseName=nurses.find(e=>Number(key)+999===e.nurse_id).nurse_name;            
            max.shifts=nurse[key]
        }
    })
    
    return {
        facility_id:e.facility_id,
        facility_name:e.facility_name,
        nurse:max
    }
   })
   



    
    
    res.send(facilities)
}

module.exports={
    getFacilities,
    getNurseHiringPriority,
    getMoreShifts
}