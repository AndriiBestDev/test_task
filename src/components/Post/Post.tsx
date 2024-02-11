import {Post} from "@/types";

interface Props {
  post: Post
}

export default function Post({post}: Props) {
  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700">{post.body}</p>
      </div>
    </div>
  );
}
