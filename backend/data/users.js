import bcrypt from 'bcryptjs'

const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync('123456' , 10),
        isAdmin: true
    },
    {
        name: "Semmwa Wilon",
        email: "wilsonsemmwa@gmail.com.com",
        password: bcrypt.hashSync('123456' , 10)
    },
    {
        name: "Nendir Wilson",
        email: "nen@gmail.com",
        password: bcrypt.hashSync('123456' , 10)
    },
]

export default users