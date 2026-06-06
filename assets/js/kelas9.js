const data = [
      { name: "ADINDA PUTRI ZAHRA" },
      { name: "ADITIA RAHMAN" },
      { name: "AKBAR FAUZI HIDAYAT" },
      { name: "AMIRA KHOIRUNNISA" },
      { name: "ARIL APRIL REJA" },
      { name: "DELVINA RAHMA RAMADANI" },
      { name: "DIKA SUTRISNA" },
      { name: "DINAH MUNAWAROH" },
      { name: "FAHMI ADHITYA" },
      { name: "FAHRI RAHMAN" },
      { name: "GINA NURAULI RAHMAWATI" },
      { name: "IBNU HIBBAN" },
      { name: "INAYAH ZURIYAH MUJAHIDAH" },
      { name: "JULIA REVIYANA SALSABILA" },
      { name: "LULU AL MAKNUUN ABDILLAH" },
      { name: "MARSYA FAUZIAH" },
      { name: "MELI AMELIA" },
      { name: "MOHAMAD FAJRI" },
      { name: "MUHAMAD RAIHAN" },
      { name: "MUHAMAD SYAIFULOH" },
      { name: "MUHAMAD ZAKARIA AL HAFIZ" },
      { name: "MUHAMMAD AZAM FADILLAH" },
      { name: "MUHAMMAD DJUL HERDIANSAH" },
      { name: "MUHAMMAD FARDAN HAIKAL RABBANI" },
      { name: "MUHAMMAD GHASAN TAUFIQUL HAQ" },
      { name: "MUHAMMAD NISAR AGUSTIAN RAMDANI" },
      { name: "MUHAMMAD RAMDHANY" },
      { name: "MUHAMMAD ROKIB ARDIANSYAH" },
      { name: "MUHAMMAD WILDAN NUGRAHA" },
      { name: "NADILA NURUL AZMI" },
      { name: "NAJIB RAHMAT AL BUKHARI" },
      { name: "NAZWA ZAKIATUNNISA" },
      { name: "NISA MUTMAINATUL JANAH" },
      { name: "NYIMAS KHODIJAH YAHYA ALAWIYAH" },
      { name: "PARIL" },
      { name: "RAMA PRATAMA WIJAYA" },
      { name: "REHAN KAMALUDIN" },
      { name: "RIDWAN AL BUHORI" },
      { name: "RISMA NABILA" },
      { name: "RIZKI MAULANA" },
      { name: "RIZKI SYABAN PUTRA" },
      { name: "SILVIA AGUSTIN" },
      { name: "SYAGIL ROZA NUR RAMADHANI" },
      { name: "WAROSSATUL RISALAH" },
      { name: "WILDANSYAH" },
    ];

    const grid = document.getElementById("list");

    data.forEach((siswa, index) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.animationDelay = `${0.05 * index}s`;
      card.innerHTML = `
        <div class="name">${siswa.name}</div>
    `;
      grid.appendChild(card);
    });