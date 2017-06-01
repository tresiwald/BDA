...
let regex = /[\.|\r\n|!|?]\s./g
let lowerContent = content.replace(regex, 
    function(a){
        return a.toLowerCase();
    }
)
...
let regex = /"[^"]*"|[^.,!?()'"|\r\n|\r|\n]+/g
let contentFragments = lowerContent.match(regex)
...