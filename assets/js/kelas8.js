const data = [
      { name: "AKBAR MAULANA" },
      { name: "ALISYA NURHASANAH" },
      { name: "BILQIST QUEENA AZMINA" },
      { name: "CAHYA MAULANA" },
      { name: "HANIFA QUROTA'AINI" },
      { name: "HARLAN SAEPUL NURJAMAN" },
      { name: "JESEN ADITIYA SAPUTRA" },
      { name: "LUNAR TSABIT MUTTAQIEN" },
      { name: "LUSI FEBRIANA" },
      { name: "M. REZA TSAQIF ALDEBARA ISRAQ" },
      { name: "M.ALVI ABDULRAHMAN" },
      { name: "MUHAMAD MUZHAFFAR ALKAAF" },
      { name: "MUHAMAD RAIHANDRI RAFASYA" },
      { name: "MUHAMMAD EDVAN KAUTSAR" },
      { name: "MUHAMMAD ENRICO PIAGO PUTRA DARAJAT" },
      { name: "MUHAMMAD FIKRI EL MADANY" },
      { name: "MUHAMMAD NIZAM MAULIDAN" },
      { name: "MUHAMMAD NOFAL ALFASYANI" },
      { name: "NABILA ANGGRAINI" },
      { name: "NADIA TRI AWALIA" },
      { name: "NAZIRA ARANIA" },
      { name: "PANJI NUR MUHAMAD" },
      { name: "PUTRI ALIF MAUALIDIA" },
      { name: "PUTRI NABILA RAJABIATUL AHIRIAH" },
      { name: "RAIHAN ABDUL ROJAK" },
      { name: "RAIHAN ZULFIQRI" },
      { name: "RESKI ADITIA NUGRAHA" },
      { name: "REYZA YULIA NURUL VADILA" },
      { name: "RIFKI ADITIA PRATAMA" },
      { name: "RISKY SAPUTRA PRATAMA" },
      { name: "SAHLAN MURODI" },
      { name: "SALWA DIAN ANGGRAENI" },
      { name: "SANDI RAMADANI" },
      { name: "SANDI WIJAYA KUSUMAH" },
      { name: "SILFIA RENATA" },
      { name: "SILVI JULIANI" },
      { name: "SULFI ALBARIAH" },
      { name: "TASYA SHOFIYATUL FUADAH" },
      { name: "WANDI MAULANA" },
      { name: "YUNIEZAR NUR AULIA RAHMA" },
      { name: "ZAHIRA KHALIFATUN NISA" },
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