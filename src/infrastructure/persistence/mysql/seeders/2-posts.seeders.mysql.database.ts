import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('posts', [
            {
                "idPost": 1,
                "content": "Aqui tem um comentário bacana",
                "createdAt": "2022-10-24 11:59:46",
                "updatedAt": "2022-10-24 11:59:46",
                "user_id": 1
            },
            {
                "idPost": 2,
                "content": "Aqui tem um comentário bacana",
                "createdAt": "2022-10-24 11:59:46",
                "updatedAt": "2022-10-24 11:59:46",
                "user_id": 2
            },
            {
                "idPost": 3,
                "content": "Aqui tem um comentário bacana",
                "createdAt": "2022-10-24 11:59:46",
                "updatedAt": "2022-10-24 11:59:46",
                "user_id": 3
            },
            {
                "idPost": 4,
                "content": "Aqui tem um comentário bacana",
                "createdAt": "2022-10-24 11:59:46",
                "updatedAt": "2022-10-24 11:59:46",
                "user_id": 4
            },
            {
                "idPost": 5,
                "content": "Aqui tem um comentário bacana",
                "createdAt": "2022-10-24 11:59:46",
                "updatedAt": "2022-10-24 11:59:46",
                "user_id": 5
            }
        ])
    },

    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkDelete('posts', {});
    }
}