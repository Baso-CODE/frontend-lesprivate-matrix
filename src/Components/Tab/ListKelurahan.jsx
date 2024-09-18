import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllKecamatanBySlug } from "../../helper/request/getAllKecamatanBySlug";

const ListKelurahan = () => {
  const [kelurahan, setKelurahan] = useState([]);
  const [kecamatan, setKecamatan] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    const fetchKota = async () => {
      try {
        const response = await getAllKecamatanBySlug(slug);
        setKelurahan(response.data.kelurahan);
        setKecamatan(response.data);
      } catch (error) {
        console.error("Failed to fetch kecamatan data:", error);
      }
    };

    fetchKota();
  }, [slug]);

  return (
    <div className="container-all-tab">
      <div className="title-container">
        <img
          className="icon-city"
          src={"/images/daftar-kota.png"}
          alt="City Icon"
        />
        <h2 className="title-list">
          {`Daftar Kelurahan di ${kecamatan.kecamatan || "..."}`}
        </h2>
      </div>
      <div className="parent-list-kota">
        {kelurahan.length > 0 ? (
          kelurahan.map((item, index) => (
            <Link
              className="btn-kota"
              key={index}
              onClick={() => {
                window.location.href = `/les-privat-di/kelurahan/${item.slug}`;
              }}>
              {item.kelurahan}
            </Link>
          ))
        ) : (
          <p className="no-kelurahan">No Kelurahan</p>
        )}
      </div>
    </div>
  );
};

export default ListKelurahan;
