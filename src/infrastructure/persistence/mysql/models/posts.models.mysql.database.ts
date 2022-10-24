import { MysqlDatabase } from "../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDatabase.getInstance().createModel('post', {
    idPost: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: Sequelize.DataTypes.STRING,
    user_id: Sequelize.DataTypes.INTEGER
})