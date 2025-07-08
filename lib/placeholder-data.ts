import { hashSync } from "bcryptjs";

const users = [
    {
        id: '1',
        name: 'Timothy',
        email: 'yeswesurecan@gmail.com',
        password: hashSync('jetlag', 10),
    },
]

export {users};






