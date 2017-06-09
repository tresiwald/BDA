...
index.searchIndex.addDoc({
   "id": doc.id,
   "length": doc.length,
   "body": doc.body,
   "title": doc.title,
})
...
const keyphrases = ExtractionService.getPossibleKeywords(doc.body)
...         
keyphrases.forEach((keyphrase) =>{
    if(index.freqIndex[keyphrase.ngram]){
        let c1:any = this.freqIndex[keyphrase.ngram]
        if (c1.docs[id] != nGram.count) {
            index.freqIndex[nGram.ngram].f = c1.f + (nGram.count - c1.docs[id])
            c1.docs[id] = nGram.count
            index.freqIndex[nGram.ngram].docs = c1.docs
        } else {
            c1.docs[id] = nGram.count
            index.freqIndex[nGram.ngram].f = c1.f + nGram.count
            index.freqIndex[nGram.ngram].docs = c1.docs
        }
    }else{
        let docs = {}
        docs[id] = keyphrase.count
        this.freqIndex[keyphrase.ngram] = {f : 1, docs: docs};
    }
})
...