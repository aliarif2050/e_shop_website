import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-teal-900">About Us</h2>
      <p className="text-teal-900 text-lg leading-relaxed mb-4">
        Welcome to <strong>E-Store</strong> – your go-to destination for quality, style, and convenience.
        We’re a passionate team dedicated to bringing you a curated collection of products that blend affordability with exceptional design.
        Whether you're shopping for the latest trends or everyday essentials, we aim to deliver a seamless online shopping experience that puts you first.
      </p>
      <ul className="list-disc list-inside marker:text-teal-900 text-gray-700 text-lg mb-4">
        <li>Handpicked products with top-notch quality</li>
        <li>Fast and secure checkout</li>
        <li>Responsive customer support</li>
        <li>Exclusive deals and discounts</li>
      </ul>
      <p className="text-teal-900 text-lg leading-relaxed">
        We believe shopping should be simple, stress-free, and fun. That’s why we’ve built this platform — to connect great products with great people, all in one place.
        <br /><br />
        <strong>Thanks for being a part of our journey!</strong>
      </p>
    </section>
  )
}

export default About;
