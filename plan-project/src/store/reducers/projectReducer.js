const initState = {
    projects: [
        { id: '1', title: '1Help me find peach', content: 'lorem ipsum bla bla' },
        { id: '2', title: '2Help me find peach', content: 'lorem ipsum bla bla' },
        { id: '3', title: '3Help me find peach', content: 'lorem ipsum bla bla' },
        { id: '4', title: '4Help me find peach', content: 'lorem ipsum bla bla' },
        { id: '5', title: '5Help me find peach', content: 'lorem ipsum bla bla' },
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log("Error createing project");
            return state;
        default:
            return state;
    }
};

export default projectReducer;