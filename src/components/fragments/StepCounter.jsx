export default function StepCounter({ countSteps, setCountSteps }) {
  const handleIncrementStep = () => {
    setCountSteps(countSteps + 1);
  };

  const handleDecrementStep = () => {
    setCountSteps(countSteps - 1);
    if (countSteps === 1) setCountSteps(1);
  };

  return (
    <div className="flex place-items-center gap-3">
      <button className="text-xl font-bold px-3 py-1 bg-slate-300 hover:bg-slate-400 dark:hover:bg-[#141414] dark:bg-[#141414a9] rounded-xl" onClick={handleDecrementStep}>
        -
      </button>
      <p className="text-3xl font-medium">{countSteps}</p>
      <button className="text-xl font-bold px-3 py-1 bg-slate-300 hover:bg-slate-400 dark:hover:bg-[#141414] dark:bg-[#141414a9] rounded-xl" onClick={handleIncrementStep}>
        +
      </button>
      <p className="text-xl font-medium">roll(s)</p>
    </div>
  );
}
