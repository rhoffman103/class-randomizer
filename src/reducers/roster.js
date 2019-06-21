import rosters from '../rosters';

const rosterReducer = (state, action) => {
    switch(action.type) {
        case 'SET_ROSTER':
            return rosters[action.rosterIndex];
        default:
            return state;
    };
};

export default rosterReducer;