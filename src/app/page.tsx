import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Test App',
};

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Website</h1>
      <p className="text-lg text-gray-700 mb-8">
        Explore our site to discover a variety of interesting articles, insightful blog posts, and engaging content.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Latest Articles</h2>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Popular Posts</h2>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Featured Content</h2>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}
