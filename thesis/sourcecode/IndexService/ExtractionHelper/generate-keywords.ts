...
fragmentPhrases.forEach((phrase:string[]) => {
    var i = 0;
    while (0 < phrase.length) {
        
        var length = n;
        if (phrase.length - i <= n) {
            length = phrase.length - i;
        }
        
        var j = 0;
        while (j < length) {
            let tmpNGramPos = phrase.slice(0, length - j);
            let ngram = tmpNGramPos.join(' ');
            
            if (keyphrases.has(ngram)) {
                keyphrases.set(ngram, keyphrases.get(ngram) + 1)
            } else {
                keyphrases.set(ngram, 1)
            }
            j = j + 1
        }
        i = i + 1
    }
}
...