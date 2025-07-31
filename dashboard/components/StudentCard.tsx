type Student = {
  name: string;
  grade: string;
  progress: number;
  imageUrl: string;
};

export default function StudentCard({ student }: { student: Student }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex items-center space-x-4">
      <img
        src={student.imageUrl}
        alt={student.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h3 className="font-semibold text-lg">{student.name}</h3>
        <p className="text-sm text-gray-500">Grade {student.grade}</p>
        <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${student.progress}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">{student.progress}% completed</p>
      </div>
    </div>
  );
}
