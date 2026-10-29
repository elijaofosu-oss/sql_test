'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      posts.belongsTo(models.user,{
          foreignkey:'userId',
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      })
    }
  }
  posts.init({
     id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue : DataTypes.UUIDV4
          },
          heading: {
            type: DataTypes.STRING,
            allowNull: false
          },
          summary: {
            type: DataTypes.STRING,
            allowNull: false
          },
          userId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
              model: 'Users',
              key: 'id'
            },
            onDelete: 'CASCADE',
            OnUpdate: 'CASCADE'
          },  
          createdAt: {
            allowNull: false,
            type: DataTypes.DATE
          },
          updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
          }
  }, {
    sequelize,
    modelName: 'posts',
    tableName: 'posts'
  });
  return posts;
};