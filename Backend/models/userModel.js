const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createUser( {firstname, lastname, username, password }){
    return await prisma.user.create({
        data: { firstname, lastname, username, password },
    });
}

async function getUsers(username) {
    return await prisma.user.findMany({
        where: { username },
    })
}

module.exports = { createUser, getUsers };