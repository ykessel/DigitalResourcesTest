import { User } from "../models/User.js";

export const createUser = ((req, res) => {
    const { firstname, lastname, email } = req.body;
    const newUser = { firstname, lastname, email };

    User.create(newUser)
    .then(result => res.status(201).json({ succes_msg: result }))
    .catch((error) => res.status(500).json({ err_msg: error }))
})