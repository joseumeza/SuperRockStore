
const {Rock} = require('../models/rock');

const createRock = (_, args) => {
    let newRock = new Rock({
        ...args
    });
    newRock.save()
    return newRock
}

const updateRockById = (_, args) => Rock.findByIdAndUpdate({_id: args._id}, {...args}, {useFindAndModify: false}, (err, rock) => {
    if(err) return err
    return rock
})

const deleteRockById = (_, {_id}) => Rock.findByIdAndDelete(_id, (err, rock) => {
    if(err) return err;
    console.log(rock)
    return rock

})


module.exports = {
    createRock, updateRockById, deleteRockById
}