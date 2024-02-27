export default function RelicHeader({ selectedItem }) {
  return (
    <div className="flex">
      <img src={selectedItem.img} alt={selectedItem.name} className="w-[200px]" />
      <div>
        <p className="text-3xl font-bold py-5">{selectedItem.name}</p>
        <p>{selectedItem.pc2}</p>
        <p>{selectedItem.pc4}</p>
      </div>
    </div>
  );
}
