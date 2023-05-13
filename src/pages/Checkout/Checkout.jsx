import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Checkout = () => {
    const service = useLoaderData();
    const {price,title,_id,img}=service
    const {user} = useContext(AuthContext)

    const handleService = event =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const date = form.date.value;
        const email= form.email.value;
        const amount = form.amount.value;
        const booking ={
            customerName :name,
            email,
            img,
            date,
            service:title,
            service_id:_id,
            price:amount
        }
        console.log(booking)

        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
            
        })
        .then(res =>res.json())
        .then(data =>{
          if(data.acknowledged){
            alert('booking done')
          }
          console.log(data)})

    }
    return (
        <div>
            <h2 className="text-center p-5 font-bold text-2xl">Book Service : {title}</h2>
<form onSubmit={handleService}>
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="form-control">
          <input type="text" placeholder="Name" name="name" defaultValue={user?.displayName} className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="date" placeholder="date" name="date" className="input input-bordered" />
        </div>
<div className="form-control">
          <input type="email" placeholder="email" name="email" defaultValue={user?.email}  className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Service Type"  defaultValue={'$'+price} name="amount" className="input input-bordered" />
        </div>
</div>
<div className="form-control">
          <input type="text" placeholder="" name="massage" className="input input-bordered py-20" />
        </div>
        <div className="form-control mt-6">
          <input type="submit"className="btn-primary" value='Order Confirm' />
        </div>
</form>
      <div className="card-body">
      
      </div>
    </div>

    );
};

export default Checkout;