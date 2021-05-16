
const {Rock} = require('../models/rock');

const createRock = (_, args) => {
    let newRock = new Rock({
        ...args
    });
    newRock.save();
    return newRock
}


module.exports = {
    createRock
}
// {
//     createRock: (parent, args) => {
//         const rock = {
//             ...args,
//             id: `rock-${rockCount++}`
//         }
//         allRocks.push(rock)
//         return rock
//     },
//     updateRock: (parent, args) => {
//         for(let x = 0; x < allRocks.length; x++) {
//             if(allRocks[x].id === args.id) {
//                 allRocks[x] = {
//                     ...args
//                 }
//                 return allRocks[x]
//             }
//         }
//         return null;
//     },
//     deleteRock: (parent, args) => {
//         for(let x = 0; x < allRocks.length; x++) {
//             if(allRocks[x].id === args.id) {
//                 let swap = allRocks[x];
//                 allRocks[x] = allRocks[allRocks.length - 1]
//                 allRocks.pop()
//                 return swap
//             }
//         }
//         return null;

//     }
// }