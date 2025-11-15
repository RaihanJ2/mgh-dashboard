interface Props {
  title: string;
  value: string | number;
}

const SummaryCard = ({ title, value }: Props) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p className="text-gray-600">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
};

export default SummaryCard;
