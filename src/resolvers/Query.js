//will need all rocks 
const {Rock} = require('../models/rock')

const info = () => 'This is a page for a rock store'

const rocks = (parent, args) => Rock.find((err, rocks) => {
    if(err) {
        return err
    } else {
        console.log('we are running this correctly')
        return rocks
    }
})

const rock = (parent, {_id}) => Rock.findById(_id, (err, rock) => {
    if(err) return err
    return rock
})

module.exports = {
    rocks, rock
}
//  {
    //     info: () => 'This is a page for a rock store',
    //     rocks: () => allRocks,
    //     rock: (parent, args) => {
    //         for( let x = 0; x < allRocks.length; x++) {
    //             if(allRocks[x].id === args.id) {
    //                 return allRocks[x]
    //             }
    //         }
    //         return null
    //     }

    // },