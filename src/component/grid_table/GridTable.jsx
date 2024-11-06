import GridTableCard from "./child_component/GridTableCard";
import loadUserData from "./GridTableApiCall"

const GridTable=()=>{
  const users = loadUserData();   
     
     return(
      <div className="grid grid-flow-col
                      sm:grid-rows-1 md:grid-rows-2 lg:grid-rows-3 xl:grid-rows-4
                      mx-auto p-4
                      gap-4">
                        {users.map((user,index) =>(
                          <GridTableCard user ={user} key={index}/>
                        ))}

      </div>
     )
}
export default GridTable