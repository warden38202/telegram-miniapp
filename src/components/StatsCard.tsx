const StatsCard = (props: any) => {
  const { icon, name, count } = props

  return (
    <div className="stas-card flex items-center">
      {icon}
      <div className="ml-3">
        <h3>{name}</h3>
        <label className="text-[12px] text-[#AEB9E1]">{count}</label>
      </div>
    </div>
  );
}

export default StatsCard;
