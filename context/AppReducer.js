

export const AppReducer = (state , action)=>{
    switch(action.type) {
        case 'OPENMENU' : {
            return {...state ,  activeMenu : action.payload}
        }
        case 'CLOSEMENU' : {
            return {...state ,  activeMenu : action.payload}
        }
    }
}