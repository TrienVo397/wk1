import {useEffect, useState} from 'react'
import getNextUsers from './LazyUserGridApiCall'


const useLazyUserGridEventHandler=({page, pageSize}) =>{
    const[users, setUsers] = useState([]);
    useEffect(() =>{
        const newUsers = getNextUsers(page, pageSize);
        if(page ===0){
            setUsers(newUsers)
        }
        else {
            setUsers(currentUsers =>[...currentUsers, ...newUsers]); //concatenate newUsers
        }

    }, [page]);

    return {users}
}

export default useLazyUserGridEventHandler;