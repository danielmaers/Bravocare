const {DataTypes} = require("sequelize");
module.exports = (sequelize)=>{
     sequelize.define("nurses", {
        nurse_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        nurse_name :{
            type: DataTypes.STRING,
        },   
        nurse_type :{
            type: DataTypes.STRING
        },
    },
    { timestamps: false } 
    );
}