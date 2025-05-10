// LesPrivateSBMPTNHeader.js
import React from "react";
import "./LesPrivateSBMPTNHeader.css";
import LesPrivateSBMPTNList from "./LesPrivateSBMPTNList";
import LesPrivateSBMPTNProgram from "./LesPrivateSBMPTNProgram";
import KeunggulanLesPrivateSBMPTNList from "./KeunggulanLesPrivateSBMPTNList";

const LesPrivateSBMPTNHeader = () => {
  return (
    <section className="centered-content-lesPrivate-SBMPTN">
      <h1 id="les-privat-sbmptn">
        Les Privat SBMPTN – Les Online dan Guru Datang ke Rumah
      </h1>
      <p>
        Guru Les Privat SBMPTN – Seleksi Bersama Masuk Perguruan Tinggi Negeri
        di Jakarta, Bogor, Depok, Tangsel, Tangerang, Bekasi, Bintaro, BSD,
        Cibubur dan sekitarnya. Les Privat Intensif Program SBMPTN Masuk UI UGM
        ITB IPB Unpad Undip Unair dan berbagai PTN Favorit Impian Lainnya. Guru
        Privat SBMPTN datang ke rumah untuk mengajar Les Privat SBMPTN
        berdasarkan mata pelajaran yang dibutuhkan.
      </p>

      <div className="image-lesPrivate">
        <img
          loading="lazy"
          src="/images/les-private/sbmptn/sbmptn.webp"
          alt="Les Privat SBMPTN"
        />
        <p className="image-caption">
          Les privat SBMPTN terbaik se-Indonesia raya
        </p>
      </div>

      {/* content 1 */}
      <h2 id="kegiatan-belajar-sbmptn">
        Apakah kita sudah memberikan dukungan terbaik?
      </h2>
      <p className="">
        Bagi Ananda yang saat ini berada di kelas 12, sebentar lagi akan
        melaksanakan ujian penting yang dilaksanakan pada semester kedua, yaitu
        UN dan UASBN. Kemudian akan disibukkan kembali dengan Ujian Tulis,
        Seleksi Bersama Masuk Perguruan Tinggi Negeri. Memilih jurusan yang
        sesuai dengan passion, target karir dan expertise untuk masa depan
        Ananda.
      </p>
      <p>
        Kita akan bisa melihat kemandirian, kedewasaan dan kesiapan Ananda dalam
        menjalani proses tersebut. Menentukan target belajar berdasarkan jenis
        ujian yang akan dijalani (splitting fokus), memilih program belajar yang
        sesuai (bimbel umum, les privat, pendalaman materi di sekolah) dan
        menentukan prioritas mata pelajaran apa saja yang perlu dikuasai lebih
        dalam pada saat belajar.
      </p>

      {/* content 2 */}
      <h2 id="dukungan-orang-tua">Dukungan Orang Tua yang Tak Tergantikan</h2>
      <p className="">
        Kemampuan Ananda dalam problem solving, manajemen waktu, manajemen emosi
        dan menentukan prioritas akan sangat teruji pada fase saat ini. Di fase
        perjuangan Ananda saat ini, diperlukan dukungan maksimal dari orang tua
        siswa. Memotivasi Ananda setiap saat agar terjaga konsistensi
        semangatnya dan juga menjadi pendengar saat Ananda kesulitan dalam
        memutuskan sesuatu atau memahami benang merah dari kesulitan yang
        dialaminya. Membantu memberikan feedback dan opsi-opsi terbaik yang
        dapat diambil Ananda untuk masa depannya. Dukungan terbaik orang tua
        sangat diperlukan dan tak tergantikan.
      </p>

      <div className="image-lesPrivate">
        <img
          loading="lazy"
          src="/images/les-private/sbmptn/ugm.webp"
          alt="Les UI"
        />
        <p className="image-caption">
          Les privat SBMPTN terbaik se-Indonesia raya
        </p>
      </div>
      <p>
        Hal terbaik juga dapat dilakukan dengan memfasilitasi Ananda agar dapat
        belajar dengan guru les privat yang sesuai agar dapat membantunya dalam
        proses belajar. Berangkat dari hal tersebut, Les Privat Matrix membuka
        Program Intensif Simak UI – Les Privat Persiapan Masuk Perguruan Tinggi
        Negeri Favorit.
      </p>

      {/* content 3 */}
      <div id="list-lest-private-sbmptn">
        <LesPrivateSBMPTNList />
      </div>

      {/* content 4 */}
      <h2 id="sistem-belajar-terstruktur">
        Les Privat Online atau Guru ke Rumah
      </h2>
      <p className="">
        Selain kemampuan siswa, sistem belajar yang terstruktur dan sistematis
        dilengkapi dengan guru les privat yang tepat akan memperbesar peluang
        siswa untuk menjalani proses belajar dengan lebih baik dan mendapatkan
        hasil yang terbaik. Les Privat Matrix siap membantu belajar melalui
        metode Online atau mengirimkan guru les privat sbmptn yang sesuai untuk
        mendampingi belajar Ananda.
      </p>
      <div className="image-lesPrivate">
        <img
          loading="lazy"
          src="/images/les-private/sbmptn/itb.webp"
          alt="Les UI"
        />
        <p className="image-caption">
          Les privat SBMPTN terbaik se-Indonesia raya
        </p>
      </div>
      <p className="">
        Les Privat Matrix (Matrix Tutoring) adalah lembaga penyedia layanan jasa
        les privat untuk TK, SD, SMP, SMA, UN, OSN, Simak UI, SBMPTN dan
        Mahasiswa, guru datang ke rumah dan les online dengan spesialisasi
        pengajaran berdasarkan keahlian tutor. Konsep pembelajaran sesuai dengan
        kurikulum yang diterapkan sekolah. Pengajar Les Privat Matrix adalah
        mahasiswa dan alumni UI, UGM, ITB, IPB, STAN, STIS, UNJ, SSE, UIN dan
        berbagai Perguruan Tinggi terbaik lainnya yang telah memiliki
        pengalaman, diseleksi, dilatih dan diarahkan mengajar sesuai dengan
        spesialisasi dalam bidang ilmu yang dikuasai.
      </p>
      <div id="program-sbmptn">
        <h2>Program Les Privat SBMPTN Matrix</h2>
        <LesPrivateSBMPTNProgram />
      </div>

      <div id="keunggulan-program-sbmptn">
        <KeunggulanLesPrivateSBMPTNList />
      </div>
    </section>
  );
};

export default LesPrivateSBMPTNHeader;
