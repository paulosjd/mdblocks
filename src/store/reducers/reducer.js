const initialState = {
    categories: [],
    activeCategory: 'Python',
    allTopics: [],
    filteredTopics: [],
    activeTopic: '',
    mdContent: '',
    topicName: '',
    topicSlug: '',
};

const rootReducer = (state = initialState, action) => {
    const newState = { ...state };
    console.log(newState.allTopics)
    switch (action.type) {
        case "SET_CATEGORIES":
            newState.categories = action.value.categories;
            newState.allTopics = action.value.allTopics;
            break;
        case "CAT_TOPICS":
            const catIndex = newState.allTopics.findIndex(
                x => x.catName === newState.activeCategory);
            newState.filteredTopics = newState.allTopics[catIndex].topics;
            break;
        case "SET_TOPIC":
            newState.activeTopic = action.value;
            break;
        case "TOPIC_FROM_SLUG":
            newState.topicSlug = action.value;
            break;
        case "SET_CATEGORY":
            newState.activeCategory = action.value;
            break;
        case "MD_CONTENT":
            newState.mdContent = action.value;
            break;
    }
    if (newState.topicSlug && newState.allTopics.length > 0 && !newState.topicName) {
        let topics = newState.allTopics.map(x => x.topics).flat()
        let ind = topics.findIndex(
            x => x.slug === newState.topicSlug);
        newState.topicName = topics[ind].name
        newState.allTopics.forEach(obj => {if (obj.topics.map(x => x.slug).includes(newState.topicSlug)){
            newState.activeCategory = obj.catName
        }})
        console.log(newState.activeCategory)
    }
    return newState;
};

export default rootReducer;