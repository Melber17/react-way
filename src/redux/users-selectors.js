export const getUsers = (state) => {
    return state.usersPage.users;
}

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