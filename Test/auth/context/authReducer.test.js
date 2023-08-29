import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"

describe('Pruebas en authReducer', () => { 

    test('debe de retornar el estado por defecto', () => { 

        const state = authReducer({logged:false},{});
        expect(state).toEqual({logged:false})

     });
     test('debe de funcionar el login', () => { 

        const action ={
            type:types.login,
            payload:{
                name:"Juan",
                id:'123'
            }
        };
        const state = authReducer({logged:false},action);
        expect(state).toEqual({
            logged: true,
            user:action.payload
        })


 
     });
     test('debe de funcionar el logut', () => { 

        const action ={
            type:types.logout
          
            }
            const state = {
                logged: true, 
                user:{name:"Juan", id:'123' }
            };


        const newState = authReducer(state,action);
        expect(newState).toEqual({logged: false,})
        });

})