import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { FaUserAlt, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { BiSolidMessageAlt } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_56roy5w",
        "template_4ncbejb",
        form.current,
        "vi9k8DJZjPtcYQPJ8"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          toast("Message sent");
          const form = e.target;
          form.user_email.value = "";
          form.from_name.value = "";
          form.message.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="mt-4">
      <div className="display-4 text-center ">Contact me !</div>
      <div className="row pt-5 w-100 mx-auto">
        <section className="col-12 col-sm-6 mx-auto d-flex flex-column align-items-center justify-content-center p-3">
          <div className="fs-2 text-center mb-5">Get In Touch</div>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="fs-4">
              Email:{" "}
              <a
                className="text-decoration-none text-cus"
                href="mailto:arahi2994@gmail.com"
              >
                arahi2994@gmail.com
              </a>
            </div>
            <div className="fs-4">
              Phone:{" "}
              <a
                className="text-decoration-none text-cus"
                href="tel:+880 1314-381171"
              >
                {" "}
                +880 1314-381171
              </a>
              <div>Location: Sylhet, Bangladesh</div>
            </div>
          </div>
        </section>
        <section className="col-12 col-sm-6">
          <Form className="px-4" ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <div className="bg-white rounded px-3 py-2 d-flex gap-2 align-items-center">
                <FaUserAlt />
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  className="contact-input w-100 email-out"
                ></input>
              </div>
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <div className="bg-white rounded px-3 py-2 d-flex gap-2 align-items-center">
                <AiTwotoneMail />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="contact-input w-100 email-out"
                ></input>
              </div>
            </Form.Group>
            <Form.Group
              className="mb-4"
              controlId="exampleForm.ControlTextarea1"
            >
              <div className="bg-white rounded px-3 py-2 d-flex gap-2">
                <BiSolidMessageAlt className="mt-2" />
                <textarea
                  as="textarea"
                  name="message"
                  rows={3}
                  placeholder="Message"
                  className="contact-input w-100 email-out"
                ></textarea>
              </div>
            </Form.Group>
            <input
              className="btn-cus btn text-white w-100"
              type="submit"
              value="Send"
            />
          </Form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
