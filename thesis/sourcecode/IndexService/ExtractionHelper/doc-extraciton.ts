...
for (var doc in this.freqIndex[keyword].docs){
    let keywordDocFreq = this.freqIndex[keyword].f
    let indexLength = this.index.documentStore.length

    let keywordIdf = 1 + Math.log((1 + indexLength) / (1 + keywordDocFreq))
    let keywordTf = this.freqIndex[keyword].docs[doc] 
    let lengthNorm = 1 / Math.pow(document.length, (1/3))

    let score = keywordTf * keywordIdf * lengthNorm 
    ...
}
...