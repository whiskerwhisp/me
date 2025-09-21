import React from "react"
import Swal from "sweetalert2"

const contact = () => {
       async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);

          formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY || "");

          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);

          const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
          });
          const result = await response.json();
          if (result.success) {
              Swal.fire({
               title: "message sent!",
               text: "Thanks for reaching out! I’ll reply shortly.",
               icon: "success"
});
          }
      }
  return (
<section className="h-full w-full flex items-center justify-center">
  <form onSubmit={handleSubmit}
    className="w-full h-full flex flex-col justify-between rounded-2xl shadow-lg px-4 py-3">
    <h2 className="flex flex-col items-center text-xl mt-0">Get in Touch</h2>
    <div className="flex flex-col mb-2">
      <label className="text-sm font-medium text-white mb-1">Your Name</label>
      <input
        type="text"
        name="name"
        placeholder="haru"
        required
        className="rounded-lg border border-[#f8d8de] bg-[#f6a6bb]/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
      />
    </div>

    <div className="flex flex-col mb-2">
      <label className="text-sm font-medium text-white mb-1">Your Email</label>
      <input
        type="email"
        name="email"
        placeholder="haru@gmail.com"
        required
        className="rounded-lg border border-[#f8d8de] bg-[#f6a6bb]/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
      />
    </div>
    <div className="flex flex-col mb-3">
      <label className="text-sm font-medium text-white mb-1">Your Message</label>
      <textarea
        name="message"
        placeholder="haru says goodluck"
        required
        rows={3}
        className="rounded-lg border border-[#f8d8de] bg-[#f6a6bb]/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
      ></textarea>
    </div>

    <button
      type="submit"
      className="mt-auto rounded-lg bg-[#f6a6bb] px-4 py-2 font-semibold text-white shadow-sm hover:bg-[#ec88a3] transition">
      Send Message 
    </button>
  </form>
</section>

  )
}
export default contact;