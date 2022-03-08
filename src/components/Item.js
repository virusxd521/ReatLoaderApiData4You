import { useState } from "react";

const Item = ({data}) => {
    // console.log(data);
    const [showingData, setShowingData] = useState(false);

    return (
        <>
            <h2 onClick={() => setShowingData(!showingData) } >
                {data.title}
            </h2>
            {
                showingData ?
                    <div>
                        <p>{data.producer}</p>
                        <p>{data.director}</p>
                        <p>{data.release_date}</p>
                    </div> :
                    <p>
                        You can display the data if you will click on the film title
                    </p>
            } 

        </>



    )
}
export default Item;

