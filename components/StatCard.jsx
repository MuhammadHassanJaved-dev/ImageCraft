export default function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 
                    hover:scale-[1.03] hover:bg-white/10 transition-all duration-300
                    shadow-sm hover:shadow-lg">
      
      <div className="flex items-center justify-between">
        <h3 className="text-gray-400 text-sm">{title}</h3>

        {Icon && <Icon className="w-5 h-5 text-gray-400" />}
      </div>

      <p className="text-2xl font-bold mt-3 text-white">
        {value}
      </p>
    </div>
  );
}