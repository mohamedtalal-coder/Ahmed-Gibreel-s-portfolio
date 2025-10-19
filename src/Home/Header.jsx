import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "./Header.css";
import profileImg from "../assets/Picture6.png";
function Header() {
  const MotionLink = motion(Link);

  return (
    <section
      id="about"
      className="header-section d-flex align-items-center justify-content-center text-white"
      dir="rtl"
      style={{
        minHeight: "100vh",
        paddingTop: "135px",
      }}
    >
      <div className="container">
        <div className="row align-items-center flex-column flex-md-row-reverse">
          {/* LEFT: Image */}
          <motion.div
            className="col-md-5 text-center mb-4 mb-md-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={profileImg} // replace with your image path
              alt="Ahmed Gibriel"
              className="img-fluid img-home "
            />
          </motion.div>

          {/* RIGHT: Arabic text */}
          <motion.div
            className="col-md-7 text-center text-md-end"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="fw-bold mb-3 text-light" style={{fontSize:"45px"}}>أحمد جبريـل</h1>
            <h4 className="text-warning mb-4">
              معلّق صوتي بالعربية الفصحى واللهجة المصرية
            </h4>

            <p
              className="lead text-light opacity-75 mb-4"
              style={{ lineHeight: "1.8", fontSize: "22px" }}
            >
              بخبرة تفوق الـ 4 سنوات في مجال التعليق الصوتي، وأسعى دائماً لتقديم
              أداء صوتي متميز لعملائي يجمع بين الجودة والتميّز.
            </p>

            <div className="d-flex flex-column flex-md-row justify-content-start gap-3">
              <MotionLink
                to="work"
                smooth={true}
                duration={500}
                offset={-70}
                className="btn btn-outline-light px-4 py-2 "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                معرض أعمالي
              </MotionLink>

              <a
                href= " https://khamsat.com/user/ahmad_gebreel"
                target="_blank"
                smooth={true}
                duration={500}
                offset={-70}
                className="btn btn-outline-light px-4 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                اطلب الخدمة
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Header;
