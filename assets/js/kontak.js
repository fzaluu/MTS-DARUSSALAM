const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz_KOlFWbKKbb9ORjDndJU-BZlfoTHdKddkkbtZNZC_9QdtzierXhiP-VpcKsL6XFkb/exec";

let toastTimer = null;

function tampilToast(tipe, judul, pesan) {
    alert(judul + '\n' + pesan);
}

async function kirimData() {
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const pesan = document.getElementById('pesan').value.trim();
    const btn = document.getElementById('submitBtn');

    if (!nama || !email) {
        tampilToast('error', 'Data Tidak Lengkap', 'Nama dan email wajib diisi.');
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        tampilToast('error', 'Email Tidak Valid', 'Periksa kembali format email Anda.');
        return;
    }
    if (SCRIPT_URL.includes('GANTI_DENGAN_URL_ANDA')) {
        tampilToast('error', 'Belum Dikonfigurasi', 'URL Apps Script belum diatur. Lihat petunjuk di bawah.');
        return;
    }

    btn.disabled = true;
    btn.textContent = 'Mengirim...';

    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nama, email, pesan })
        });
        tampilToast('success', 'Pesan Berhasil Dikirim!!');
        document.getElementById('nama').value = '';
        document.getElementById('email').value = '';
        document.getElementById('pesan').value = '';
    } catch (err) {
        tampilToast('error', 'Gagal Mengirim', 'Periksa koneksi internet Anda dan coba lagi.');
    } finally {
        btn.disabled = false;
        btn.textContent = 'Kirim';
    }
}

document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.ctrlKey) kirimData();
});