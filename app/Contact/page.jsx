"use client";

import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);

  if (state.succeeded) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl text-center border border-white/20">
        <h2 className="text-3xl font-bold text-white">
           Thank You!✨
        </h2>

        <p className="mt-4 text-slate-300">
          Your message has been sent successfully.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-3 rounded-xl bg-violet-600 text-white"
        >
          Send Another Message
        </button>
      </div>
    </div>
  );
}

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">

      <motion.div
  drag
  dragElastic={0.2}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  className="
    absolute
    top-32
    left-20
    w-40
    h-40
    rounded-full
    bg-violet-500/30
    blur-xl
    cursor-grab
    z-0
  "
/>

<motion.div
  drag
  dragElastic={0.2}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  className="
    absolute
    bottom-20
    right-20
    w-52
    h-52
    rounded-full
    bg-fuchsia-500/20
    blur-xl
    cursor-grab
    z-0
  "
/>

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-20 w-80 h-80 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

     
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-20">

        <h1 className="text-center text-5xl font-bold text-white">
          Contact Us
        </h1>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto mt-10 bg-white/10 backdrop-blur-xl p-8 rounded-3xl"
        >
          <input
            name="name"
            placeholder="Name"
            className="w-full mb-4 p-3 rounded-xl bg-white/5 text-white"
          />

          <input
            name="email"
            placeholder="Email"
            className="w-full mb-4 p-3 rounded-xl bg-white/5 text-white"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Message"
            className="w-full mb-4 p-3 rounded-xl bg-white/5 text-white"
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full p-3 rounded-xl bg-violet-600 text-white"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>

          <ValidationError errors={state.errors} />
        </form>

      </main>
    </div>
  );
}