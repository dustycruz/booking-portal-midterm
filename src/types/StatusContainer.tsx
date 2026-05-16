import Card from "./Card"

 function StatusContainer() {
return (
        <>
      <article className="booking-engine">
                    <h1>Booking Engine</h1>
                    <h3 className="asset"> Asset:{""}</h3>
                    <h3 className="labcode"> Lab Code:{""}</h3>
                    <h3 className="isassigned"> Status:{""}</h3>
                    <h3 className="capacityhours"> Max hours:{""}</h3>
                </article>
                <article className="available-asset">
                    <h1>Available assets</h1>
                    <label className="asset"> Asset:
                      <input type='text' placeholder='macbook pro 16'></input>
                    </label>
                    <label className="capacityhours"> Capacity hours:
                      <input type='number' placeholder=''></input>
                    </label>
                    <button className="button">
                        Submit
                    </button>
                </article>
        </>
    )
}

export default StatusContainer