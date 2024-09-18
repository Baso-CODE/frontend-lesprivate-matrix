import React from "react";
import "./LesPrivateKSMHeader.css";

const LesPrivateKSMHeader = () => {
  return (
    <section className="centered-content-lesPrivate-ksm">
      <h1 id="les-privat-ksm">Les Privat AKM (Asesmen Kompetensi Minimum)</h1>
      <div className="image-lesPrivate">
        <img src="/images/les-private/tk/ksm.png" alt="Les Privat AKM" />
        <p className="image-caption">Les privat AKM terbaik se-jabodetabek</p>
      </div>
      <p>
        Guru les privat persiapan Asesmen Nasional khususnya pada bagian AKM
        (Asesmen Kompetensi Minimum) untuk Kurikulum Nasional. Tersedia Guru Les
        Privat ke Rumah dan Les Privat Online.
      </p>
      {/* Section 1 */}
      <h2 id="perubahan-dunia-pendidikan">
        Perubahan dalam Dunia Pendidikan di Indonesia
      </h2>
      <p className="indent">
        Tahun 2020 adalah tahun yang penuh kejutan dan perubahan dalam dunia
        pendidikan di Indonesia. Dihapuskannya Ujian Nasional menjadi awal
        perubahan yang mendasar. Dalam rangka untuk menilai kompetensi siswa,
        Kementerian Pendidikan dan Kebudayaan (Kemendikbud) mencanangkan metode
        lain guna menggantikan Ujian Nasional yang dinilai kurang efektif dalam
        melihat potensi siswa. Jika sebelumnya dengan UN kelulusan siswa
        ditentukan dengan satu kali Ujian Nasional maka penggantinya haruslah
        bisa menimbang progress belajar siswa di sekolah selama kurun waktu tiga
        tahun. Oleh karena itu, tercetuslah Asesmen Nasional sebagai pengganti
        Ujian Nasional.
      </p>

      {/* Section 2 */}
      <h2 id="bagian-dari-asesmen-nasional">Bagian dari Asesmen Nasional</h2>
      <p className=" indent">
        Asesmen Nasional terdiri dari tiga bagian: Asesmen Kompetensi Minimum
        (AKM), Survey Karakter, dan Survey Lingkungan Belajar. AKM bisa
        memetakan sekolah – sekolah di daerah berdasarkan pada kompetensi
        minimum yang harus dipersiapkan. Kompetensi minimum adalah kompetensi
        dasar yang dibutuhkan siswa untuk belajar, terlepas dari mata pelajaran
        yang diajarkan di sekolah. Materi AKM terdiri atas Kemampuan Literasi
        (baca tulis) dan Kemampuan Numerasi (Matematika). AKM digunakan sebagai
        alat ukur pencapaian siswa dari hasil belajar kognitif.
      </p>

      {/* Section 3 */}
      <h2 id="tujuan-dari-akm">Tujuan dari AKM dan Manfaatnya</h2>
      <p className="indent">
        AKM memberikan keleluasaan bagi guru untuk menilai kemampuan dan
        progress belajar siswa di sekolah. Asesmen Kompetensi Minimum berlaku
        untuk siswa yang berada di tengah jenjang sekolah (kelas 5 SD, 8 SMP, 11
        SMA) sehingga mendorong guru dan sekolah untuk memperbaiki mutu
        pembelajaran dan tidak bisa digunakan untuk basis seleksi siswa ke
        jenjang selanjutnya. Pada dasarnya, AKM tidak menilai pada siswa, tetapi
        pada sekolahnya. Dengan AKM, siswa diharapkan dapat memiliki kompetensi
        berupa keterampilan untuk berpikir kritis, logis dan sistematis,
        bernalar menggunakan konsep dan pengetahuan yang telah dipelajari dan
        keterampilan memilah serta mengolah informasi. Secara umum, literasi
        (baca – tulis) adalah sebuah kemampuan untuk memahami, menggunakan,
        mengevaluasi, dan merefleksikan berbagai jenis teks tertulis. Sementara
        itu, kemampuan numerasi adalah kemampuan untuk berpikir menggunakan
        konsep, prosedur, fakta dan alat matematika.
      </p>
    </section>
  );
};

export default LesPrivateKSMHeader;
