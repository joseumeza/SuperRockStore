//will need all rocks 
const info = () => 'This is a page for a rock store'

const rocks = () => allRocks

rock: (parent, args) => {
    for( let x = 0; x < allRocks.length; x++) {
        if(allRocks[x].id === args.id) {
            return allRocks[x]
        }
    }
    return null
}
