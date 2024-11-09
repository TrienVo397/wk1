import {useState} from 'react';

function useLazyLoadEventHandler() {
    const [page, setPage]= useState(0)
    const [userPerPage] = useState(5)
    const loadMoreUsers = () =>{
        setPage(prevPage=>prevPage + 1) // updater function
    };
    return{
        page, userPerPage, loadMoreUsers
    }
 }

 export default useLazyLoadEventHandler;