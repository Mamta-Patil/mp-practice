export default function Card({ title, body }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow hover:shadow-xl transition-all px-20">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{body}</p>
    </div>
  );
}
