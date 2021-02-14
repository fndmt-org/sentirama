
function addCategoriesToItem(categoryItem) {
    const categorizedItems =[]
    return categorizedItems
}

function buildGroupedItemLists(categoriesList) {
    const categorizedList = categoriesList.map((categoryItem) => addCategoriesToItem());
    return categorizedList
}

export { buildGroupedItemLists };
