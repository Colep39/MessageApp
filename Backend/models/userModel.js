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

async function updateUserPassword(id, newPassword){
    return await prisma.user.update({
        where: { id },
        data: { password: newPassword }
    })
}
async function updateUserProfile(id, data) {
  return await prisma.user.update({
    where: { id },
    data,
  });
}



module.exports = { createUser, findUserByUsername, findUserById, updateUserPassword, updateUserProfile };