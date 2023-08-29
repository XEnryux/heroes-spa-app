
import { MemoryRouter } from "react-router-dom"
import { AuthContext, LoginPage } from "../../src/auth"
import { render, screen} from "@testing-library/react"
import { AppRouter } from "../../src/router/AppRouter"
import { MarvelPage } from "../../src/Heroes"



describe('Pruebas en AppRouter', () => {

    test('debe de mostrar el login si no esta autenticado', () => { 

        const contextValue = {
            logged: false,
        }

        render(
         <MemoryRouter initialEntries={['/marvel']}>
              <AuthContext.Provider value={contextValue}>
                <LoginPage/>
            </AuthContext.Provider>
         </MemoryRouter>
          
        );
 expect(screen.getAllByText("Login").length).toBe(2);
    
     });


     test('debe de mostrar el marvel page si esta autenticado', () => { 

        const contextValue = {
            logged: true,
            user:{name:'David', 
            id:'abc'
           }
        }

        render(
         <MemoryRouter initialEntries={['/marvel']}>
              <AuthContext.Provider value={contextValue}>
              <MarvelPage/>
            </AuthContext.Provider>
         </MemoryRouter>
          
        );

        expect(screen.getByText("Marvel Comics")).toBeTruthy();

        

     });
})

