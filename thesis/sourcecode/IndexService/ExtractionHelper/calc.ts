...
let indexLength = this.fulltextIndex.documentStore.length
...
let keyphraseDocFreq = this.freqIndex[keyphrase.ngram].f
...
let length = content.split(' ').length
...
let keyphraseIdf = 1 + Math.log((1 + indexLength) / (1 + keyphraseDocFreq))
...
let keyphrasedTf = keyphrase.count 
...
let lengthNorm = 1 / length
...
let score = keyphraseTf * keyphraseIdf * lengthNorm
...