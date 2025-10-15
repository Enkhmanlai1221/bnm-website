import Image from "next/image";

interface Post {
  id: number;
  author: string;
  authorAvatar: string;
  title: string;
  content: string;
  image?: string;
  category: string;
  upvotes: number;
  comments: number;
  timeAgo: string;
  tags: string[];
}

interface PostCardProps {
  post: Post;
  onUpvote: (postId: number) => void;
}

export default function PostCard({ post, onUpvote }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500">
            <div className="w-full h-full flex items-center justify-center text-white font-semibold">
              {post.author[0]}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">{post.author}</span>
              <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
                {post.category}
              </span>
            </div>
            <span className="text-sm text-gray-500">{post.timeAgo}</span>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>

        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {post.content}
          </p>
        </div>

        {post.image && (
          <div className="relative w-full h-96 mb-3 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-blue-600 hover:text-blue-800 cursor-pointer font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
          <button
            onClick={() => onUpvote(post.id)}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
            <span className="font-semibold">{post.upvotes}</span>
          </button>

          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group">
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="font-semibold">{post.comments}</span>
          </button>

          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group ml-auto">
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            <span className="font-semibold">Share</span>
          </button>

          <button className="flex items-center gap-2 text-gray-600 hover:text-yellow-500 transition-colors duration-200 group">
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
