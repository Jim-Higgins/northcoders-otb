function herdTheBabies(babies){
    let result = []
    babies = babies.split('')

    for (let index = 0; index < babies.length; index++) {
        const element = babies[index];
        if(result.includes(element.toUpperCase() || element.toLowerCase())){
            result.indexOf()
        }
        
    }
    return babies.split('').sort((a ,b) => {
        a.toLowerCase() > b.toLowerCase()
    }).join('')
}

function compareString(babies){
    let lowercaseBabies = babies.toLowerCase()
    lowercaseBabies.compareString(babies)
}

module.exports = { herdTheBabies}