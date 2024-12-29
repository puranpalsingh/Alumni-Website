import React from "react";
import "./Cards.scss";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

interface Metadata {
  position1?: string;
  position2?: string;
}

interface CardProps {
  img: string;
  name: string;
  LinkedIn: string;
  Email: string;
  github?: string;
  metadata?: Metadata;
  Department?: string;
  Team: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <>
      <div className="card-wrapper">
        <div className="card profile-two">
          <div className="card-image profile-img--two">
            <img src={props.img} alt="profile two" />
          </div>

          <ul className="social-icons">
            <li>
              <a href={props.LinkedIn} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${props.Email}`}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "25px",
                  color: "black",
                  fontWeight: 600,
                }}
              >
                <MdOutlineMail className="fab" />
              </a>
            </li>
            {props.github && (
              <li>
                <a
                  href={props.github}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "25px",
                    color: "black",
                    fontWeight: 600,
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="fab" />
                </a>
              </li>
            )}
          </ul>

          <div
            className={
              props.metadata && props.metadata.position2
                ? "details jane len"
                : "details jane"
            }
          >
            <h2>{props.name}</h2>
            {props.metadata?.position1 && (
              <span className="position1">{props.metadata.position1}</span>
            )}
            {props.metadata?.position2 && (
              <span className="position2">{props.metadata.position2}</span>
            )}
            {props.Department && (
              <span className="Department">{props.Department}</span>
            )}
            <span className="team">{props.Team}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

