const INITIAL_STATE={
    disp:""
}

function LoginPagereducer(state=INITIAL_STATE,action){
   switch(action.type){
        case "search_set":
            return {...state,disp:action.payload}
        default:
            return state;    
   }
}

export default LoginPagereducer;