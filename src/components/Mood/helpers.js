
function addCategoriesToItem(categoryItem) {
    const categorizedItems = [];
    return categorizedItems
}

function getMoodCategories(list) {
    const allcategories = list.map(mood => ({ 'set': mood.set, 'category': mood.category}));
    // const categories = [...new Set(allcategories)];
    const categories = Array.from(new Set(allcategories.map(JSON.stringify))).map(JSON.parse);

    // const categorizedList = categories.map((category) => list.filter(item => item.category === category));

    return categories;
}

export { getMoodCategories };
