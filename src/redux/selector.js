export const selectUser = state => state.user.contacts;
export const selectContacts = state => state.user.contacts;
export const selectIsLoading = state => state.user.isLoading;
export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectIsRefreshing = state => state.user.isRefreshing;

export const selectToken = state => state.user.token;

export const selectError = state => state.user.error;
export const selectFilter = state => state.users;
