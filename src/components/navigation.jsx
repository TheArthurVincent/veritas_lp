import React from "react";

export const Navigation = (props) => {
  const menuObjeto = {
    nossaPlataforma: {
      label: "Nossa plataforma",
      link: "#features",
    },
    sobre: {
      label: "Sobre",
      link: "#about",
    },
    servicos: {
      label: "Serviços",
      link: "#services",
    },
    // galeria: {
    //   label: "Galeria",
    //   link: "#portfolio",
    // },
    // testemunhos: {
    //   label: "Testemunhos",
    //   link: "#testimonials",
    // },
    talkingBusiness: {
      label: "Talking Business",
      link: "#team",
    },
    contato: {
      label: "Contato",
      link: "#contact",
    },
    soualuno: {
      label: "Sou aluno",
      link: "https://portal.arthurvincent.com.br/",
    },
  };

  const menuArray = Object.entries(menuObjeto);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              style={{
                maxWidth: "10rem",
                display: "flex",
                alignItems: "center",
                marginBottom: "rem",
              }}
              src="https://ik.imagekit.io/vjz75qw96/assets/arvin_visuals/logo.png?updatedAt=1687346649448"
              alt=""
            />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {menuArray.map(([key, value]) => (
              <li key={key}>
                <a
                  href={value.link}
                  className="page-scroll"
                  style={{
                    fontFamily: "Athiti",
                  }}
                >
                  {value.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
