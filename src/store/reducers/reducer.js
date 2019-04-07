const initialState = {
    categories: [],
    activeCategory: '',
    allTopics: [],
    filteredTopics: [],
    activeTopic: '',
    mdContent: '',
};

const rootReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case "SET_CATEGORIES":
            newState.categories = action.value.categories;
            newState.allTopics = action.value.allTopics;
            break;
        case "CAT_TOPICS":
            const filtered = newState.allTopics.filter(
                topic => topic.catName === newState.activeCategory);
            newState.filteredTopics = filtered.topics ? filtered.topics :[];
            break;
        case "SET_TOPIC":
            newState.activeTopic = action.value;
            break;
        case "SET_CATEGORY":
            newState.activeCategory = action.value;
            break;
        case "MD_CONTENT":
            newState.mdContent = action.value;
            break;
    }
    return newState;
};

export default rootReducer;