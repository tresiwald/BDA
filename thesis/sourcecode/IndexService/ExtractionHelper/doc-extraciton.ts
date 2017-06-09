...
for (var doc in this.freqIndex[keyphrase].docs){
    let keyphraseDocFreq = this.freqIndex[keyphrase].f
    let indexLength = this.index.documentStore.length

    let keyphraseIdf = 1 + Math.log((1 + indexLength) / (1 + keyphraseDocFreq))
    let keyphraseTf = this.freqIndex[keyphrase].docs[doc] 
    let lengthNorm = 1 / Math.pow(document.length, (1/3))

    let score = keyphraseTf *keyphraseIdf * lengthNorm 
    ...
}
...