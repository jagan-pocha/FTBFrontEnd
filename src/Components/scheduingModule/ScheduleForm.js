import react, { useRef, useState ,useEffect} from 'react'
import {connect} from 'react-redux'
import {scheduleFlightAction } from '../../redux/SFlightActions'


function ScheduleForm({addFlight,scheduleFlightAction})
{

    const [sForm,setSForm]=useState(
        {
            scheduleFlightId: 0,
            flight: {
                flightNumber: 0,
                carrierName: "",
                flightModel: "",
                seatCapacity: 30
            },
            availableSeats: 0,
            schedule: {
                scheduleId: 0,
                srcAirport: "",
                dstnAirport: "",
                deptDate: "",
                arrDate: "",
                arrTime: "",
                deptTime: ""
            },
            costPerHead: 0.0
        } )


    let [submit,setSubmit]=useState( {
        scheduleFlightId: 0,
        flight: {
            flightNumber: 0,
            carrierName: "",
            flightModel: "",
            seatCapacity: 30
        },
        availableSeats: 0,
        schedule: {
            scheduleId: 0,
            srcAirport: "",
            dstnAirport: "",
            deptDate: "",
            arrDate: "",
            arrTime: "",
            deptTime: ""
        },
        costPerHead: 0.0
    } )

    let [message,setMessage]=useState("")
    
    const initialRender = useRef(true);


    useEffect(()=>
    {
        if (initialRender.current)
         {
            initialRender.current = false;
          }
           else
            {
               scheduleFlightAction(sForm)
               
               alert(addFlight.error)
          }
         
        
    },[submit])


    function handleForm()
    {

        setSubmit(sForm);
        

    }


    return(

        <div id="sform" className="container-fluid pt-4" style={{ backgroundColor: "#acb6e5",height:"cover"}}>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">

                    <h4 className="font-weight-bold mb-2"> Scheduing Form </h4>
        <form onSubmit={handleForm}>
       
        <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input type="number" min="999000" max="999999" required={false} id="form3Example1" value={sForm.scheduleFlightId} onChange={e => setSForm({...sForm,scheduleFlightId : e.target.value})} className="form-control" />
        <label className="form-label" >Scheduling Id</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="number" min="555000" max="555999" required={false} value={sForm.flight.flightNumber} onChange={e => setSForm({...sForm,flight:{...sForm.flight,flightNumber : e.target.value}})} id="form3Example2" className="form-control" />
        <label className="form-label" >Flight Number</label>
      </div>
    </div>
  </div>


  <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input type="text"  id="form3Example3" value={sForm.flight.fcarrierName}  onChange={e => setSForm({...sForm,flight:{...sForm.flight,carrierName : e.target.value}})} required={false} className="form-control" />
        <label className="form-label" >carrier Name</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="text"  id="form3Example4" required={false} value={sForm.flight.flightModel}  onChange={e => setSForm({...sForm,flight:{...sForm.flight,flightModel : e.target.value}})} className="form-control" />
        <label className="form-label" >Flight Model</label>
      </div>
    </div>
  </div>

 
  <div class="form-outline mb-2">
    <input type="text" id="form3Example5" required={false} value={sForm.schedule.srcAirport} onChange={e => setSForm({...sForm,schedule:{...sForm.schedule,srcAirport : e.target.value}})} class="form-control" />
    <label className="form-label" >Source Airport</label>
  </div>

 
  <div class="form-outline mb-2">
    <input type="text" id="form3Example6" required={false} value={sForm.schedule.dstnAirport} onChange={e => setSForm({...sForm,schedule:{...sForm.schedule,dstnAirport : e.target.value}})} class="form-control" />
    <label className="form-label" >Destination Airport</label>
  </div>


  <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input type="date"  id="form3Example7" required={false}  value={sForm.schedule.arrDate} onChange={e => setSForm({...sForm,schedule:{...sForm.schedule,arrDate : e.target.value}})} className="form-control" />
        <label className="form-label">Arrival Date</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="date"  id="form3Example8" required={false} value={sForm.schedule.deptDate} onChange={e => setSForm({...sForm,schedule:{...sForm.schedule,deptDate : e.target.value}})} className="form-control" />
        <label className="form-label" >Departure Date</label>
      </div>
    </div>
  </div>

  <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input type="time"  id="form3Example9" required={false} value={sForm.schedule.arrTime} onChange={e => setSForm({...sForm,schedule:{...sForm.schedule,arrTime : e.target.value}})} className="form-control" />
        <label className="form-label" >Arrival Time</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="time"  id="form3Example10" required={false} value={sForm.schedule.deptTime}  onChange={e => setSForm({...sForm,schedule:{...sForm.schedule,deptTime : e.target.value}})} className="form-control" />
        <label className="form-label" >Departure Time</label>
      </div>
    </div>
  </div>

  <div className="row mb-2">
    <div className="col">
      <div className="form-outline">
        <input type="number" min="30" max="200" required={false} value={sForm.flight.seatCapacity}  onChange={e => setSForm({...sForm,flight:{...sForm.flight,seatCapacity : e.target.value},availableSeats:e.target.value})} id="form3Example11" className="form-control" />
        <label className="form-label" >Seat Capacity</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="number" min="500" id="form3Example12" required={false} value={sForm.costPerHead} onChange={e=> setSForm({...sForm,costPerHead:e.target.value})} className="form-control" />
        <label className="form-label" >costPerHead</label>
      </div>
    </div>
  </div>
<div className="text-danger">
    {message}</div>
<div className="row btn-group">
  <div className="btn">
      <button type="submit"  id="formsubmit"  >Submit</button>
  </div>
  <div className="btn">
      <button type="reset" id="formsubmit"  >Resst</button>
  </div>
  </div>
      </form>
      </div>
      </div>
      </div>
        
    )
}

const mapStateToProps=state=>{
    return{
        addFlight:state.scheduleF
    }
}

const mapDispatchToProps= dispatch=>{
    return{
        scheduleFlightAction: (sForm)=> dispatch(scheduleFlightAction(sForm))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ScheduleForm)

