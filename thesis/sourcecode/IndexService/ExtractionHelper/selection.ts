...
let elements = keyphrases.reduce((result: Object, item: any) => {
   ...
}, {})
...
keyphrases.forEach((element) => {
    const splitElement = element.word.split(" ")
    const lengthElement = splitElement.length
    if (lengthElement > 1) {
        const bag = []
        bag.push(splitElement.join(" "))
        for (let index = 0; index < lengthElement; index++) {
            for (let length = 1; length <= lengthElement - 1; length++) {
                if ((index + length) <= lengthElement) {
                const concept = splitElement.slice(index, index + length).join(" ")
                if(elements[concept]){
                    bag.push(concept)
                }
            }
        }
        ...
        const max = bag.sort((a:string, b:string) => {
            ...
        }).reverse()[0]
        bag.forEach((el:string) => {
            if(el != max){
                delete elements[el]
            }
        })
    }
})
...
return Object.keys(elements).map(key => elements[key]);
...