const {DataTypes} = require("sequelize");
module.exports = (sequelize)=>{
     sequelize.define("nurse_hired_jobs", {
        job_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,            
        },
        nurse_id  :{
            type: DataTypes.INTEGER,
            primaryKey: true,
        }
    },
    { timestamps: false } 
    );
}