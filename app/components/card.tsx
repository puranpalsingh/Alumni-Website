// import { MdOutlineMail } from "react-icons/md";
// import { FaGithub} from "react-icons/fa";

// export default function Card(props) {
//     return (
//       <>
//         <div class="card-wrapper">
//           <div class="card profile-two">
//             <div class="card-image profile-img--two">
//               <img src={props.img} alt="profile two" />
//             </div>
  
//             <ul class="social-icons">
//               <li>
//                 <a href={props.LinkedIn} target="_blank">
//                   <i class="fab fa-linkedin-in"></i>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href={"mailto:" + props.Email}
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     fontSize: "25px",
//                     color: "black",
//                     fontWeight: 600,
//                   }}
//                 >
//                   <MdOutlineMail className="fab" />
//                 </a>
//               </li>
//               {props.github && (
//                 <li>
//                   <a
//                     href={props.github}
//                     style={{
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       fontSize: "25px",
//                       color: "black",
//                       fontWeight: 600,
//                     }}
//                     target="_blank"
//                   >
//                     <FaGithub className="fab" />
//                   </a>
//                 </li>
//               )}
//             </ul>
  
//             <div
//               class={
//                 props.metadata && props.metadata.position2
//                   ? "details jane len"
//                   : "details jane "
//               }
//             >
//               <h2>{props.name}</h2>
//               {props.metadata && (
//                 <span className="position1">{props.metadata.position1}</span>
//               )}
//               {props.metadata && props.metadata.position2 && (
//                 <span className="position2">{props.metadata.position2}</span>
//               )}
//               {props.Department && (
//                 <span className="Department">{props.Department}</span>
//               )}
//               <span className="team">{props.Team}</span>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }

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
  Team: string;
  Department?: string;
  github?: string;
  metadata?: Metadata;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="relative w-64 h-64 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-105">
      <div className="absolute inset-0 bg-black transition-opacity duration-500">
        <img
          src={props.img}
          alt="Profile"
          className="object-cover w-full h-full opacity-100 hover:opacity-40 transition-opacity duration-500"
        />
      </div>
      <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-4 opacity-0 hover:opacity-100 transition-opacity duration-500 z-10">
        <li>
          <a
            href={props.LinkedIn}
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black text-xl hover:bg-black hover:text-white transition-colors"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a
            href={`mailto:${props.Email}`}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black text-xl hover:bg-black hover:text-white transition-colors"
          >
            <MdOutlineMail />
          </a>
        </li>
        {props.github && (
          <li>
            <a
              href={props.github}
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black text-xl hover:bg-black hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
          </li>
        )}
      </ul>
      <div
        className={`absolute bottom-0 w-full bg-white p-4 text-center ${
          props.metadata?.position2 ? "h-28" : "h-24"
        } transition-all duration-500`}
      >
        <h2 className="font-bold text-lg">{props.name}</h2>
        {props.metadata?.position1 && (
          <span className="text-sm font-medium">{props.metadata.position1}</span>
        )}
        {props.metadata?.position2 && (
          <span className="text-sm font-medium block">{props.metadata.position2}</span>
        )}
        {props.Department && <span className="font-semibold block">{props.Department}</span>}
        <span className="text-sm text-gray-600">{props.Team}</span>
      </div>
    </div>
  );
};

export default Card;
