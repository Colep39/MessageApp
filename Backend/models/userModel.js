const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createUser( {firstname, lastname, username, password }){
    return await prisma.user.create({
        data: { firstname, lastname, username, password },
    });
}

async function findUserByUsername(username){
    return await prisma.user.findUnique({
        where: { username },
    });
}

async function findUserById(id){
    return await prisma.user.findUnique({
        where: { id }
    });
}

module.exports = { createUser, findUserByUsername, findUserById };