import {createSelector} from "reselect"

 const getUsersSelector = (state) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector , (users) => {
   return users.filter(u => true)
})
export const getPageSize = (state) => {
    return state.usersPage.users;
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.getTotalUsersCount;
}
export const getCurrentPage = (state) => {
    return state.usersPage.getCurrentPage;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}
export const countSomethingDifficult = (state) => {
    let count = 23;

}