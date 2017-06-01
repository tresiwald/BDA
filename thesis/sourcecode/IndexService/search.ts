...
const config = {bool: 'AND'};

const searchResults =  searchIndex.search(term, config);

const searchResultsLimited = searchResults.slice(0,100);

const searchResultsToReturn = searchResultsLimited.map((result) => {
    
    let doc = searchIndex.documentStore.getDoc(result.ref)
    return ({
        id: result.ref,
        title: doc.title,
    })
})
...