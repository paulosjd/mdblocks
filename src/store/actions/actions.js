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
                dispatch({type: 'SET_CATEGORIES', value: {categories, allTopics}})
            })
    }
};

export const getMarkdownContent = (slug) => {
    let url = 'http://127.0.0.1:8000/api/topics/' + slug;
    let mdContent = '';
    console.log(url)
    return dispatch => {
        fetch(url)
            .then(response => response.json())
            .then(obj => {
                obj.forEach(obj => mdContent = mdContent + obj.content);
                dispatch({type: 'MD_CONTENT', value: mdContent})
            })
    };
};


export const loading = () => {
    return {
        type: "LOADING"
    };
};


export const ageDown = val => {
    return { type: "AGE_DOWN", value: val };
};




