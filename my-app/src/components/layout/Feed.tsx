import PostComposer from "../feed/PostComposer";
import Post from "../feed/Post";

interface PostData {
  id: number;
  author: string;
  text: string;
}

export default function Feed(){
  const posts: PostData[] = Array.from({ length: 4 }).map((_, i) => ({
    id: i + 1,
    author: `Autor ${i + 1}`,
    text: `Este es un post de ejemplo número ${
      i + 1
    }. Aquí va texto breve sobre hobbies, música o videojuegos.`,
  }));

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-2xl shadow-sm">
        <PostComposer />
      </div>
      {posts.map((p) => (
        <div key={p.id} className="bg-white p-4 rounded-2xl shadow-sm">
          <Post author={p.author} text={p.text} />
        </div>
      ))}
    </div>
  );
}
