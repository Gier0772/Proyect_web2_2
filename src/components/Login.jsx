import React, { useState } from "react";
import Imagen from '../assets/logo_sin_fondo.png';
import ImagenProfile from '../assets/cliente2.png';
import appFirebase from "../credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase);

const Login = () => {
    const [registrando, setRegistrando] = useState(false);
    const [mostrarContraseña, setMostrarContraseña] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setMostrarContraseña(!mostrarContraseña);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const correo = email;
        const contraseña = password;
        
        if (registrando) {
            try {
                await createUserWithEmailAndPassword(auth, correo, contraseña);
            } catch (error) {
                alert("Asegúrese de que la contraseña tenga más de 8 caracteres");
            }
        } else {
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña);
            } catch (error) {
                alert("El correo o la contraseña son incorrectas");
            }
        }
    };

    return (
        <div className="container full-height">
            <div className="row align-items-center justify-content-center full-height">
                {/* Columna Formulario */}
                <div className="col-md-8 col-lg-6 col-xl-6 col-12 my-auto">
                    <div className="padre">
                        <div className="card card-body shadow-lg">
                            <img src={ImagenProfile} alt="" className="estilo-profile" />
                            <form onSubmit={handleSubmit}>
                                <input 
                                    type="text" 
                                    placeholder="Ingresar Email" 
                                    className="cajatexto" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                                <div className="password-container">
                                    <input
                                        type={mostrarContraseña ? "text" : "password"}
                                        placeholder="Ingresar Contraseña"
                                        className="cajatexto"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required 
                                    />
                                    <button
                                        type="button"
                                        className="password-toggle-icon"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {mostrarContraseña ? "🙈" : "👁️"}
                                    </button>
                                </div>
                                <button className="btnform">{registrando ? "Regístrate" : "Inicia Sesión"}</button>
                            </form>
                            <h4 className="texto">
                                {registrando ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}
                                <button className="btnswicht" onClick={() => setRegistrando(!registrando)}>
                                    {registrando ? "Inicia sesión" : "Regístrate"}
                                </button>
                            </h4>
                        </div>
                    </div>
                </div>
                {/* Columna Imagen */}
                <div className="col-md-4 col-lg-6 col-xl-6 col-12 text-center my-auto">
                    <img src={Imagen} alt="" className="tamaño-imagen" />
                </div>
            </div>
        </div>
    );
};

export default Login;
