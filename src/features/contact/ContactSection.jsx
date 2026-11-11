
import { useState } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import SectionLabel from "../../components/common/SectionLabel";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "Ruchirakaveesha2020@gmail.com",
    href: "mailto:Ruchirakaveesha2020@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sri Lanka",
    href: null,
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Ruchira-kavi21",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ruchira-kaveesha-5102a6273/",
  },
];

const ease = [0.22, 1, 0.36, 1];

function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease,
      },
    },
  };

  const leftCard = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -45,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease,
      },
    },
  };

  const rightCard = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 45,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        delay: shouldReduceMotion ? 0 : 0.15,
        ease,
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const fieldAnimation = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease,
      },
    },
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend connection will be added later.
    setStatus(
      "Your form is ready! Message sending will be enabled when we connect the backend."
    );
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
    >
      {/* Animated background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 45, -25, 0],
                  y: [0, -35, 25, 0],
                  scale: [1, 1.15, 0.95, 1],
                }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[5%] top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[110px]"
        />

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -40, 30, 0],
                  y: [0, 35, -20, 0],
                  scale: [1, 0.9, 1.1, 1],
                }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-[5%] h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]"
        />

        <div className="absolute left-1/2 top-1/2 h-px w-[80%] -translate-x-1/2 bg-linear-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center"
        >
          <SectionLabel>Get In Touch</SectionLabel>

          <motion.h2
            className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Let's Work{" "}
            <span className="bg-linear-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent">
              Together
            </span>
          </motion.h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400">
            Have a project idea, an opportunity, or just want to connect?
            I'd be happy to hear from you.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Contact information card */}
          <motion.div
            variants={leftCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    y: -5,
                    transition: { duration: 0.3 },
                  }
            }
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl transition-colors duration-300 hover:border-purple-500/30 sm:p-10"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-600/10 blur-[80px] transition duration-700 group-hover:bg-purple-500/20" />

            <div className="relative">
              <h3 className="text-2xl font-semibold text-white">
                Let's start a conversation
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                I'm always interested in discussing software development,
                new ideas, and opportunities to learn and grow.
              </p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="mt-10 space-y-7"
              >
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.label}
                      variants={fieldAnimation}
                      className="flex items-center gap-4"
                    >
                      <motion.div
                        whileHover={
                          shouldReduceMotion
                            ? {}
                            : {
                                scale: 1.1,
                                rotate: 5,
                              }
                        }
                        transition={{ duration: 0.2 }}
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-400"
                      >
                        <Icon size={21} />
                      </motion.div>

                      <div>
                        <p className="text-sm text-gray-500">
                          {item.label}
                        </p>

                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 inline-block text-sm font-medium text-white transition-colors duration-300 hover:text-purple-400"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm font-medium text-white">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Social links */}
            <div className="relative mt-14">
              <p className="mb-5 text-sm text-gray-500">
                Find me on social media
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      whileHover={
                        shouldReduceMotion
                          ? {}
                          : {
                              y: -5,
                              scale: 1.08,
                            }
                      }
                      whileTap={
                        shouldReduceMotion ? {} : { scale: 0.95 }
                      }
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-colors duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                    >
                      <Icon size={19} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact form card */}
          <motion.div
            variants={rightCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl transition-colors duration-300 hover:border-purple-500/20 sm:p-10"
          >
            <div className="pointer-events-none absolute -bottom-32 -right-20 h-64 w-64 rounded-full bg-purple-600/10 blur-[90px]" />

            <div className="relative">
              <h3 className="text-2xl font-semibold text-white">
                Send me a message
              </h3>

              <p className="mt-3 text-sm text-gray-400">
                Fill in the details below and I'll get back to you.
              </p>

              <motion.form
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <motion.div variants={fieldAnimation}>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Your Name
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-white/10 bg-[#111018]/90 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-white/20 focus:border-purple-500 focus:bg-purple-500/4 focus:shadow-[0_0_20px_rgba(139,92,246,0.12)]"
                    />
                  </motion.div>

                  <motion.div variants={fieldAnimation}>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full rounded-xl border border-white/10 bg-[#111018]/90 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-white/20 focus:border-purple-500 focus:bg-purple-500/4 focus:shadow-[0_0_20px_rgba(139,92,246,0.12)]"
                    />
                  </motion.div>
                </div>

                <motion.div variants={fieldAnimation}>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#111018]/90 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-white/20 focus:border-purple-500 focus:bg-purple-500/4 focus:shadow-[0_0_20px_rgba(139,92,246,0.12)]"
                  />
                </motion.div>

                <motion.div variants={fieldAnimation}>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={5}
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#111018]/90 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-white/20 focus:border-purple-500 focus:bg-purple-500/4 focus:shadow-[0_0_20px_rgba(139,92,246,0.12)]"
                  />
                </motion.div>

                <motion.div variants={fieldAnimation}>
                  <motion.button
                    type="submit"
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            y: -3,
                            boxShadow: "0px 10px 35px rgba(139,92,246,0.3)",
                          }
                    }
                    whileTap={
                      shouldReduceMotion ? {} : { scale: 0.98 }
                    }
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-purple-600 to-violet-600 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:from-purple-500 hover:to-violet-500"
                  >
                    Send Message

                    <Send
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </motion.button>
                </motion.div>

                {status && (
                  <motion.p
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0, y: 8 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    role="status"
                    className="flex items-start gap-2 text-sm leading-6 text-purple-300"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0"
                    />
                    {status}
                  </motion.p>
                )}
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
