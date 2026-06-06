const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz_KOlFWbKKbb9ORjDndJU-BZlfoTHdKddkkbtZNZC_9QdtzierXhiP-VpcKsL6XFkb/exec";

async function kirimData() {
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const pesan = document.getElementById('pesan').value.trim();
    const btn = document.getElementById('submitBtn');

    if (!nama || !email) {
        alert('⚠️ Nama dan email wajib diisi.');
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('⚠️ Format email tidak valid.');
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
        alert('✅ Pesan Berhasil Dikirim!');
        document.getElementById('nama').value = '';
        document.getElementById('email').value = '';
        document.getElementById('pesan').value = '';
    } catch (err) {
        alert('❌ Gagal Mengirim. Periksa koneksi internet Anda.');
    } finally {
        btn.disabled = false;
        btn.textContent = 'Kirim';
    }
}
