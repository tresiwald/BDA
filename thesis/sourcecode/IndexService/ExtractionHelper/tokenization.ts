...
let fragmentPhrases = contentFragments.map((fragment) => {
    return fragment.split(' ').map(
        (token) => {
            elasticlunr.trimmer(
                token.replace("'s ", ' ')
            )
        }
    ).filter((phrase) => {
            phrase != ""
        })
    }
)
...