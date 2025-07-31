import { Home, Users, Book, Calendar, Settings, LogOut } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r px-4 py-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-8">voca.</h1>
      <nav className="space-y-4">
        {[
          { icon: Home, label: 'Beranda' },
          { icon: Users, label: 'Data Siswa' },
          { icon: Book, label: 'Materi Belajar' },
          { icon: Calendar, label: 'Catatan' },
        ].map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
          >
            <Icon className="w-5 h-5" />
            {label}
          </button>
        ))}
      </nav>
      <div className="absolute bottom-6 left-4">
        <button className="flex items-center text-red-600 hover:text-red-800 gap-2">
          <LogOut className="w-5 h-5" /> Logout
        </button>
      </div>
    </div>
  );
}
