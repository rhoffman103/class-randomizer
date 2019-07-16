export const RANDOMIZE_GROUPS = 'RANDOMIZE_GROUPS';
export const GROUP_CHECKBOXES = 'GROUP_CHECKBOXES'

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

const groupCheckboxColumns = (action) => {
    const colList = [];
    const orderClasses = ['order-1', 'order-3 order-md-2', 'order-2 order-md-3']
    
    if (action.state.roster) {
        const cols = 3
        const roster = action.state.roster;
        const decrementingRoster = [...roster];
        const studentsPerCol = Math.ceil(roster.length / cols);
        for (let i = 0; i < cols; i++) {
            const group = [];
            for (let j = 0; j < studentsPerCol; j++) {
                if (decrementingRoster.length) group.push(decrementingRoster.shift());
            }
            colList.push({ group, orderClasses: orderClasses[i] });
        }
    };
    return colList;
};

const groupsReducer = (state, action) => {
    switch(action.type) {
        case RANDOMIZE_GROUPS:
            return randomizeGroups(action);
        case GROUP_CHECKBOXES:
            return groupCheckboxColumns(action);
        default:
            return state;
    }
};

export default groupsReducer;