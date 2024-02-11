import {getPosts} from "@/services/posts";
import {Metadata} from "next";
import Posts from "@/components/Posts/Posts";

export const metadata: Metadata = {
  title: 'Posts | Test App',
};

export default function PostsPage() {
  const posts = getPosts();

  return (
    <div className='flex-grow self-start'>
      <h1 className="text-3xl font-bold mb-8">Posts</h1>
      <Posts posts={posts}/>
    </div>
  );
}
