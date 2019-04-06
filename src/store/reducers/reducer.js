const initialState = {
    topicSegments: '',
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
        case "MD_CONTENT":
            console.log(action)
            console.log(action.value)
            newState.mdContent = action.value;
            break;
    }
    return newState;
};

export default rootReducer;