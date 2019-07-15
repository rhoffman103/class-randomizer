import rosters from '../rosters';

export const SET_ROSTER = 'SET_ROSTER';
export const TOGGLE_ATTENDANCE = 'TOGGLE_ATTENDANCE';

const setAttendance = ({ studentId, rosterState }) => {
    const cohort = rosterState.cohort;
    const updatedRoster = rosterState.roster.map(student => {
        if (student.id === studentId) student.isPresent = !student.isPresent;
        return student;
    })
    return { cohort, roster: updatedRoster };
}

const rosterReducer = (state, action) => {
    switch(action.type) {
        case SET_ROSTER:
            return rosters[action.rosterIndex];
        case TOGGLE_ATTENDANCE:
            return setAttendance(action);
        default:
            return state;
    };
};

export default rosterReducer;