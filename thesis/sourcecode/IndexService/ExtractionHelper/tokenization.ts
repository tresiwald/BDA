...
let fragmentWords = contentFragments.map((fragment) => {
    return fragment.split(' ').map(
        (token) => {
            elasticlunr.trimmer(
                token.replace("'s ", ' ')
            )
        }
    ).filter((word) => {
            word != ""
        })
    }
)
...