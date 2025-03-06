

export const appReducer = (state , action)=>{
    switch(action.type) {
        case 'SHOWMENU' : {
            return {...state ,  activeMenu : action.payload}
        }
    }
}