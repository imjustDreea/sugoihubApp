interface PostProps {
  author: string;
  text: string;
}

export default function Post({ author, text }: PostProps) {
  return (
    <article className="space-y-3">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
          A
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold">{author}</div>
              <div className="text-sm text-gray-500">2 h</div>
            </div>
            <div className="text-sm text-gray-400">⋯</div>
          </div>
          <p className="mt-2 text-sm">{text}</p>
        </div>
      </div>

      <div className="flex items-center gap-6 text-sm text-gray-600">
        <button>♥ Me gusta</button>
        <button>💬 Comentar</button>
        <button>↻ Compartir</button>
      </div>
    </article>
  );
}
