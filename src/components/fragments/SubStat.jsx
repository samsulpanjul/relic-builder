import StepCounter from "./StepCounter";

export default function SubStat({ dataSubStat, checkedItems, handleChecked, countSteps, handleCountStepChange }) {
  return (
    <div className="flex flex-col mx-auto min-w-7/12 h-[300px] overflow-y-scroll gap-y-2 gap-x-20">
      {dataSubStat.map((item, index) => (
        <div key={item.id} className="flex justify-between place-items-center gap-5 max-w-full">
          <label className="label cursor-pointer flex place-items-center gap-5">
            <input type="checkbox" className="toggle toggle-md" onChange={() => handleChecked(index)} checked={checkedItems[index]} />
            <span className="text-lg font-semibold label-text text-slate-200">{item.subStat}</span>
          </label>
          <StepCounter countSteps={countSteps[index]} setCountSteps={(newStep) => handleCountStepChange(index, newStep)} />
        </div>
      ))}
    </div>
  );
}
