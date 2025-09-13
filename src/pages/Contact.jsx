import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4 py-10">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl w-full max-w-5xl px-4 sm:px-6 lg:px-10 py-10">
        
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-10">
          Get in Touch with <span className="text-red-400">MY SHOP</span>
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Info Section */}
          <div className="text-white space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold">Contact Info</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Have a question or need support? We're here to help you with your Shoping journey.
              </p>
            </div>
            <div className="text-sm sm:text-base space-y-2">
              <p><strong>📍 Address:</strong> MY SHOP, Aurangabad, India</p>
              <p><strong>📧 Email:</strong> support@MYSHOP.com</p>
              <p><strong>📞 Phone:</strong> +0123 456 789</p>
            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-6">
            <div>
              <label className="block text-white mb-1 text-sm sm:text-base">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-white mb-1 text-sm sm:text-base">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-white mb-1 text-sm sm:text-base">Your Message</label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-purple-500 text-white font-semibold py-2 rounded-xl hover:opacity-90 transition-all duration-300"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
