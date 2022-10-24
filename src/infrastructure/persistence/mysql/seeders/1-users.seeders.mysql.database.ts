import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('users', [
            {
                "idUser": 1,
                "name": "Eduardo Alexandre",
                "email": "eduardoa@teste.com",
                "apartment": 10,
                "password": "asdfghjk",
                "photo": "google.com/photo",
                "createdAt": "2022-10-24 11:59:46",
                "updatedAt": "2022-10-24 11:59:46"
            },
            {
                "idUser": 2,
                "name": "Eduardo Quaresimin",
                "email": "eduardoq@teste.com",
                "apartment": 20,
                "password": "asdfghjk",
                "photo": "google.com/photo",
                "createdAt": "2022-10-24 11:59:46",
                "updatedAt": "2022-10-24 11:59:46"
            },
            {
                "idUser": 3,
                "name": "Johnnatan Rodrigues",
                "email": "johnnatan@teste.com",
                "apartment": 30,
                "password": "asdfghjk",
                "photo": "google.com/photo",
                "createdAt": "2022-10-24 11:59:46",
                "updatedAt": "2022-10-24 11:59:46"
            },
            {
                "idUser": 4,
                "name": "Kevin Halley",
                "email": "kevin@teste.com",
                "apartment": 40,
                "password": "asdfghjk",
                "photo": "google.com/photo",
                "createdAt": "2022-10-24 11:59:46",
                "updatedAt": "2022-10-24 11:59:46"
            },
            {
                "idUser": 5,
                "name": "Laura Santos",
                "email": "laura@teste.com",
                "apartment": 50,
                "password": "asdfghjk",
                "photo": "google.com/photo",
                "createdAt": "2022-10-24 11:59:46",
                "updatedAt": "2022-10-24 11:59:46"
            }
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkDelete('users', {})
    }
}