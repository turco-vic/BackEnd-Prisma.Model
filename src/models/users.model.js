import prisma from "../../prisma/prisma.js";

class UserModel {
    // Obter todos os usuários
    async findAll() {
        const users = await prisma.user.findMany({});

        return {
            total: users.length,
            users,
        };
    }

    // Criar um novo usuário
    async create(data) {
        const user = await prisma.user.create({
            data,
        });

        return user;
    }
}

export default new UserModel();