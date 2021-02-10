let users = [
    {
        id: "1",
        name: "Kashif Hussain"
    }, {
        id: "2",
        name: "Touseeq"
    }, {
        id: "3",
        name: "Adnan"
    },
]

// get all users
export const getUsers = (req, res) => {
    res.send(users)
}

// delete all users
export const deleteUsers = (req, res) => {
    users = []
    res.status(200).json({ success: "removed all users" })
}

// get single user by id
export const getUser = (req, res) => {
    const id = req.query.id
    const user = users.find(user => user.id === id)
    user ? res.status(200).json(user) : res.status(404).json({ error: "user not found" })
}

// delete user by id
export const deleteUser = (req, res) => {
    const id = req.query.id
    const index = users.findIndex((ele => ele.id === id))
    if (index !== -1) {
        users.splice(index, 1)
        res.status(200).json({ success: "user removed" })
    } else {
        res.status(404).json({ error: "user not found" })
    }

}

// add new user 
export const createUser = (req, res) => {
    const user = req.body
    users.push(user)
    res.send(users)
}

// update user by id
export const updateUser = (req, res) => {
    const id = req.query.id
    const updatedUser = req.body

    users.map(user => {
        if (user.id === id) {
            user.name = updatedUser.name
        }
        return user
    })
    res.send(users)
}