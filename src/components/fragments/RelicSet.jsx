export default function RelicSet({ selectedItem, handleClickRelic }) {
  return (
    <div className="flex justify-evenly">
      {selectedItem.set.map((item) => (
        <div key={item.id} className="p-3 rounded-full cursor-pointer bg-slate-200 hover:bg-slate-300 dark:bg-[#141414a9] dark:hover:bg-[#141414]" onClick={() => handleClickRelic(item)}>
          <img src={item.img} alt={selectedItem.name} className="w-[100px] h-[100px]" />
        </div>
      ))}
    </div>
  );
}
