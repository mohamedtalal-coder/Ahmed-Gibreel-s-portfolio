import React from "react";
import { motion } from "framer-motion";
import "./ContactUs.css";

import pfp from "../assets/pfp.png";
import khamsat from "../assets/Khamsat.png";
import facebook from "../assets/Facebook.png";
import soundeal from "../assets/Soundeal.jpg";
import whatsapp from "../assets/whatsapp.png";
import youtube from "../assets/Youtube.png";
import gmail from "../assets/Gmail.png";

function ContactUs() {
  // === Animation Variants ===
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const boxVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const contacts = [
    {
      src: khamsat,
      label: "Khamsat",
      link: " https://khamsat.com/user/ahmad_gebreel",
    },
    {
      src: soundeal,
      label: "Soundeals",
      link: " https://soundeals.com/user/64cf9a5b248b5",
    },
    { src: whatsapp, label: "WhatsApp", link: " https://wa.me/+201020757218" },
    { src: gmail, label: "Email", link:"mailto:ahmedgebreel8888@gmail.com"},
    {
      src: facebook,
      label: "Facebook",
      link: "https://www.facebook.com/share/169TrrZrAS/",
    },
    {
      src: youtube,
      label: "YouTube",
      link: "https://youtube.com/@ahmedibrahimgebreel?si=3lJ9cm5ie6IJwCkt",
    },
  ];

  return (
    <section id="contactus" className="py-5 overflow-hidden ">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center mb-5">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              تواصل معي
            </motion.h1>
          </div>
        </div>

        <div className="row d-flex align-items-center">
          {/* --- Contact Box (Right Side) --- */}
          <div className="col-md-6 d-flex justify-content-center">
            <motion.div
              className="contact-box"
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {contacts.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 250 }}
                  >
                    <motion.a href={item.link} target="blank">
                      <motion.img
                        src={item.src}
                        alt={item.label}
                        whileHover={{ scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 250 }}
                      />
                    </motion.a>
                    <motion.h5 variants={itemVariants}>{item.label}</motion.h5>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          {/* --- Profile Picture (Left Side) --- */}
          <div className="col-md-6 d-flex justify-content-center">
            <motion.div
              className="profile-wrapper"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.img
                src={pfp}
                alt="Profile"
                className="profile-pic"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
