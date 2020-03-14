const users = [];

const addUser = ({id, name, room}) => {
    name = name.trim().toLowerCase()
    const existingUser = users.find(user => user.room === room && user.name === name);
    if (existingUser) {
        return {error: 'User with same name is existing'}
    }

    const user = {id, name, room};
    users.push(user);
    return {user};
}

const removeUser = (id) => {
    const index = users.indexOf(user => user.id === id)
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => users.find(user => user.id === id);

const getUsersInRoom = (room) => users.filter(user => user.room === room);
module.exports = {
    users, getUser, getUsersInRoom, addUser, removeUser
}