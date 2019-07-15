const uniqueId = () => `id-${Math.random().toString(36).substr(2, 16)}`;

const shuffle = (arr) => {
    const clonedArray = [...arr];
    return clonedArray.sort(() => 0.5 - Math.random());
};

const randomizeGroups = ({ groupSize = 0, rosterState = [] }) => {

    const presentList = rosterState.filter((student) => student.isPresent)
    const headCount =  presentList.length
    const numOfGroups = Math.floor(headCount / groupSize);
    const remainder = headCount % groupSize;
    const decrementingStudents = shuffle(presentList);
    const groups = [];

    if (groupSize !== '0') {

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