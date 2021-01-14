clicks = [
    "90, google.com",
    "100, yahoo.com",
    "50, mail.yahoo.com",
    "75, mail.google.com",
    "100, zapatos.uk"
]


function clickCoutingFunc(clickOrigInputArry) {
    const formatedInputArray= []
    const countTrackingMap = {} 
    
    //creating an input that i want: [{count: 70, domain: ['google', 'com']}, ...]
    clickOrigInputArry.map(inputString => {
        const obj = {}
        const [count, domainString]=inputString.split(',')
        obj['count'] = +count
        obj['domainArray']= domainString.split('.')
        formatedInputArray.push(obj)
    })

    // going through the formatted input and creating the countTrackingMap
    formatedInputArray.forEach(objTally => {
        let tempDomainArray = [...objTally.domainArray]
        objTally.domainArray.forEach(partialDomain => {
            const newDomain = tempDomainArray.join('.').replace(' ', '')
            countTrackingMap[newDomain] = (countTrackingMap[newDomain] ?? 0) + objTally.count
            tempDomainArray.splice(0, 1)
        })
    })
    return countTrackingMap
} 


const calcClickCounts = clickCoutingFunc(clicks)
console.log('\nInput:\n')
console.log(JSON.stringify(clicks, null, 3))
console.log('\noutput:\n')
console.log(JSON.stringify(calcClickCounts, null, 3))

