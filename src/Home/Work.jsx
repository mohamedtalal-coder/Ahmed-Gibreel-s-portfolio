import React from "react";
import "./Work.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import { motion } from "framer-motion";

function Work() {
  // Animation variants for smooth staggered entry
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="work" className="container py-5">
      <div className="row justify-content-center">
        <div className="text-center mb-5">
          <h1>معرض أعمالي</h1>
        </div>
        <motion.div
          className="d-flex justify-content-center flex-wrap w-100"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }} // 👈 triggers on scroll
        >
          {/* Card 1 */}
          <motion.div variants={item} className="mx-3 my-3">
            <Card color="transparent" style={{ width: "25rem" }}>
              <iframe
                className="w-100"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ZZBHVVxUJGk?si=B2nded4V8k4GSEBo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <CardBody>
                <CardTitle tag="h5">اللهجة المصرية</CardTitle>
                <CardText>
                  تعليق صوتي وثائقي باللهجة المصرية عن عالم الحيوانات البرية
                </CardText>
                <a href="https://youtu.be/ZZBHVVxUJGk?si=ktF5R9iDd77Emg6T" target="blank">
                  <Button className="btn btn-block"> شاهد على يوتيوب</Button>
                </a>
              </CardBody>
            </Card>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={item} className="mx-3 my-3">
            <Card color="transparent" style={{ width: "25rem" }}>
              <iframe
                className="w-100"
                height="315"
                src="https://www.youtube.com/embed/M0cemoslm7Q?si=JjOHjK6uzqUhgtwU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <CardBody>
                <CardTitle tag="h5">العربية الفصحى</CardTitle>
                <CardText>
                  تعليق صوتي إعلاني بالفصحى البيضاء لصالح شركة MSC للتسويق
                  العقاري
                </CardText>
                <a href="https://youtu.be/M0cemoslm7Q?si=FblXR9-4HQRWL9fA" target="blank">
                  <Button className="btn btn-block"> شاهد على يوتيوب</Button>
                </a>
              </CardBody>
            </Card>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={item} className="mx-3 my-3">
            <Card color="transparent" style={{ width: "25rem" }}>
              <iframe
                className="w-100"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Lrlueyb4g98?si=FQ5EfDLgPrEHkZ7b"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <CardBody>
                <CardTitle tag="h5">الرد الآلي IVR</CardTitle>
                <CardText>
                  تعليق صوتي للرد الآلي على الهاتف لشركتك أو مؤسستك
                </CardText>
                <a href="https://youtu.be/Lrlueyb4g98?si=usOEYXCxOwO-FmU3" target="blank">
                  <Button className="btn btn-block"> شاهد على يوتيوب</Button>
                </a>
              </CardBody>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Work;
