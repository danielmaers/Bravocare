const {DataTypes} = require("sequelize");
module.exports = (sequelize)=>{
     sequelize.define("facilities", {
        facility_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        facility_name :{
            type: DataTypes.STRING,
        }   
    },
    { timestamps: false } 
    );
}