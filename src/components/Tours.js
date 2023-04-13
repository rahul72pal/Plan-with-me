import Card from "./Card";

function Tours({tours , removeTour}) {

    return(
        <div className='container'>
            <div>
                <h2 className="title">Plan with Rahul Pal</h2>
            </div>
            <div className="Cards">
                {
                    tours.map((tours)=>{
                        return <Card {...tours} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );

}

export default Tours;