import React, {useState, useMemo} from "react";
import UserList from "./UserList";

const RenderingDemo = () => {
    const [showUsers, setShowusers] = useState(false);

    const handleToggleUsers = () => setShowusers(!showUsers);

    return(
        <div>
            <h1>Demostración de tecnicas de Rendering</h1>
            <button onClick={handleToggleUsers}>
                {showUsers ? 'Ocultar usuarios' : 'Mostrar Usuarios'}
            </button>
            {showUsers && <UserList/>}
        </div>
    );
};

export default RenderingDemo;

