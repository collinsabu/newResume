import React, { useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdWhatsapp } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const { error } = await response.json();
        toast.error(error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <h5 className="text-[12px]">Get In Touch</h5>
      <h2 className="text-2xl">Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option flex flex-col justify-center items-center">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>letsconnect@collinsabu.tech</h5>
            <a href="mailto:letsconnect@collinsabu.tech" target="_blank" rel="noopener noreferrer">Send Message</a>
          </article>

          <article className="contact_option flex flex-col justify-center items-center">
            <AiOutlineInstagram className="contact_option-icon" />
            <h4>Instagram</h4>
            <h5>See Projects</h5>
            <a href="https://www.instagram.com/dev_collinsabu/" target="_blank" rel="noopener noreferrer">Send Message</a>
          </article>

          <article className="contact_option flex flex-col justify-center items-center">
            <MdWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>Send A Message</h5>
            <a href="https://api.whatsapp.com/send?phone=+447862772070" target="_blank" rel="noopener noreferrer">Send Message</a>
          </article>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            required
            className="p-4"
          />
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
    </section>
  );
};

export default Contact;
