import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { Navbar } from "../../../src/ui/components/Navbar";
import { fireEvent, render, screen } from "@testing-library/react";


const mockedUseNavigate=jest.fn();

jest.mock('react-router-dom',()=>({

    ...jest.requireActual("react-router-dom"),

    useNavigate: ()=>mockedUseNavigate
}));

describe('Pruevas en Navbar', () => { 

    const contextValue ={
        logged: true,
        user:{name:'david', id:"abc"},
        logout:jest.fn()
    }

    beforeEach(()=>jest.clearAllMocks());

    test('debe de mostrar el usuario loggeado', () => {

        render(<AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Navbar/>
            </MemoryRouter>
        </AuthContext.Provider>
        );

        expect(screen.getByText("david")).toBeTruthy();




    });

    test('debe de llamar el logout y navigate', () => {

        render(<AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Navbar/>
            </MemoryRouter>
        </AuthContext.Provider>
        );

    const logoutBtn =screen.getByRole('button');

    fireEvent.click(logoutBtn);
    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login',{
        replace:true
    });



    });


});


