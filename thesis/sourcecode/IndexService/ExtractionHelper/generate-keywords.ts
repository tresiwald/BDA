...
fragmentWords.forEach((words:string[]) => {
    var i = 0;
    while (0 < words.length) {
        
        var length = n;
        if (words.length - i <= n) {
            length = words.length - i;
        }
        
        var j = 0;
        while (j < length) {
            let tmpNGramPos = words.slice(0, length - j);
            let ngram = tmpNGramPos.join(' ');
            
            if (keywords.has(ngram)) {
                keywords.set(ngram, keywords.get(ngram) + 1)
            } else {
                keywords.set(ngram, 1)
            }
            j = j + 1
        }
        i = i + 1
    }
}
...