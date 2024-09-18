import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllKotBySlug } from "../../helper/request/getAllKotaBySlug";

const ListKabupaten = () => {
  const [kabupaten, setKabupaten] = useState([]);
  const [kota, setKota] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    const fetchKota = async () => {
      try {
        const response = await getAllKotBySlug(slug);

        setKota(response.data);
        console.log("ini adalah data response", response.data);

        setKabupaten(response.data.ibukotakabupaten);
      } catch (error) {
        console.error("Failed to fetch kota data:", error);
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
        <h2 className="title-list">{`Daftar Kabupaten di ${kota.kota}`} </h2>
      </div>
      <div className="parent-list-kota">
        {kabupaten.map((item, index) => (
          <Link
            className="btn-kota"
            key={index}
            onClick={() => {
              window.location.href = `/les-privat-di/${item.slug}`;
            }}>
            {item.kota_kabupaten}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListKabupaten;
