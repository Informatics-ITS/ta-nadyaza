export default function DashboardSummary() {
  const stats = [
    { value: '124', label: 'Latihan Diselesaikan' },
    { value: '5m 24s', label: 'Durasi Rata-rata' },
    { value: '78%', label: 'Akurasi Rata-rata' },
    { value: '6', label: 'Anak “Perlu Ulangi”' },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <div key={i} className="bg-white p-4 rounded-xl shadow text-center">
          <h3 className="text-2xl font-bold">{s.value}</h3>
          <p className="text-sm text-gray-500">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
