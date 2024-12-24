import mysql from 'mysql'

// Konfigurasi koneksi
const connection = mysql.createConnection({
  host: 'localhost',      // Alamat server database
  user: 'root',           // Username MySQL
  password: '',           // Password MySQL (kosong jika default)
  database: 'nama_database', // Ganti dengan nama database Anda
});

// Membuka koneksi
connection.connect((err) => {
  if (err) {
    console.error('Gagal terhubung ke database:', err.message);
    return;
  }
  console.log('Berhasil terhubung ke database MySQL!');
});

// Query contoh
connection.query('SELECT * FROM tabel_anda', (err, results) => {
  if (err) {
    console.error('Kesalahan query:', err.message);
    return;
  }
  console.log('Hasil query:', results);
});

// Menutup koneksi setelah selesai
connection.end();
