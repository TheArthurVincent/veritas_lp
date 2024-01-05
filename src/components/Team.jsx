import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          {/* <h2>Talking Business</h2> */}
          <img
            style={{ maxWidth: "40rem", marginBottom: "2rem" }}
            src="https://ik.imagekit.io/vjz75qw96/assets/arvin_visuals/tb-color.png?updatedAt=1687346451564"
            alt=""
          />
          <p>
            Nossa plataforma especializada em inglês empresarial, proporcionando
            habilidades essenciais para destacar-se no mundo corporativo de
            forma eficaz.
          </p>
        </div>
        {/* <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div> */}
      </div>
    </div>
  );
};
