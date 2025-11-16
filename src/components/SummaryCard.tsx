import { TrendingUp, FolderKanban, CheckCircle2, Target } from "lucide-react";

interface Props {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}

const SummaryCard = ({ title, value, icon }: Props) => {
  const getIcon = () => {
    if (icon) return icon;
    if (title.includes("Total"))
      return <FolderKanban size={24} className="text-indigo-600" />;
    if (title.includes("Active"))
      return <TrendingUp size={24} className="text-emerald-600" />;
    if (title.includes("Completed"))
      return <CheckCircle2 size={24} className="text-teal-600" />;
    if (title.includes("Progress"))
      return <Target size={24} className="text-amber-600" />;
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="p-2.5 bg-slate-50 rounded-lg">{getIcon()}</div>
      </div>
      <p className="text-sm font-medium text-slate-600 mb-1">{title}</p>
      <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
        {value}
      </h2>
    </div>
  );
};

export default SummaryCard;
