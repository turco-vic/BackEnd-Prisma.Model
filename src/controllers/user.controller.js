// import UserModel from "../models/game.model.js";

class UserController {

    async findAll(req, res) {
        const { name, email } = req.query;
        try {
            const users = await UserModel.findAll(name, email, password);

            return res.status(200).json(users);
        } catch (error) {
            console.error("Error finding all users", error);
            return res
                .status(500)
                .json({ message: "Error finding all users", error });
        }
    }

    async create(req, res) {
        try {
            const { name, email, password } = req.body;

            // Validação básica
            if (!name || !email || !password) {
                return res.status(400).json({
                    error: "Name, email, and password fields are required!",
                });
            }

            const data = {
                name,
                email,
                password,
            };

            const newUser = await UserModel.create(data);

            return res.status(201).json({
                message: "New user successfully created!",
                newUser,
            });
        } catch (error) {
            console.error("Error creating a new user", error);
            res.status(500).json({ error: "Error creating a new user" });
        }
    }
}

export default new UserController();