    const filterConcepts = (keyWords: KeyWord[]) => {
        let elements = keyWords.reduce((result: Object, item: KeyWord) => {
            result[item.word] = item
            return result
        }, {})
        keyWords.forEach((element) => {
            const splitElement = element.word.split(" ")
            const lengthElement = splitElement.length
            if (lengthElement > 1 && elements[splitElement.join(" ")]) {
                console.log(splitElement)
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
                }

                const max = bag.sort((a:string, b:string) => {
                    if(elements[a].totalValue > elements[b].totalValue){
                        return 1
                    }else if (elements[a].totalValue > elements[b].totalValue){
                        return -1
                    }else {
                        if(a.length > b.length){
                            return 1
                        }else{
                            return -1
                        }
                    }
                }).reverse()[0]
                bag.forEach((el:string) => {
                    if(el != max){
                        delete elements[el]
                    }
                })
            }
        })
        return Object.keys(elements).map(key => elements[key]);
    }