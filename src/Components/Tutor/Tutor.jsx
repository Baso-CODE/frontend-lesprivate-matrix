import React from "react";
import "./Tutor.css";

const Tutor = () => {
  return (
    <div className=" container-all">
      <section className="tutor-header-les-private">
        <div className="image-lesPrivate">
          <img
            src="/images/tutor/gambar-guru.jpg"
            alt="Les Privat TK & Calistung"
          />
        </div>
        <h1>Panduan Umum</h1>
        <h2>Tujuan Utama</h2>
        <p>
          Tujuan utama tutor adalah membantu siswa-siswi dalam belajar, yaitu
          mengembangkan keterampilan dan cara belajar yang paling efektif dan
          efisien bagi siswa. Tutor harus selalu tepat waktu untuk setiap janji
          kedatangan, bukan hanya untuk menunjukkan penghargaan, tetapi sebagai
          contoh yang baik bagi siswa untuk diikuti. Bertanggung jawab secara
          penuh atas penugasan mengajar yang diberikan oleh Matrix .
        </p>
        <h2>Bahan Ajar dan Proses KBM</h2>
        <p>
          Setiap tutor akan dikirim bahan ajar melalui email baik referensi mata
          pelajaran umum maupun khusus untuk UAS, UN, dan Simak UI dan SBMPTN.
          Pada program tertentu ada modul khusus, seperti: SIMAK UI dan SBMPTN.
          Petakan kemampuan siswa pada pertemuan pertama, terapkan strategy dan
          pendekatan yang sesuai. Alur Kegiatan Belajar: Kerjakan PR, Review +
          Preview Materi, Simulasi Soal Bagi siswa yang memiliki kebutuhan
          khusus, sesuaikan model belajar dan konten belajar sesuai dengan
          kebutuhan siswa. Fokuslah pada kompetensi yang Anda kuasai, tetaplah
          jadi penyemangat dan idola bagi siswa.
        </p>
        <h2>Scheduling (Penjadwalan)</h2>
        <div className="image-lesPrivate">
          <img src="/images/tutor/penjadwalan.jpg" alt="Penjadwalan Tutor" />
        </div>
        <p>
          Pastikan setiap siswa memiliki jadwal yang tetap. Hindari pembatalan,
          jika harus terjadi lakukan reschedule dan infokan ke koordinator. Jika
          ada kegiatan yang sifatnya sangat penting sehingga tidak bisa
          mengajar, infokan H-1 ke koordinator. Berikan informasi waktu kosong
          terupdate, untuk memudahkan kami menambahkan siswa pada slot waktu
          kosong yang diagendakan untuk mengajar
        </p>
        <h2>Progress Report dan Evaluasi</h2>
        <p>
          Pastikan selalu mengisi PRESENSI SISWA, jika telah habis infokan, kami
          akan kirim ke rumah siswa. Pastikan selalu mengisi PRESENSI TUTOR
          (TUTOR ATTENDANCE SHEET), sertakan tanda tangan sejumlah siswa yang
          mengikuti, jika belajar dalam kelompok kecil. Infokan
          perkembangan/pencapaian siswa kepada orang tua siswa dan lembaga
          (setiap tanggal 8 s.d 14). Laporkan detail sesi mengajar bulan
          berjalan (pada tanggal terakhir) kepada koordinator tutor
          masing-masing dengan menyertakan foto/scan presensi tutor yang dikirim
          ke matrix.privat@gmail.com sebagai referensi jumlah sesi.
        </p>
        <h2>Proses Transfer Gaji</h2>
        <p>
          Gaji ditransfer paling lambat tanggal 10 di bulan berikutnya,
          menyesuaikan pembayaran orangtua. Cek bukti transfer yang kami
          kirimkan via email, jika ada koreksi infokan ke koordinator.
        </p>
        <div className="image-lesPrivate">
          <img src="/images/tutor/penggajian.jpg" alt="Penjadwalan Tutor" />
        </div>
        <h2>Lain-lainnya</h2>
        <p>
          Tutor tidak dibenarkan mengajar les siswa dari Matrix sebagai siswa
          pribadi. Dalam beberapa hal terdapat ketentuan khusus (pada program
          dan tutor tertentu). Semoga kerja keras kita sebagai tim dapat
          memberikan yang terbaik untuk siswa-siswa kita, menciptakan keberkahan
          dan menjadi nilai tambah dalam hidup kita.
        </p>
      </section>
    </div>
  );
};
export default Tutor;