import Link from "next/link";
import {Post} from "@/types";

interface Props {
  posts: Post[]
}

export default function Posts({posts}: Props) {
  if (!posts || !posts.length) {
    return (
      <span className="block text-center text-gray-400 text-xl">Posts not found</span>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map(post => (
        <div
          key={post.id}
          className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row items-center justify-between"
        >
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <div className="flex">
            <Link
              href={`/posts/${post.id}`}
              className="w-[115px] h-[40px] bg-blue-500 text-white rounded px-4 py-2 text-center hover:bg-blue-600"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
