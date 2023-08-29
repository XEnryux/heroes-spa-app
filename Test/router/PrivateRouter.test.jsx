import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth"
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { PrivateRouter } from "../../src/router/PrivateRouter";

describe('Pruebas al PrivateRoute', () => { 


    test('debe de mostrar el children, si esta identificado', () => { 


        Storage.prototype.setItem= jest.fn();

        const contextValue = {
            logged: true,
             user:{name:'David', 
             id:'abc'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRouter>
                        <h1>Ruta privada</h1>
                    </PrivateRouter>
                </MemoryRouter>
            </AuthContext.Provider>

        );

      expect(screen.getByText('Ruta privada')).toBeTruthy();
      expect(localStorage.setItem).toHaveBeenCalledWith('lastPath',"/");

     })

 })