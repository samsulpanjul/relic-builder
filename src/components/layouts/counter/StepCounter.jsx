export default function StepCounter({ countStep, setCountStep }) {
  const handleIncrementStep = () => {
    setCountStep(countStep + 1);
  };

  const handleDecrementStep = () => {
    setCountStep(countStep - 1);
    if (countStep === 1) setCountStep(1);
  };

  return (
    <div className="flex place-items-center gap-3">
      <button className="text-xl font-bold px-3 py-1 hover:bg-[#141414] bg-[#141414a9] rounded-xl" onClick={handleDecrementStep}>
        -
      </button>
      <p className="text-3xl font-medium">{countStep}</p>
      <button className="text-xl font-bold px-3 py-1 hover:bg-[#141414] bg-[#141414a9] rounded-xl" onClick={handleIncrementStep}>
        +
      </button>
      <p className="text-xl font-medium">step(s)</p>
    </div>
  );
}
