export const initialState = {
    user: null,
    token:null,
    playlist:[],
    playing:false,
    item:null,
}

const reducer = (state,action) => {
    console.log(action);

    switch (action.type){
        case 'SET USER':
            return{
                ...state,
                user:action.user,
            };
        case 'SET TOKEN':
            return{
                ...state,
                token: action.token
            };
        case 'SSET PLAYLISTS' :
            return{
                ...state,
                playlists: action.playlists,
            };
        case 'SET DISCOVER WEEKLY':
                return{
                    ...state,
                    discover_weekly: action.discover_weekly,
                };
            default:
                return state;
        
    }
};

export default reducer;