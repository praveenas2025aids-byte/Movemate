
import { useState } from 'react';

function CreateRequests() {

  const [goodsType, setGoodsType] = useState('');
  const [description, setDescription] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const formsubmit = (e) => {
    e.preventDefault();
    console.log(goodsType, description, from, to, date, pickupTime, vehicleType);
  }

  return (
    <>
      <h1>Create Goods Request</h1>

      <form onSubmit={formsubmit}>

        <label>Goods Type:</label><br />
        <input type="text" id="goodsType" required placeholder="Enter goods type" value={goodsType} onChange={(e) => setGoodsType(e.target.value)} />
        <br /><br />

        <label>Goods Description:</label><br />
        <textarea id="description" required placeholder="Enter goods description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        <br /><br />

        <label>Pickup Location:</label><br />
        <input type="text" id="from" required placeholder="Enter pickup location" value={from} onChange={(e) => setFrom(e.target.value)} />
        <br /><br />

        <label>Destination:</label><br />
        <input type="text" id="to" required placeholder="Enter destination" value={to} onChange={(e) => setTo(e.target.value)} />
        <br /><br />

        <label>Transportation Date:</label><br />
        <input type="text" id="date" required placeholder="Enter date" value={date} onChange={(e) => setDate(e.target.value)} />
        <br /><br />

        <label>Pickup Time:</label><br />
        <input type="text" id="pickupTime" required placeholder="Enter pickup time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} />
        <br /><br />

        <label>Required Vehicle Type:</label><br />
        <input type="text" id="vehicleType" required placeholder="Enter vehicle type" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} />
        <br /><br />

        <button type="submit">Submit Request</button>

      </form>
    </>
  );
}

export default CreateRequests;
