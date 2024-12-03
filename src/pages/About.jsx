export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>
        <div className="text-lg text-gray-600 space-y-6">
          <p>
            Welcome to <span className="font-semibold text-gray-800">Blogify</span>! This is a real-world blog writing web application designed to provide a platform for sharing thoughts and ideas with the world. Our community consists of passionate writers who love to write about technology, coding, and a wide range of other topics.
          </p>

          <p>
            On this blog, you will find various articles on topics such as web development, software engineering, programming languages, and much more. Our authors are always learning and exploring new technologies, so be sure to check back often for new content!
          </p>

          <p>
            We encourage you to leave comments on our posts and engage with other readers. You can like other people's comments and reply to them as well. We believe that a community of learners can help each other grow and improve.
          </p>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-6">
            Become a part of our growing community of writers and readers. Share your knowledge, learn from others, and grow together.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
