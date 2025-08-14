const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllMessages(){
    return await prisma.message.findMany({
        orderBy: { createdAt: "asc" },
    include: { sender: true }
    });
}

async function createMessage({ content, senderId }){
    return await prisma.message.create({
    data: {
      content,
      senderId
    },
    include: { sender: true }
    })
}

module.exports = { getAllMessages, createMessage };