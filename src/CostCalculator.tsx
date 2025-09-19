import React, {useState} from 'react'

export default function CostCalculator({ priceOfSingleVMPerHour }: { priceOfSingleVMPerHour: number }) {
  const [vmNumber, setVmNumber] = useState(0);

  function handleVmNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(e.target.value, 10);
    setVmNumber(isNaN(value) ? 0 : value);
  } 

  // Cost calculations
  const costPerHour = vmNumber * priceOfSingleVMPerHour;
  const costPerDay = costPerHour * 24;
  const costPerMonth = costPerDay * 30;   // 30 days
  const costPerYear = costPerHour * 8760; // 365 days

  return (
    <div>
      <h1>VM Cost Calculator</h1>
      <label htmlFor="vmNumber">Number of VMs</label>
      <input
        type="text"
        id="vmNumber"
        placeholder="Number of VMs"
        value={vmNumber}
        onChange={handleVmNumberChange}
      />
      <div>
        <p>Cost per hour: {costPerHour}</p>
        <p>Cost per day: {costPerDay}</p>
        <p>Cost per month: {costPerMonth}</p>
        <p>Cost per year: {costPerYear}</p>
      </div>
    </div>
  );
}

