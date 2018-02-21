module.exports = function(sequelize, DataTypes) {

  var Employee = sequelize.define("Employee", {
    // Giving the Author model a name of type STRING
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    Age: {
      type: DataTypes.INTEGER
    },
    jobTitle: {
      type: DataTypes.STRING
    }
    });

  
  return Employee;
};
