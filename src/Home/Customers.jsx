import React from "react";
import { motion } from "framer-motion";
import "./Customers.css";
import mic from "../assets/Picture1.png";

function Customers() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay each li slightly
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="clients"
      className="customers-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container text-center mb-5">
        <h1 className="customers-title">أبرز العملاء</h1>
      </div>

      <div className="container-fluid">
        <div className="row d-flex align-items-center">
          {/* Clients List */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <motion.div
              className="clients-box"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ul className="d-flex flex-column justify-content-center">
                {[
                  "صيدليات الإسعاف المصرية",
                  "شركة صحاري الإمارات للحديد والصلب",
                  "شركة كور اسطنبول للدعاية والإعلان بتركيا",
                  "شركة MSC للتسويق الرقمي بالإمارات",
                  "شركة Skills للاستثمار العقاري بالإمارات",
                  'قناة Savage Wild "on YouTube"',
                ].map((client, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <i className="fa fa-microphone"></i>
                    <span
                      className={
                        index === 1 || index === 3 || index === 5
                          ? "highlight"
                          : ""
                      }
                    >
                      {client}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Animated Microphone */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <motion.img
              src={mic}
              alt="Microphone illustration"
              className="mic-img"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              animate="float"
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Customers;
