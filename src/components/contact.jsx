import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_nclr58t",
        "template_sqtzkz8",
        {
          to_name: "arthurcardosocorp@gmail.com",
          from_name: email,
          message: message,
        },
        "6wagjIYRZpgGApc4x"
      );
      console.log("E-mail enviado com sucesso!");
      alert("E-mail enviado com sucesso!");
      clearState();
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
    }
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Fale comigo</h2>
                <p>Vamos marcar nossa aula teste gratuitamente?</p>
              </div>
              {/* <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Enviar
                </button>
              </form> */}
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contato</h3>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-whatsapp"></i> Whatsapp
                </span>
                +55 11 91585-7807
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                arvinenglishschool@gmail.com
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href="https://www.instagram.com/thearthurvincent_/">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCkUao0hajMxG6CRMcn9CVKg">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/5511915857807">
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer
        style={{
          bottom: "0vh",
          fontSize: "12px",
          alignItems: "center",
          backgroundColor: "#111",
          color: "#eee",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100vw",
        }}
      >
        <img
          style={{
            maxWidth: "6rem",
          }}
          src="https://ik.imagekit.io/vjz75qw96/assets/arvin_visuals/arvintranmsp?updatedAt=1703788108765"
          alt="logo arvin"
        />
        <span
          style={{
            marginBottom: "1rem",
          }}
        >
          This website is powered by ARVIN ENGLISH SCHOOL © Some rights reserved{" "}
          <br />
          Arthur Vincent
          <br />
          arvinenglishschool@gmail.com
          <br />
          +55 11 91585-7807
        </span>
      </footer>
    </div>
  );
};
