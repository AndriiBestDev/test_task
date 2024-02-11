import {getPostsById} from "@/services/posts";
import {notFound} from 'next/navigation';
import Post from "@/components/Post/Post";

interface Props {
  params: {
    id: string
  }
}

export function generateMetadata({params: {id}}: Props) {
  return {
    title: `Post ${id} | Test App`
  };
}

export default function PostPage({params: {id}}: Props) {
  const post = getPostsById(Number(id));

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto">
      <Post post={post} />
    </div>
  );
}
