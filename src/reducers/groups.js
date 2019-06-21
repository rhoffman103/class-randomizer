const uniqueId = () => `id-${Math.random().toString(36).substr(2, 16)}`;

const shuffle = (array) => {
        
    let mutatedArray = array.map(element => element)
    let currentIndex = mutatedArray.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = mutatedArray[currentIndex];
        mutatedArray[currentIndex] = mutatedArray[randomIndex];
        mutatedArray[randomIndex] = temporaryValue;
    }

    return mutatedArray;
};

const randomizeGroups = ({ groupSize = 0, rosterState = [] }) => {

    const numOfGroups = Math.floor(rosterState.length / groupSize);
    const remainder = rosterState.length % groupSize;
    const decrementingStudents = shuffle(rosterState);
    const groups = [];

    for (let i = 0; i < numOfGroups; i++) {
        const group = {
            id: uniqueId(),
            groupNumber: i + 1,
            members: [],
        }
        for (let j = 0; j < groupSize; j++) {
            group.members.push(decrementingStudents.pop())
        }
        groups.push(group);
    };

    if (remainder > 0) {
        const decrementingGroups = shuffle(groups)

        for (let i = 0; i < remainder; i++) {
            const randomGroupIndex = groups.indexOf(decrementingGroups.pop())
            groups[randomGroupIndex].members.push(decrementingStudents.pop())
        }
    };

    return groups;
};

const groupsReducer = (state, action) => {
    switch(action.type) {
        case 'RANDOMIZE_GROUPS':
            return randomizeGroups(action);
        default:
            return state;
    }
}

export default groupsReducer;