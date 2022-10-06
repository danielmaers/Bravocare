const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
   sequelize.define('clinician_work_history', {
    work_history_id: {
      type: DataTypes.INTEGER,      
      primaryKey: true,      
  },
  facility_id :{
    type: DataTypes.INTEGER,
    foreignKey: true,
  },
  nurse_id :{
    type: DataTypes.INTEGER,
    foreignKey: true,
  },
  worked_shift : {type: DataTypes.BOOLEAN,},
  call_out: {type: DataTypes.BOOLEAN,},
  no_call_no_show : {type: DataTypes.BOOLEAN,},
 
  },
  { timestamps: false } 
  );
};
