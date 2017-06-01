...
index.searchIndex.addDoc({
   "id": doc.id,
   "length": doc.length,
   "body": doc.body,
   "title": doc.title,
})
...
const keywords = ExtractionService.getPossibleKeywords(doc.body)
...
keywords.forEach((keyword) =>{
    if(index.freqIndex[keyword.ngram]){
        let c1:any = this.freqIndex[keyword.ngram]
        c1.docs[id] = keyword.count
        this.freqIndex[keyword.ngram].f = c1.f + 1
        this.freqIndex[keyword.ngram].docs = c1.docs
    }else{
        let docs = {}
        docs[id] = keyword.count
        this.freqIndex[keyword.ngram] = {f : 1, docs: docs};
    }
})
...