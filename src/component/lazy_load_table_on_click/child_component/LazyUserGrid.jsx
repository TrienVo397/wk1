import UserCard from './UserCard'
import useLazyUserGridEventHandler from './LazyUserGridEventHandler'

const LazyUserGrid = ({page, pageSize}) =>{
    const {users} = useLazyUserGridEventHandler({page, pageSize})
    return(
        <div className='container mx-auto px-4'>
            <h1 className='text-2xl font-bold mb-4'>
                User Grid
            </h1>
            {users.map((user, key) =>(
                <UserCard key={key} user={user} />
            ))}
        </div>
    )
}

export default LazyUserGrid