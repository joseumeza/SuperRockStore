//will need all rocks 
const {Rock} = require('../models/rock')

const info = () => 'This is a page for a rock store'

const getAllRocks = (parent, args) => Rock.find((err, rocks) => {
    if(err) {
        return err
    } else {
        return rocks
    }
})

const getRockById = (parent, {_id}) => Rock.findById(_id, (err, rock) => {
    if(err) return err
    return rock
})

const getRock = (parent, args) => Rock.findOne({...args}, (err, rock) => {
    if(err) return err
    return rock
})


module.exports = {
    getRockById, getRock, getAllRocks, info 
}