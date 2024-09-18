// import React from "react";
// import { useNavigate } from "react-router-dom";
// import iconDaftar from "../../assets/daftar.png";
// import iconHome from "../../assets/home_.png";
// import iconKelas from "../../assets/Kelas.png";
// import "./Bottombar.css";

// const Bottombar = () => {
//   const navigate = useNavigate();

//   const goToKelas = () => {
//     navigate("/pilihan-kelas");
//   };

//   const goToAbout = () => {
//     navigate("/tentang-kami");
//   };

//   const goToHome = () => {
//     navigate("/");
//   };
//   return (
//     <React.Fragment>
//       <div className="wrapper">
//         <div id="bottom-bar">
//           <div onClick={() => goToHome()} className="bottom-bar-element">
//             {/* <FontAwesomeIcon icon={faHouse} /> */}
//             <img
//               className="icon-home-bottombar"
//               src={iconHome}
//               alt="Bimbel UTBK SNBT - Edumatrix Indonesia"
//             />
//             <br />
//             <span className="text-bottombar">Home</span>
//           </div>
//           <div onClick={() => goToKelas()} className="bottom-bar-element">
//             <img
//               className="icon-home-bottombar"
//               src={iconKelas}
//               alt="Bimbel UTBK SNBT - Edumatrix Indonesia"
//             />
//             <br />
//             <span className="text-bottombar">Kelas</span>
//           </div>
//           <div onClick={() => goToAbout()} className="bottom-bar-element">
//             <img
//               className="icon-home-bottombar-about"
//               src={iconDaftar}
//               alt="Bimbel UTBK SNBT - Edumatrix Indonesia"
//             />
//             <br />
//             <span className="text-bottombar">About</span>
//           </div>
//           <div className="bottom-bar-element">
//             <a href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20tanya%20program%20belajar%20yang%20ada%20di%20Edumatrix.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket%20sesinya?">
//               <img
//                 className="icon-home-bottombar"
//                 src={iconDaftar}
//                 alt="Bimbel UTBK SNBT - Edumatrix Indonesia"
//               />
//               <br />
//               <span className="text-bottombar">Daftar</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Bottombar;
