'use client';
import { motion } from "framer-motion";
import { useState } from 'react';



export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', phone: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setMessage(data.message);
  };

  const images = [1, 2, 3, 4];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  const openLightbox = (i) => {
    setCurrentImg(i);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImg(null);
  };

  return (
    
  

    <div className="font-sans text-gray-900 bg-gradient-to-br from-gray-100 to-white">
     <header className="flex justify-between items-center px-10 py-6 bg-blue-600 bg-opacity-90 backdrop-blur-lg text-white shadow-lg sticky top-0 z-50 border-b border-blue-500">
  {/* Logo with a subtle bounce animation */}
  <h1 className="text-3xl font-extrabold tracking-wide drop-shadow-lg flex items-center gap-2 animate-bounce">
    ⚽ SuperTurf <span className="text-yellow-400 text-2xl">✨</span>
  </h1>

  {/* Navigation with emoji icons and animated underline */}
  <nav className="space-x-8 text-lg font-semibold flex items-center">
    {[
      { name: "About", emoji: "ℹ️" },
      { name: "Features", emoji: "⚙️" },
      { name: "Gallery", emoji: "🖼️" },
      { name: "Book", emoji: "📅" },
      { name: "Reviews", emoji: "⭐" },
      { name: "Contact", emoji: "📞" },
    ].map(({ name, emoji }) => (
      <a
        key={name}
        href={`#${name.toLowerCase()}`}
        className="relative group flex items-center gap-1 hover:text-yellow-300 transition-colors duration-300"
      >
        <span>{emoji}</span>
        {name}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellow-300 absolute bottom-0 left-0"></span>
      </a>
    ))}

    {/* Extra button with sparkle emoji */}
    <button
      className="ml-6 bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded-full shadow-md hover:bg-yellow-300 transition flex items-center gap-2"
      onClick={() => alert('Welcome to SuperTurf! 🎉')}
    >
      Join Now <span className="animate-pulse">✨</span>
    </button>
  </nav>
</header>



      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url(/assests/b.avif)" }}>
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Your Game Starts Here 🏟️</h2>
          <p className="text-xl max-w-2xl">Book Chennai's top-rated turf for your squad — elite setup, night games & awesome vibes. Let's play! ⚡</p>
        </div>
      </section>

      {/* About Section */}
     <section id="about" className="flex flex-col md:flex-row items-center gap-12 px-10 py-16 bg-white">
  <img
    src="/assests/1.jpg"
    alt="Turf"
    className="w-full md:w-1/2 rounded-xl object-cover shadow-xl h-96 hover:scale-105 transition-transform duration-500"
  />
  <div className="md:w-1/2 space-y-6">
    <h2 className="text-4xl font-bold text-blue-900 flex items-center gap-3">
      <span className="animate-pulse">🌟</span> Welcome to SuperTurf
    </h2>
    <p className="text-lg leading-relaxed">
      Your one-stop premium sports turf in Chrompet, Chennai. From night games to tournaments, our setup meets all needs!{' '}
      <span className="inline-block animate-bounce">🏆</span>
    </p>
    <ul className="list-disc ml-5 space-y-3 text-blue-800 font-semibold">
      {[
        { emoji: "🌙", text: "Night Lights with LED Beams" },
        { emoji: "🥾", text: "Quality Synthetic Grass" },
        { emoji: "🚿", text: "Shower & Changing Rooms" },
        { emoji: "📶", text: "Free WiFi & Charging Ports" },
        { emoji: "🛡️", text: "24/7 Security & CCTV Surveillance" },
        { emoji: "🍹", text: "Refreshment Zone & Cafeteria" },
        { emoji: "🏅", text: "Professional Coaches & Trainers" },
        { emoji: "🚌", text: "Easy Parking & Shuttle Services" },
      ].map(({ emoji, text }) => (
        <li
          key={text}
          className="flex items-center gap-2 cursor-pointer hover:text-yellow-500 transition-colors duration-300"
          onClick={() => alert(`You clicked on: ${text}`)}
          title="Click for more info"
        >
          <span className="text-xl">{emoji}</span> {text}
        </li>
      ))}
    </ul>
  </div>
</section>


      <section id="features" className="bg-blue-50 px-10 py-20 text-center">
  <h2 className="text-4xl font-extrabold mb-12 text-blue-900 tracking-wide drop-shadow-md">
    🚀 Why Choose Us?
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {[
      { icon: '🎯', title: 'Pro-Grade Turf', desc: 'Approved surface quality ideal for 5-a-side and training.' },
      { icon: '🌃', title: 'Evening Vibes', desc: 'Floodlight setup with ambient music.' },
      { icon: '📸', title: 'Social Corners', desc: 'Instagrammable selfie spots & team boards.' },
      { icon: '💧', title: 'Hydration Zone', desc: 'RO water, energy drinks & chillers available.' },
      { icon: '🧹', title: 'Daily Sanitization', desc: 'Fully disinfected space for every booking.' },
      { icon: '🔐', title: '24x7 Security', desc: 'Full CCTV & access monitoring.' },
    ].map((item, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="p-8 bg-white rounded-3xl shadow-lg cursor-pointer select-none flex flex-col items-center text-center"
      >
        <div className="text-6xl mb-4 animate-bounce">{item.icon}</div>
        <h3 className="font-bold text-2xl mb-3 text-blue-800 tracking-wide">{item.title}</h3>
        <p className="text-gray-600 max-w-xs">{item.desc}</p>
      </motion.div>
    ))}
  </div>
  <p className="mt-14 text-lg text-gray-700 max-w-4xl mx-auto italic">
    Plus, we host <span className="font-semibold">birthday matches 🎂</span>, <span className="font-semibold">corporate events 👔</span>, and <span className="font-semibold">late-night challenges 🌙</span>! <br />
    DM us to organize your own tournament. <span className="text-yellow-500 font-extrabold">🏅</span>
  </p>
</section>


      {/* Gallery */}
      <section id="gallery" className="bg-white px-10 py-16">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">📸 Our Turf Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((i) => (
          <div
            key={i}
            onClick={() => openLightbox(i)}
            className="cursor-pointer overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-110 hover:rotate-1 hover:shadow-2xl"
            title={`View Turf ${i}`}
          >
            <img
              src={`/assests/turf${i}.jpeg`}
              alt={`Turf ${i}`}
              className="w-full h-60 object-cover"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
        >
          <div className="relative max-w-4xl mx-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-yellow-300 transition"
              aria-label="Close gallery"
            >
              &times;
            </button>
            <img
              src={`/assests/turf${currentImg}.jpeg`}
              alt={`Turf ${currentImg}`}
              className="rounded-xl shadow-2xl max-h-[80vh] object-contain mx-auto"
              draggable={false}
            />
          </div>
        </div>
      )}
    </section>

      {/* Booking */}
<section id="book" className="bg-blue-50 px-6 py-16">
  <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">📝 Book a Slot</h2>
  <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-xl space-y-6">
    {/* Name */}
    <div>
      <label htmlFor="name" className="block mb-1 font-medium text-gray-700">👤 Name</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        value={form.name}
        onChange={handleChange}
        placeholder="John Doe"
        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
    </div>

    {/* Email */}
    <div>
      <label htmlFor="email" className="block mb-1 font-medium text-gray-700">📧 Email</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        value={form.email}
        onChange={handleChange}
        placeholder="john@example.com"
        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
    </div>

    {/* Phone */}
    <div>
      <label htmlFor="phone" className="block mb-1 font-medium text-gray-700">📱 Phone</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        required
        value={form.phone}
        onChange={handleChange}
        placeholder="9876543210"
        pattern="[0-9]{10}"
        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
    </div>

    {/* Date */}
    <div>
      <label htmlFor="date" className="block mb-1 font-medium text-gray-700">📅 Date</label>
      <input
        type="date"
        id="date"
        name="date"
        required
        value={form.date}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
    </div>

    {/* Time */}
    <div>
      <label htmlFor="time" className="block mb-1 font-medium text-gray-700">⏰ Time</label>
      <input
        type="time"
        id="time"
        name="time"
        required
        value={form.time}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
    </div>

    {/* Submit */}
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-900 hover:to-blue-700 transition-all duration-300 shadow-md"
    >
      ✅ Confirm Booking
    </button>

    {/* Success Message */}
    {message && (
      <p className="text-center text-green-700 font-semibold animate-pulse">{message}</p>
    )}
  </form>
</section>


      {/* Testimonials */}
      <section id="reviews" className="px-10 py-16 bg-white">
  <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12 tracking-wide drop-shadow-lg">
    💬 Hear From Players
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {["Sathish", "Meena", "Rahul", "Divya", "Anand"].map((name, i) => (
      <div
        key={i}
        className="relative p-8 bg-gradient-to-tr from-blue-100 to-blue-200 rounded-3xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer"
      >
        {/* Profile circle with initials */}
        <div className="absolute -top-6 left-8 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md select-none">
          {name[0]}
        </div>

        {/* Quotation background */}
        <svg
          className="absolute top-4 right-6 w-12 h-12 text-blue-300 opacity-30"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M7.17 6.5C5.7 6.5 4.5 7.7 4.5 9.17c0 1.47 1.2 2.67 2.67 2.67 1.47 0 2.67-1.2 2.67-2.67V4H7.17v2.5zm9.66 0c-1.47 0-2.67 1.2-2.67 2.67 0 1.47 1.2 2.67 2.67 2.67 1.47 0 2.67-1.2 2.67-2.67V4h-2.67v2.5z" />
        </svg>

        {/* Review text */}
        <p className="italic text-blue-900 mb-6 leading-relaxed relative z-10">
          "{name} says: This turf is next-level! 🔥 Perfect lighting, amazing vibes, and always clean. Highly recommended!"
        </p>

        {/* Star rating */}
        <div className="flex justify-start space-x-1 mb-4">
          {[...Array(5)].map((_, idx) => (
            <svg
              key={idx}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.785.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.034 9.384c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.957z" />
            </svg>
          ))}
        </div>

        {/* Reviewer name */}
        <p className="text-right font-semibold text-blue-800 relative z-10">– {name}</p>
      </div>
    ))}
  </div>

  <div className="text-center mt-14 text-lg text-gray-700 max-w-xl mx-auto">
    <p>
      ⭐ <span className="font-semibold">4.9 average rating</span> from 300+ players! Your feedback helps us improve — tag us on Instagram with{" "}
      <span className="text-yellow-400 font-semibold">#SuperTurfStars</span> 🌟
    </p>
  </div>
</section>


      {/* Contact */}
      <section id="contact" className="px-10 py-16 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100">
  <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12 relative inline-block">
    📍 Visit Us
    <span className="block h-1 w-20 bg-blue-500 rounded-full mt-2 mx-auto shadow-md animate-pulse"></span>
  </h2>

  <div className="flex flex-col md:flex-row gap-12 items-start max-w-6xl mx-auto">
    {/* Info Card */}
    <div className="md:w-1/2 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <ul className="space-y-6 text-lg text-blue-900 font-medium">
        <li className="flex items-center gap-4 hover:text-blue-700 transition-colors cursor-default">
          <span className="text-2xl">📞</span> +91 98765 43210
        </li>
        <li className="flex items-center gap-4 hover:text-blue-700 transition-colors cursor-default">
          <span className="text-2xl">📧</span> contact@superturf.in
        </li>
        <li className="flex items-center gap-4 hover:text-blue-700 transition-colors cursor-default">
          <span className="text-2xl">🏠</span> 15A, GST Road, Chrompet, Chennai - 600044
        </li>
        <li className="flex items-center gap-4 hover:text-blue-700 transition-colors cursor-default">
          <span className="text-2xl">🕒</span> Open Daily: 6 AM – 11 PM
        </li>
        <li className="flex flex-wrap gap-6 text-blue-800 mt-4 font-semibold">
          <span className="flex items-center gap-2"><span className="text-xl">🚗</span> Free Parking</span>
          <span className="flex items-center gap-2"><span className="text-xl">🛡️</span> CCTV Secured</span>
          <span className="flex items-center gap-2"><span className="text-xl">🌐</span> Wi-Fi Zone</span>
        </li>
      </ul>
    </div>

    {/* Map */}
    <iframe
      className="md:w-1/2 w-full h-80 rounded-3xl shadow-2xl border-4 border-blue-300 transition-transform duration-300 hover:scale-105"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.258531021985!2d80.1298106747838!3d12.951826615537859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fdc8c7c0b5b%3A0xb121d5ff2a64de21!2sChromepet%2C%20Chennai!5e0!3m2!1sen!2sin!4v1716366425000!5m2!1sen!2sin"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="SuperTurf Location"
    />
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white px-8 py-16 rounded-t-3xl shadow-inner mt-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
    {/* About */}
    <div>
      <h3 className="text-3xl font-extrabold mb-4 drop-shadow-lg">⚽ SuperTurf</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Play like a pro on our professionally maintained turf. Whether it’s training, casual matches, or corporate events, we provide the perfect environment with floodlights, social corners, and top-notch facilities. Join our growing community of passionate players!
      </p>
      <p className="text-sm text-gray-400 italic">
        Open daily from 6 AM to 11 PM | CCTV Secured | Free Parking | Snacks & Refreshments Available
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-xl font-semibold mb-4 border-b border-blue-500 pb-2">Quick Links</h4>
      <ul className="space-y-3 text-gray-300">
        {[
          { label: 'Home', href: '#' },
          { label: 'Book a Slot', href: '#book' },
          { label: 'Gallery', href: '#gallery' },
          { label: 'Reviews', href: '#reviews' },
          { label: 'Contact Us', href: '#contact' },
          { label: 'FAQs', href: '#' },
          { label: 'Terms & Conditions', href: '#' },
        ].map(({ label, href }, i) => (
          <li key={i}>
            <a
              href={href}
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h4 className="text-xl font-semibold mb-4 border-b border-blue-500 pb-2">Contact Info</h4>
      <ul className="space-y-4 text-gray-300">
        <li className="flex items-center gap-3">
          <span className="text-2xl">📞</span>
          <a href="tel:+919876543210" className="hover:text-yellow-300 transition-colors duration-300">+91 98765 43210</a>
        </li>
        <li className="flex items-center gap-3">
          <span className="text-2xl">📧</span>
          <a href="mailto:contact@superturf.in" className="hover:text-yellow-300 transition-colors duration-300">contact@superturf.in</a>
        </li>
        <li className="flex items-center gap-3">
          <span className="text-2xl">📍</span>
          <address className="not-italic">15A, GST Road, Chrompet, Chennai - 600044</address>
        </li>
        <li className="flex items-center gap-3">
          <span className="text-2xl">🕒</span> Open Daily: 6 AM – 11 PM
        </li>
      </ul>
    </div>

    {/* Newsletter & Social */}
    <div>
      <h4 className="text-xl font-semibold mb-4 border-b border-blue-500 pb-2">Stay Connected</h4>

      <form className="mb-6" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email-footer" className="sr-only">Email for newsletter</label>
        <div className="flex gap-2">
          <input
            id="email-footer"
            type="email"
            placeholder="Your email address"
            required
            className="flex-grow px-4 py-3 rounded-l-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-blue-900 font-semibold px-6 rounded-r-lg hover:bg-yellow-500 transition"
          >
            Subscribe
          </button>
        </div>
      </form>

      <div className="flex justify-start space-x-6 text-3xl">
        {[
          { name: 'Instagram', icon: '📸', href: '#' },
          { name: 'Facebook', icon: '📘', href: '#' },
          { name: 'WhatsApp', icon: '💬', href: '#' },
          { name: 'Twitter', icon: '🐦', href: '#' },
          { name: 'YouTube', icon: '▶️', href: '#' },
        ].map(({ name, icon, href }, i) => (
          <a
            key={i}
            href={href}
            aria-label={name}
            title={name}
            className="hover:text-yellow-300 transition-transform transform hover:scale-125"
            target="_blank" rel="noopener noreferrer"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  </div>

  {/* Bottom legal */}
  <div className="mt-16 border-t border-blue-600 pt-6 text-center text-gray-400 text-sm select-none">
    &copy; 2025 SuperTurf. All rights reserved. Designed with ❤️ by YourName.
  </div>
</footer>

 
    </div>
    
  );
}
