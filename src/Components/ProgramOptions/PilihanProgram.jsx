import React from "react";
import "./PilihanProgram.css";

const PilihanProgram = () => {
  return (
    <div className="program-options">
      <div className="option">
        <div className="icon">🏠</div>
        <h3>Program Offline / Guru ke Rumah</h3>
        <p>
          Melayani untuk siswa di Jakarta, Bogor, Depok, Tangesel, Tangerang,
          Bekasi, Bintaro, BSD, Cibubur dan sekitarnya. Untuk area lain yang
          masih dekat dengan area tersebut akan kami upayakan.
        </p>
      </div>
      <div className="option">
        <div className="icon">🌐</div>
        <h3>Program Online / Les Privat Online</h3>
        <p>
          Melayani untuk siswa dari Bandung, Surabaya, Malang, Semarang, Jogja,
          Solo, Bali, Padang, Medan, Pekanbaru, Makassar, Manado dan berbagai
          kota baik di Indonesia maupun Luar Negeri.
        </p>
      </div>
    </div>
  );
};

export default PilihanProgram;
