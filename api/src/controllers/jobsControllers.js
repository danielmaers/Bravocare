const {Jobs, Nurse_hired_jobs, Nurses} =require("../db")

async function getRemainingSpots(req, res, next){
   let jobs= await Jobs.findAll()
   console.log("principio",jobs)
   let nurseHired= await Nurse_hired_jobs.findAll()
   nurseHired.forEach(element => {
      let job=jobs.find((e)=>e.job_id===element.job_id)
      job.total_number_nurses_needed-=1
   });
   jobs=jobs.map(e=>{
      return {
         jobID:e.job_id,
         remain:e.total_number_nurses_needed
      }
   }).sort((a,b)=>a.jobID-b.jobID)

   res.send(jobs)

}

async function getNurseHiringPosibility(req, res, next){
   let jobs= await Jobs.findAll()
   let totalNurses= await Nurses.findAll()
   let nurseHired= await Nurse_hired_jobs.findAll()
   let jobsObj={}
   nurseHired.forEach(element => {
      let job=jobs.find((e)=>e.job_id===element.job_id)
      job.total_number_nurses_needed-=1
      jobsObj[element.job_id]=Array.isArray(jobsObj[element.job_id])?jobsObj[element.job_id].concat(element.nurse_id):[element.nurse_id]
      
   });

   
   totalNurses=totalNurses.map(nurse=>{
      let count=0;
      jobs.forEach(job=>{
         if(job.nurse_type_needed=== nurse.nurse_type && 
            !(jobsObj[job.job_id].includes(nurse.nurse_id) &&
            job.total_number_nurses_needed>0
            )) count++
      })
      return {
         nurse_id:nurse.nurse_id,
         nurse_name:nurse.nurse_name,
         nurse_type:nurse.nurse_type,
         possibleJobs: count
      }
   }).sort((a,b)=>a.nurse_id-b.nurse_id)
   

   res.send(totalNurses)

}

module.exports={
   getRemainingSpots,
   getNurseHiringPosibility
}