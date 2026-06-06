const data = [
      { name: "AINI NUR LATIFAH" },
      { name: "ANA SYAHRA ATHOFUL NISA" },
      { name: "AZKY AZILA MUHARAM" },
      { name: "DENISA ANJANI" },
      { name: "DIERA KHOIRUNNISA HERDIANA" },
      { name: "FAUZAN MUBAROK" },
      { name: "FAZRIN MUHAZIR" },
      { name: "FITRI RAHMAWATI" },
      { name: "HANADZA KHALIFA ASY SYAHID" },
      { name: "HANIPAH ITSNA FADILLAH" },
      { name: "HILMI ASHIDIQ" },
      { name: "LUTFIA KHOERUL HAQIQI" },
      { name: "MILA HAYATUL KAMILAH" },
      { name: "MUHAMAD DAFFA IBNI SAKHIY" },
      { name: "MUHAMAD DIKI FARDANI" },
      { name: "MUHAMAD GILANG PERMANA" },
      { name: "MUHAMMAD FAJAR RAMDANI" },
      { name: "MUHAMMAD RAFID AWWALI" },
      { name: "NAILA NUR AFIFAH" },
      { name: "NAYRA OKTAVIANI" },
      { name: "NESA NOVITA NUR AZKIA" },
      { name: "PAHRA NUR RAHMATUN NISA" },
      { name: "RADIT ALFIRDAUS" },
      { name: "RAIHAN SAFWAN YANUAR" },
      { name: "SALMA MUSSALAMAH" },
      { name: "SALMA NUR ALIAH" },
      { name: "SALSA ZALZAH IBANAH" },
      { name: "SYAHRIL NAOFAL BAGUS RAMDANI" },
      { name: "SYEILA NAHDARUTHON NAFISYA" },
      { name: "SYIFA AROFATU SYARIFA" },
      { name: "YASEEN AUSHOF RAHMANI" },
      { name: "ZIDAN YULIZAR DHIYA`UL HAQ" },
      { name: "ZIHDAN MUHAMAD AL-PARISI" },
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