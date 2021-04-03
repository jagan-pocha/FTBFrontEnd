import react, { useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchAllSFlightsAction } from '../../redux/SFlightActions'

function FetchList({getFlightList,fetchAllSFlightsAction})
{
    useEffect(()=>
        {
            fetchAllSFlightsAction()
        }
    ,[])

    var elements = document.getElementsByClassName("column");

    var i;


    const listView=()=>{
        for (i = 0; i < elements.length; i++) {
            elements[i].style.width = "100%";
          }
    }

    const gridView=()=>{

        for (i = 0; i < elements.length; i++) {
            elements[i].style.width = "50%";
          }
    }


    return getFlightList.loading ? (
        <h2>Loading</h2>
      ) : getFlightList.error ? (
        <h2 className='text-danger'>{getFlightList.error}</h2>
      ) : (
          <div className="container-fluid" style={{ backgroundColor: "#acb6e5",height:"100vh"}}>
         <div id="btnContainer" className="container-fluid" >
            <div className="container  col-sm-4" style={{ backgroundColor: "#acb6e5"}}>
        <button className=" btn btn-outline-dark m-1 text-dark font-weight-bold" style={{ backgroundColor: "Aqua"}} onClick={listView}>List </button> 
        <button className=" btn btn-outline-dark ml-3 text-dark font-weight-bold" style={{ backgroundColor: "Aqua"}}  onClick={gridView}> Grid</button>
      </div>
      </div>

      <div id="row" className="container mt-2">
           
                {
                    getFlightList &&
                    getFlightList.fAllFlights &&
                    getFlightList.fAllFlights.map(f=>
                        <div id="col" className="column bg-white border border-white">
                        
                        <table className="table table-stripped">
                        <thead>
                             <tr className="table-danger">
                                 <th scope="col" colSpan="2">ID:{f.scheduleFlightId}</th>
                                 <th scope="col" ></th>                                
                            </tr>
                         </thead>
                         <tbody>
                              <tr>
                                  <th scope="row">FlightNO. {f.flight.flightNumber}</th>
                                    <td className="font-weight-bold">{f.schedule.srcAirport} -{'>'} {f.schedule.dstnAirport}</td>
                                    <td scope="col" rowSpan="3">
                                        <div className="mt-2">
                                        <button className="btn btn-warning"> Edit</button>
                                        </div>
                                        <div className="mt-3">
                                          <button className="btn btn-danger"> Delete</button>    
                                        </div></td> 
                              </tr>
                            <tr>
                                 <th scope="row">CarrierName: {f.flight.carrierName}</th>
                                  <td className="font-weight-bold">{f.schedule.deptDate}</td>
                        
                                </tr>
                            <tr>
                                 <th scope="row">Seats: {f.flight.seatCapacity}</th>
                                 <td className="font-weight-bold">{f.schedule.deptTime}</td>
     
                             </tr>
                        </tbody>

                        </table>
                   
                        </div>
                    )
                }
           
        
      </div>
      </div>

    )
}


const mapStateToProps=state=>{
    return{
        getFlightList:state.fetchAllF
    }
}

const mapDispatchToProps= dispatch=>{
    return{
        fetchAllSFlightsAction: ()=> dispatch(fetchAllSFlightsAction())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(FetchList)



