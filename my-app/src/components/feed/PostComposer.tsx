export default function PostComposer() {
  return (
    <div className="flex gap-3">
      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
        U
      </div>
      <div className="flex-1">
        <textarea
          className="w-full min-h-[70px] p-3 rounded-md border bg-gray-50 resize-none focus:outline-none"
          placeholder="¿Qué tienes en mente?"
        />
        <div className="flex items-center justify-between mt-3">
          <div className="flex gap-2 text-sm text-gray-500">
            <button className="px-2 py-1 rounded-md border">Foto</button>
            <button className="px-2 py-1 rounded-md border">Vídeo</button>
            <button className="px-2 py-1 rounded-md border">Encuesta</button>
          </div>
          <button className="px-4 py-1.5 rounded-md bg-indigo-600 text-white">
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
}
