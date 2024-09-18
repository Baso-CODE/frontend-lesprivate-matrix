import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllKotaKabupatenBySlug } from "../../helper/request/getAllKotaKabupatenBySlug";

const ListKecamatan = () => {
  const [kecamatan, setKecamatan] = useState([]);
  const [kabupaten, setKabupaten] = useState([]);
  const { slug } = useParams();
  console.log("ini adalah data dari ", slug);

  useEffect(() => {
    const fetchKota = async () => {
      try {
        const response = await getAllKotaKabupatenBySlug(slug);
        console.log("ini adalah data dari ", response);

        setKecamatan(response.data.kecamatan);
        setKabupaten(response.data);
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
        <h2 className="title-list">
          {`Daftar Kecamatan di ${kabupaten.kota_kabupaten}`}{" "}
        </h2>
      </div>
      <div className="parent-list-kota">
        {kecamatan.length > 0 ? (
          kecamatan.map((item, index) => (
            <Link to={`/les-privat-di/kecamatan/${item.slug}`}>
              {item.kecamatan}
            </Link>
          ))
        ) : (
          <p className="no-kelurahan">No Kecamatan</p>
        )}

        {/* {kecamatan.map((item, index) => (
        //   <Link
        //     className="btn-kota"
        //     key={index}
        //     onClick={() => {
        //       window.location.href = `/les-privat-di/kecamatan/${item.slug}`;
        //     }}>
        //     {item.kecamatan}
        //   </Link>
        // ))} */}
      </div>
    </div>
  );
};

export default ListKecamatan;
