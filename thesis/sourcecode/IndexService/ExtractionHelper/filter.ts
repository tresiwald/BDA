...
let keyphrasePos = tagger.tag(keyphrase);
...
properNGramPos(pos: any[]): boolean {
    let returnValue = false;
    for (let word of pos) {
        if (['NN', 'NNS', 'NNP', 'NNPS', 'FW'].indexOf(word[1]) == -1) {
            returnValue = true
            break;
        }
    }
    return returnValue;
}
...
properNGramStart(pos: any[]): boolean {
    let returnValue = true;
    if(pos[0][0][0] == pos[0][0][0].toUpperCase()){
    
    }
    else if (['JJ', 'JJR', 'JJS', 'NN', 'NNP', 'NNPS', 'NNS', 'FW'].indexOf(pos[0][1]) == -1) {
        returnValue = false
    }
    return returnValue;
}
...
properNGramEnd(pos: any[]): boolean {
    let returnValue = true;
    if (['JJ', 'JJR', 'JJS', 'NN', 'NNP', 'NNPS', 'NNS', 'FW'].indexOf(pos[pos.length - 1][1]) == -1) {
        returnValue = false
    }
    return returnValue;
}
...
