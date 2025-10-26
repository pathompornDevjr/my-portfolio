"use client";
import FadeInSection from "@/components/fade-in-section";
import Image from "next/image";
import heroBg from "@/assets/hero-bg.jpg";
import {
  FaFacebookF,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaRegEnvelope,
} from "react-icons/fa";
import { Controller, useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const Contact = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
    reset,
  } = useForm({
    defaultValues: {
      sender_name: "",
      to_email: "",
      message: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const handleSendMessage = async (data) => {
    setLoading(true);
    const loadingToast = toast.loading("Sending message...");
    try {
      const result = await emailjs.send(
        "service_6ssbld3",
        "template_okbkone",
        {
          sender_name: data.sender_name,
          sender_email: data.to_email,
          sender_message: data.message,
        },
        "WpZ8w49r4HNVwCqlh"
      );

      // Dismiss loading and show success
      toast.dismiss(loadingToast);
      toast.success("Message sent successfully! 🎉", {
        duration: 4000,
        position: "top-center",
      });

      // Reset form after successful send
      reset();
    } catch (error) {
      // Dismiss loading and show error
      toast.dismiss(loadingToast);
      toast.error("Failed to send message. Please try again.", {
        duration: 4000,
        position: "top-center",
      });
      console.error("Failed to send email:", error.text);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <Toaster
        toastOptions={{
          // Default options for all toasts
          style: {
            background: "#1f2937",
            color: "#f3f4f6",
            border: "1px solid #374151",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
          loading: {
            iconTheme: {
              primary: "#3b82f6",
              secondary: "#fff",
            },
          },
        }}
      />{" "}
      <div className="relative w-full h-full pt-36 py-20 p-5 flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-gray-900 via-gray-800">
        <div className="absolute inset-0 bg-black/90 z-20" />
        <Image
          src={heroBg}
          className="absolute top-0 left-0 w-full h-full"
          alt="hero_bg"
          priority
        />
        <div className="flex flex-col items-center w-full h-full z-30">
          <FadeInSection className={"flex flex-col items-center gap-1.5"}>
            <span className="md:text-5xl text-3xl font-bold flex gap-5 text-gray-100">
              Contact <p className="text-blue-500">Me</p>
            </span>
            <p className="mt-2 text-gray-300 text-lg md:text-xl text-center">
              Interested in working together or have questions? Feel free to
              reach out
            </p>
          </FadeInSection>
          <div className="w-full h-full mt-14 flex items-center justify-center flex-col lg:flex-row gap-10 lg:items-start">
            <FadeInSection
              className={
                "w-full lg:w-1/3 h-screen flex flex-col p-5 rounded-lg bg-gray-800 border border-gray-600 shadow-sm"
              }
            >
              <p className="text-2xl md:text-3xl font-bold text-gray-100">
                Send Me a Message
              </p>

              {(errors?.message || errors?.to_email || errors?.sender_name) && (
                <div className="mt-5 p-3 rounded-lg border bg-red-900 border-red-700 w-full flex items-center gap-3.5">
                  <span className="p-1 rounded-full bg-red-400 "></span>
                  <p className="text-red-300">
                    {errors?.sender_name?.message ||
                      errors?.to_email?.message ||
                      errors?.message?.message}
                  </p>
                </div>
              )}

              <p className="mt-6 text-gray-100 text-sm">Your Name</p>
              <Controller
                name="sender_name"
                rules={{ required: "please enter yourname" }}
                control={control}
                render={({ field }) => (
                  <input
                    value={field.value || ""}
                    {...field}
                    type="text"
                    className="w-full p-2.5 px-3 border border-gray-600 bg-black outline-none placeholder:text-gray-400 rounded-lg text-sm mt-1.5 text-gray-100 focus:ring-2 transition-all focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                )}
              />

              <p className="mt-5 text-gray-100 text-sm">Email</p>
              <Controller
                name="to_email"
                control={control}
                rules={{
                  required: "Please enter your email",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // ตรวจรูปแบบอีเมล
                    message: "Invalid email format",
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    className={`w-full p-2.5 px-3 border ${
                      errors.sender_email ? "border-red-500" : "border-gray-600"
                    } bg-black outline-none placeholder:text-gray-400 rounded-lg text-sm mt-1.5 text-gray-100 focus:ring-2 transition-all focus:ring-blue-500`}
                    placeholder="your@email.com"
                  />
                )}
              />

              <p className="mt-5 text-gray-100 text-sm">Message</p>
              <Controller
                name="message"
                rules={{ required: "please write your message" }}
                control={control}
                render={({ field }) => (
                  <textarea
                    value={field.value || ""}
                    {...field}
                    type="text"
                    className="w-full h-[150px] resize-y p-2.5 px-3 border border-gray-600 bg-black outline-none placeholder:text-gray-400 rounded-lg text-sm mt-1.5 text-gray-100 focus:ring-2 transition-all focus:ring-blue-500"
                    placeholder="Write your message here..."
                  ></textarea>
                )}
              />

              <button
                disabled={loading}
                onClick={handleSubmit(handleSendMessage)}
                className="w-full p-3 text-sm rounded-xl hover:bg-gradient-to-tl bg-gradient-to-r from-green-600 to-blue-500 mt-8 justify-center text-gray-100 flex items-center gap-2"
              >
                {loading ? (
                  <div className="rounded-full w-6 h-6 border-4 border-gray-400 border-t-white animate-spin" />
                ) : (
                  <FaPaperPlane />
                )}

                <p>Send Message</p>
              </button>
            </FadeInSection>
            <div className="w-full lg:w-1/3 flex flex-col ">
              <FadeInSection className="text-2xl md:text-3xl font-bold text-gray-100">
                Contact Infomation
              </FadeInSection>

              <FadeInSection className="transition-all hover:ring hover:ring-white  w-full mt-5 p-5 rounded-xl border border-gray-700 bg-gray-800 flex items-center gap-4">
                <p className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-red-400">
                  <FaRegEnvelope color="white" size={25} />
                </p>
                <span className="flex flex-col">
                  <p className="lg:text-xl text-lg font-bold text-gray-50">
                    Email
                  </p>
                  <p className="text-gray-400">
                    pathomporn.wongsuwan@gmail.com
                  </p>
                </span>
              </FadeInSection>
              <FadeInSection className="transition-all hover:ring hover:ring-white w-full mt-5 p-5 rounded-xl border border-gray-700 bg-gray-800 flex items-center gap-4">
                <p className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-400">
                  <FaFacebookF color="white" size={25} />
                </p>
                <span className="flex flex-col">
                  <p className="lg:text-xl text-lg font-bold text-gray-50">
                    Facebook
                  </p>
                  <p className="text-gray-400">Pathomporn Wongsuwan</p>
                </span>
              </FadeInSection>
              <FadeInSection className="transition-all hover:ring hover:ring-white w-full mt-5 p-5 rounded-xl border border-gray-700 bg-gray-800 flex items-center gap-4">
                <p className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-400">
                  <FaPhone color="white" size={25} />
                </p>
                <span className="flex flex-col">
                  <p className="lg:text-xl text-lg font-bold text-gray-50">
                    Phone
                  </p>
                  <p className="text-gray-400">+6696-585-0195</p>
                </span>
              </FadeInSection>
              <FadeInSection className="transition-all hover:ring hover:ring-white w-full mt-5 p-5 rounded-xl border border-gray-700 bg-gray-800 flex items-center gap-4">
                <p className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-purple-400">
                  <FaMapMarkerAlt color="white" size={25} />
                </p>
                <span className="flex flex-col">
                  <p className="lg:text-xl text-lg font-bold text-gray-50">
                    Address
                  </p>
                  <p className="text-gray-400">Maha Sarakham , Thailand</p>
                </span>
              </FadeInSection>
              <FadeInSection className="transition-all  w-full mt-5 p-5 rounded-xl border border-gray-700 bg-gray-800 flex flex-col gap-1.5">
                <p className="font-bold text-xl text-gray-100">
                  Looking For New Oppotunities
                </p>
                <p className="text-gray-400">
                  Currently a student seeking a part-time WFH developer
                  position. I love learning, improving, and working with great
                  people
                </p>
                <a
                  href="/files/Pathomporn_Wongsuwan_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 w-fit inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-blue-700 text-white px-5 py-2.5 rounded-lg hover:bg-gradient-to-l hover:scale-x-105 hover:shadow-sm hover:shadow-gray-700 transition"
                >
                  My Resume
                </a>
              </FadeInSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
