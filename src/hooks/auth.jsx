import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData ] = useState({});
    const [moviesNotes, setMoviesNotes ] = useState({});

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email , password });

            const { user, token } = response.data;

            localStorage.setItem("@rocketMovies:user", JSON.stringify(user))
            localStorage.setItem("@rocketMovies:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({ user, token });
        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar.");
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@rocketMovies:user")
        localStorage.removeItem("@rocketMovies:token")

        setData({});
    }
    
    async function updateProfile({ user, avatarFile }) {
        try {

           if(avatarFile) {
            const fileUploadForm = new FormData()
            fileUploadForm.append("avatar", avatarFile)
    
            const response = await api.patch("/users/avatar", fileUploadForm)
            user.avatar = response.data.avatar
           } 
        
            await api.put("/users", user)
            localStorage.setItem("@rocketMovies:user", JSON.stringify(user))

            setData({ user, token: data.token  })
            alert("Cadastro atualizado!")

        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível atualizar.");
            }
        }
    }

    // async function showMovieNotes() {
    //     await api.get("/movieNotes")
    //     .then(notes => JSON.stringify(notes))
    //     .then(notes => {
    //         localStorage.setItem("@rocketMovies:notes", notes)
    //     })

    // }

    useEffect(() => {
        const notes = localStorage.getItem("@rocketMovies:notes");
        setMoviesNotes(JSON.parse(notes))
    }, [])

    useEffect(() => {

        const token = localStorage.getItem("@rocketMovies:token");
        const user = localStorage.getItem("@rocketMovies:user");
    
        if(token && user) {
            
         api.defaults.headers.common['Authorization']  = `Bearer ${token}`
    
          setData({
            token,
            user: JSON.parse(user)
          });
        }
    }, []);
    
    return (
        <AuthContext.Provider value={{ signIn, signOut, updateProfile, user: data.user}}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };


