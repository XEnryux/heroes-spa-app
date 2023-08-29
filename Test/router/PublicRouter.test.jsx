import { render, screen } from "@testing-library/react"
import { PublicRouter } from "../../src/router/PublicRouter"
import { AuthContext } from "../../src/auth"
import { MemoryRouter, Route, Routes } from "react-router-dom";



describe('pruebas en PublicRouter', () => { 

    test('debe de mostrar el children, si no esta identificado', () => { 

        const contextValue = {logged: false }

        render(
        <AuthContext.Provider value={contextValue}> 
             <PublicRouter>
                <h1>Ruta publica</h1>
             </PublicRouter>
        </AuthContext.Provider>

      );

      expect(screen.getByText('Ruta publica')).toBeTruthy();
    });

    test('debe de mostrar el navigate, si esta identificado', () => { 

        const contextValue = {logged: true, user:{name:'David', id:'abc'}}
    
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route element={<PublicRouter/>}>
                            <Route path="login" element={<h1>Ruta publica</h1>}/>
                        </Route>
                        <Route path="/" element={<h1>Marvel page</h1>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
      );
    
      expect(screen.getByText('Marvel page')).toBeTruthy();
    });
 });