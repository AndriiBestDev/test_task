import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'About Us | Test App',
};

export default function About() {
  return (
    <div className="bg-white p-12 rounded-lg shadow-xl max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to our website! We are a team of enthusiastic writers, designers, and developers committed to delivering
        high-quality content and engaging experiences to our audience.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Our mission is to inspire, educate, and entertain. Through our blog posts, articles, and tutorials, we aim to
        share valuable insights, useful tips, and creative ideas with our readers.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Whether you're a seasoned professional or just starting your journey, we're here to support you every step of
        the way. We believe in the power of community and collaboration, and we invite you to join us on this exciting
        adventure.
      </p>
      <p className="text-lg text-gray-700">
        Thank you for visiting our site. We hope you find inspiration and motivation here, and we look forward to
        connecting with you!
      </p>
    </div>
  );
}
