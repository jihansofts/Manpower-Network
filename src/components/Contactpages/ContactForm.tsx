import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Industries } from "@/lib/data";

export default function ContactForm() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8 uppercase">Contact Form</h2>
            <form className="space-y-6">
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                name="industry"
                defaultValue="">
                <option value="" disabled>
                  Select Industry
                </option>
                {Industries.map((industry) => (
                  <option key={industry.id} value={industry.id}>
                    {industry.title}
                  </option>
                ))}
              </select>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-[18px] font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 outline-none py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-[18px] font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full outline-none px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-[18px] font-medium mb-2">
                  Mobile Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full outline-none px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[18px] font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full outline-none px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[18px] font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border outline-none border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center cursor-pointer justify-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/80 transition-colors">
                Apply Job <FaPaperPlane className="inline" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Contact us</h3>
            <p className="text-lg mb-8">info@sourcegroupinternational.com</p>

            {/* <div className="space-y-4">
              <p className="flex items-center gap-3">
                <FaPhone className="text-[#d6b36b]" />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#d6b36b]" />
                123 Business Ave, Suite 100
                <br />
                New York, NY 10001
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
