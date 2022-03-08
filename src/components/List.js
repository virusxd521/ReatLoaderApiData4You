import { useEffect, useState } from "react";
import Item from "./Item";
import { Audio } from  'react-loader-spinner'



const List = () => {
    
    const [fullData, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    const fetchingData = async () => {
        const response = await fetch('https://swapi.dev/api/films/');
        const data = await response.json();
        console.log(data);        
        setData(data.results);
    }
    
    useEffect(() => {
        fetchingData();
    }, []);


    


    
    return(
        
        <>
        {
            fullData.length === 0 ? <div style={{marginLeft: '46%', marginTop: '120px'}}>
                                        <Audio
                                            height="100"
                                            width="100"
                                            color='#B9CFAD'
                                            ariaLabel='loading'
                                        /> 
                                    </div> 

            : 
                fullData.map((item, index) => {
                    return <Item data={item} key={index} />
                }) 
        }
        </>
        
    )
    


    // return (
    //     <>
    //     <h1>Star Wars</h1>
    //         {

            
    //         }
    //         {
    //             loading ? 'Loading....' : 'Noooo'
    //         }            
            
    //         {/* { 
    //             fullData !== [] ? fullData.map((item, index) => {
    //                 return <Item data={item} key={index} />
    //             })  : <p>Loading...</p>
    //         } */}
    //     </>
    // )
}

export default List;