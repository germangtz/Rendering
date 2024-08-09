import React, {useMemo} from "react";
import User from './User';
import '../styles/styles.css';

const UserList = () => {
    const users = useMemo( ()=> [
        {id: 1, name: 'Juan Perez'},
        {id: 2, name: 'Pedro Torres'},
        {id: 3, name: 'German Gutierrez'},
        {id: 4, name: 'Maria Lopez'},
        {id: 5, name: 'Ivan Vega'},
        {id: 6, name: 'Nancy Quintana'}
    ], []);
    
    return(
        <div className="user-list">
            {users.map(user =>(
                <User key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserList;