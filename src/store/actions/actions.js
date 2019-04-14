export const setCategories = () => {
    let url = 'http://127.0.0.1:8000/api/categories';
    return dispatch => {
        fetch(url)
            .then(response => response.json())
            .then(cats => {
                let allTopics = cats.map(cat => {
                    return {topics: cat.topics, catName: cat.name}
                });
                let categories = cats.map(cat => cat.name);
                dispatch({type: 'SET_CATEGORIES', value: {categories, allTopics}});
                dispatch({type: 'CAT_TOPICS'})
            })
    }
};

export const getMarkdownContent = (slug) => {
    let url = 'http://127.0.0.1:8000/api/topics/' + slug;
    let mdContent = '';
    return dispatch => {
        fetch(url)
            .then(response => response.json())
            .then(obj => {
                obj.forEach(obj => mdContent = mdContent + obj.content);
                dispatch({type: 'MD_CONTENT', value: mdContent})
            })
    };
};

export const getTextSearchResults = (text) => {
    let url = 'http://127.0.0.1:8000/api/search/' + text;
    console.log(url)
    return dispatch => {
        dispatch({type: "SET_SEARCH_LOADING", value: true });
        fetch(url)
            .then(response => response.json())
            .then(obj => dispatch(
                {type: 'SEARCH_RESULTS', value: obj.map(x => x.content)})
            )
    }
};

export const setSearchRedirect = (val) => {
    return { type: "SEARCH_REDIRECT", value: val }
};

export const setTopicFromSlug = (slug) => {
    return { type: "TOPIC_FROM_SLUG", value: slug };
};

export const setTopic = (val) => {
    return { type: "SET_TOPIC", value: val };
};

export const topicsByCategory = () => {
    return { type: "CAT_TOPICS" }
};

export const setPathname = () => {
    return { type: "SET_PATHNAME" }
};

export const setCategory = (val) => {
    return { type: "SET_CATEGORY", value: val };
};

export const setTextInput = (val) => {
    return { type: 'SET_TEXT_INPUT', value: val}
};

