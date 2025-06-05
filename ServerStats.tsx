export default function ServerStats() {
  const stats = [
    {
      icon: "👥",
      label: "Jugadores Totales",
      value: "15,247",
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30",
    },
    {
      icon: "🏆",
      label: "Ranking del Servidor",
      value: "#1",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/30",
    },
    {
      icon: "⚡",
      label: "Tiempo de Actividad",
      value: "99.9%",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30",
    },
    {
      icon: "🏗️",
      label: "Ciudades Construidas",
      value: "2,847",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30",
    },
    {
      icon: "👑",
      label: "Miembros VIP",
      value: "3,421",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/30",
    },
    {
      icon: "⚔️",
      label: "Batallas PvP",
      value: "∞",
      color: "text-red-400",
      bgColor: "bg-red-500/20",
      borderColor: "border-red-500/30",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">📊 Estadísticas del Servidor</h2>
          <p className="text-gray-400 text-xl">Datos en tiempo real de nuestra próspera comunidad</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`minecraft-card rounded-xl p-8 text-center group transform hover:scale-105 transition-all duration-300 ${stat.borderColor}`}
            >
              <div
                className={`w-20 h-20 ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border-2 ${stat.borderColor}`}
              >
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-3`}>{stat.value}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
