// ============================================================

export const buildingData = {
    "b1": {
        number: "b1",
        name: "Gas Turbine",
        zona: "A",
        dimensi: "± 2.450 m²",
        shortDesc: "Unit turbin gas utama (GT 1 & GT 2) yang membakar bahan bakar untuk menghasilkan daya listrik dan gas buang panas.",
        description: "Gas Turbine adalah komponen utama pembangkit yang mengonversi energi kimia bahan bakar (gas alam atau High-Speed Diesel) menjadi energi mekanik melalui proses pembakaran. Energi putar ini menggerakkan generator untuk menghasilkan listrik. Gas buang bersuhu tinggi (±540°C) dari turbin gas kemudian dialirkan ke Heat Recovery Steam Generator (HRSG) untuk menghasilkan uap.",
        fungsi: [
            "Mengonversi bahan bakar gas alam/HSD menjadi energi putar turbin",
            "Menggerakkan generator utama untuk membangkitkan listrik",
            "Menyuplai gas buang bersuhu tinggi ke HRSG"
        ]
    },
    "b2": {
        number: "b2",
        name: "Steam Turbine Building & Common Building",
        zona: "A",
        dimensi: "± 2.100 m²",
        shortDesc: "Gedung turbin uap yang memanfaatkan uap panas dari HRSG untuk membangkitkan listrik tambahan (sistem siklus kombinasi).",
        description: "Steam Turbine Building & Common Building menampung turbin uap, generator turbin uap, serta peralatan kontrol umum. Dalam siklus kombinasi (combined cycle), uap bertekanan tinggi yang dihasilkan oleh HRSG diekspansikan melalui sudu-sudu turbin uap untuk memutar generator tambahan. Hal ini meningkatkan efisiensi total pembangkitan tanpa menambah konsumsi bahan bakar.",
        fungsi: [
            "Mengonversi uap bertekanan tinggi dari HRSG menjadi energi mekanik putar",
            "Menggerakkan generator turbin uap untuk pembangkitan listrik siklus kombinasi",
            "Pusat kontrol peralatan pembantu (common building)"
        ]
    },
    "b3": {
        number: "b3",
        name: "Heat Recovery Steam Generator",
        zona: "A",
        dimensi: "± 3.200 m²",
        shortDesc: "Ketel uap daur ulang panas yang memanfaatkan gas buang panas dari turbin gas untuk menghasilkan uap.",
        description: "Heat Recovery Steam Generator (HRSG) adalah penukar panas besar yang menyerap energi kalor dari gas buang turbin gas dan memanaskan air demin untuk menghasilkan uap bertekanan tinggi (HP), menengah (IP), dan rendah (LP). Uap ini kemudian dialirkan ke turbin uap.",
        fungsi: [
            "Menyerap energi panas dari gas buang turbin gas",
            "Memproduksi uap bertekanan tinggi, menengah, dan rendah",
            "Meningkatkan efisiensi termal total PLTGU Cilegon"
        ]
    },
    "b4": {
        number: "b4",
        name: "Transformer Bay",
        zona: "A",
        dimensi: "± 1.200 m²",
        shortDesc: "Area transformator utama yang menaikkan tegangan listrik dari generator sebelum disalurkan ke jaringan switchyard.",
        description: "Transformer Bay menampung transformator utama (Main Step-Up Transformer / Generator Step-Up Transformer) dan transformator pemakaian sendiri (Unit Auxiliary Transformer). Peralatan ini berfungsi menaikkan tegangan output generator (biasanya 11kV - 15kV) menjadi tegangan tinggi 150kV.",
        fungsi: [
            "Menaikkan tegangan listrik output generator ke tegangan transmisi 150kV",
            "Menyuplai listrik internal pembangkit melalui Unit Auxiliary Transformer",
            "Dilengkapi sistem pendingin oli dan proteksi kebakaran otomatis"
        ]
    },
    "b5": {
        number: "b5",
        name: "TCA Cooler",
        zona: "A",
        dimensi: "± 450 m²",
        shortDesc: "Fasilitas pendingin udara tekan (Turbine Cooling Air Cooler) untuk mendinginkan sudu-sudu turbin gas.",
        description: "TCA (Turbine Cooling Air) Cooler mendinginkan udara ekstraksi dari kompresor sebelum disuntikkan kembali untuk mendinginkan sudu-sudu turbin gas bagian panas (combustor dan sudu tingkat awal), mencegah panas berlebih pada komponen turbin.",
        fungsi: [
            "Mendinginkan udara pendingin sudu-sudu turbin gas",
            "Mencegah kerusakan termal pada komponen panas turbin",
            "Menjaga efisiensi operasi turbin gas"
        ]
    },
    "b6": {
        number: "b6",
        name: "By-Pass Stack",
        zona: "A",
        dimensi: "± 300 m²",
        shortDesc: "Cerobong pembuangan gas buang langsung ketika turbin gas beroperasi dalam mode simpel (Simple Cycle).",
        description: "By-Pass Stack dilengkapi dengan diverter damper yang memungkinkan gas buang dari turbin gas dibuang langsung ke atmosfer tanpa melewati HRSG saat operasional simpel (simple cycle) atau saat maintenance HRSG.",
        fungsi: [
            "Saluran buang gas turbin saat operasional Simple Cycle",
            "Isolasi HRSG saat perawatan atau kondisi darurat",
            "Meningkatkan fleksibilitas pola operasi pembangkit"
        ]
    },
    "b7": {
        number: "b7",
        name: "Fuel Oil Pump Area",
        zona: "B",
        dimensi: "± 350 m²",
        shortDesc: "Stasiun pompa yang memompa bahan bakar minyak sulingan (HSD) dari tangki ke turbin gas.",
        description: "Fuel Oil Pump Area berisi pompa-pompa bertekanan tinggi, filter bahan bakar, dan sistem kontrol untuk mengalirkan minyak HSD dari Distillate Oil Tank ke sistem pembakaran turbin gas sebagai bahan bakar utama/cadangan.",
        fungsi: [
            "Memompa bahan bakar minyak HSD menuju turbin gas",
            "Melakukan filtrasi akhir bahan bakar cair",
            "Mengatur tekanan dan debit aliran minyak sesuai beban turbin"
        ]
    },
    "b8": {
        number: "b8",
        name: "Fire Station",
        zona: "D",
        dimensi: "± 300 m²",
        shortDesc: "Markas armada dan personel pemadam kebakaran siap siaga 24 jam.",
        description: "Fire Station menampung truk pemadam kebakaran, armada rescue, tangki foam, dan peralatan K3/Fire Fighting lengkap untuk penanganan darurat kebakaran di seluruh area industri PLTGU Cilegon.",
        fungsi: [
            "Penyimpanan armada truk pemadam kebakaran dan alat K3",
            "Siaga 24/7 untuk penanggulangan darurat kebakaran",
            "Pusat koordinasi tim tanggap darurat (Emergency Response Team)"
        ]
    },
    "b9": {
        number: "b9",
        name: "GT Cooling Water Cooler",
        zona: "A",
        dimensi: "± 600 m²",
        shortDesc: "Deretan pendingin kipas melingkar panjang untuk mendinginkan air pendingin sirkulasi turbin gas.",
        description: "GT Cooling Water Cooler terdiri dari rangkaian heat exchanger fin-fan berkapasitas besar yang bertugas mendinginkan air pendingin yang bersirkulasi mendinginkan sistem auxiliary turbin gas.",
        fungsi: [
            "Mendinginkan air sirkulasi pendingin auxiliary turbin gas",
            "Menjaga suhu operasi kompresor dan pelumasan tetap stabil",
            "Menjamin keandalan pendinginan berkesinambungan"
        ]
    },
        "b10": {
        number: "b10",
        name: "NOT USED",
        zona: "-",
        dimensi: "-",
        shortDesc: "Slot nomor 10 (NOT USED) pada daftar resmi peralatan.",
        description: "Slot bangunan nomor 10 bertuliskan NOT USED pada daftar resmi EQUIPMENT / BUILDING LIST.",
        fungsi: ["Tidak digunakan dalam daftar resmi peralatan pembangkit"]
    },
    "b11": {
        number: "b11",
        name: "Blow Down Pit",
        zona: "A",
        dimensi: "± 150 m²",
        shortDesc: "Bak penampungan dan pengurasan air/uap hasil blow-down dari boiler HRSG.",
        description: "Blow Down Pit digunakan untuk menampung dan menurunkan tekanan serta suhu air blow-down boiler sebelum dialirkan ke sistem pengolahan limbah air (WWTP).",
        fungsi: [
            "Penampungan air dan uap buangan blow-down HRSG",
            "Peningkatan keselamatan dengan penurunan tekanan dan suhu buangan",
            "Penyaluran air blow-down ke sistem netralisasi limbah"
        ]
    },
    "b12": {
        number: "b12",
        name: "Condensate Water Tank",
        zona: "A",
        dimensi: "± 2.900 m²",
        shortDesc: "Tangki besar penampung air kondensat hasil pendinginan uap setelah melewati steam turbine.",
        description: "Condensate Water Tank menampung air hasil kondensasi uap dari kondenser steam turbin. Air murni ini disirkulasikan kembali ke HRSG melalui pompa kondensat.",
        fungsi: [
            "Menampung air kondensat murni dari kondenser turbin uap",
            "Menyirkulasikan kembali air pengisi ke deaerator dan HRSG",
            "Menjaga efisiensi siklus air-uap tertutup"
        ]
    },
    "b13": {
        number: "b13",
        name: "Deaerator",
        zona: "A",
        dimensi: "± 400 m²",
        shortDesc: "Fasilitas penghilang gas terlarut (oksigen & CO2) dari air pengisi boiler di struktur tinggi.",
        description: "Deaerator adalah bejana tekan berstruktur tinggi yang memanaskan air pengisi boiler dengan uap untuk mengusir oksigen terlarut dan gas korosif lainnya guna mencegah korosi pipa boiler.",
        fungsi: [
            "Menghilangkan oksigen dan gas terlarut dari air pengisi boiler",
            "Mencegah korosi pada saluran tube dan drum HRSG",
            "Memanaskan awal air pengisi sebelum masuk ke HRSG"
        ]
    },
    "b14": {
        number: "b14",
        name: "150 kV AIS Area",
        zona: "A",
        dimensi: "± 3.500 m²",
        shortDesc: "Area switchyard Gardu Induk 150kV berisolasi udara (Air Insulated Switchyard).",
        description: "150 kV AIS Area menampung perlengkapan sakelar gardu induk berisolasi udara seperti busbar, pemutus tenaga (circuit breaker), pemisah (disconnector), dan trafo ukur untuk menyalurkan energi ke jaringan PLN.",
        fungsi: [
            "Titik penghubung transmisi daya listrik 150kV ke jaringan PLN",
            "Pengoperasian pemutus tenaga (breaker) dan sakelar pemisah",
            "Proteksi dan pemantauan sistem kelistrikan tegangan tinggi"
        ]
    },
    "b15": {
        number: "b15",
        name: "Oil Separator For Distillate Oil Tank Yard",
        zona: "B",
        dimensi: "± 300 m²",
        shortDesc: "Fasilitas pemisah minyak-air di bunding tangki bahan bakar HSD.",
        description: "Oil Separator For Distillate Oil Tank Yard memisahkan minyak dari air hujan dan drainase di sekitar area tangki HSD agar air buangan bebas pencemaran sebelum ke WWTP.",
        fungsi: [
            "Separasi minyak dari air drainase di yard tangki HSD",
            "Mencegah kontaminasi minyak ke lingkungan sekitar",
            "Kepatuhan standar perlindungan lingkungan hidup"
        ]
    },
    "b16": {
        number: "b16",
        name: "Water Injection Pump",
        zona: "B",
        dimensi: "± 200 m²",
        shortDesc: "Stasiun pompa injeksi air demin bertekanan tinggi ke combustor turbin gas untuk penekanan emisi NOx.",
        description: "Water Injection Pump menginjeksikan air demineralisasi presisi tinggi ke ruang bakar turbin gas saat beroperasi dengan bahan bakar cair guna menekan emisi NOx.",
        fungsi: [
            "Injeksi air demin ke combustor turbin gas penekan emisi NOx",
            "Meningkatkan daya output turbin gas (power augmentation)",
            "Menjaga ambang batas emisi sesuai Baku Mutu Lingkungan"
        ]
    },
    "b17": {
        number: "b17",
        name: "Warehouse and Workshop",
        zona: "B",
        dimensi: "± 648 m²",
        shortDesc: "Pusat penyimpanan suku cadang dan bengkel pemeliharaan teknis mekanik/listrik.",
        description: "Warehouse and Workshop menampung ribuan komponen spare parts dan dilengkapi fasilitas perbaikan mekanik, pengelasan, bubut, dan pengujian peralatan pembangkit.",
        fungsi: [
            "Penyimpanan dan manajemen inventori suku cadang pembangkit",
            "Fasilitas workshop bengkel pemeliharaan dan perbaikan komponen",
            "Pengelasan dan pengujian kelaikan alat in-house"
        ]
    },
    "b18": {
        number: "b18",
        name: "CW Pump",
        zona: "C",
        dimensi: "± 800 m²",
        shortDesc: "Stasiun pompa air pendingin utama (Circulating Water Pump) dari intake menuju kondenser.",
        description: "CW Pump (Circulating Water Pump) memompa air laut debit sangat besar dari Water Intake menuju kondenser steam turbin untuk mengondensasikan uap kembali menjadi air.",
        fungsi: [
            "Memompa air laut sebagai pendingin utama kondenser turbin uap",
            "Menyediakan debit pendinginan kontinu untuk siklus uap",
            "Menjaga vakum kondenser pada titik operasi optimal"
        ]
    },
    "b19": {
        number: "b19",
        name: "Electrochlorination Building",
        zona: "C",
        dimensi: "± 1.840 m²",
        shortDesc: "Gedung pembuat dan penginjeksi klorin (NaOCl) dari air laut untuk mencegah bio-fouling.",
        description: "Electrochlorination Building memproduksi natrium hipoklorit dari elektrolisis air laut untuk diinjeksikan ke sistem saluran air pendingin guna mencegah pertumbuhan kerang dan biota laut.",
        fungsi: [
            "Produksi natrium hipoklorit (NaOCl) secara elektrolisis dari air laut",
            "Injeksi klorin pencegah pembentukan bio-fouling pipa pendingin",
            "Perlindungan kinerja perpindahan panas kondenser"
        ]
    },
    "b20": {
        number: "b20",
        name: "Cold Stack",
        zona: "A",
        dimensi: "± 200 m²",
        shortDesc: "Cerobong pelepasan/pembuangan gas dingin pada sistem pendingin & venting HRSG.",
        description: "Cold Stack berfungsi sebagai saluran pembuangan gas/uap bersuhu lebih rendah saat pembersihan, venting, atau pelepasan sistem keselamatan teknis HRSG.",
        fungsi: [
            "Saluran venting dan pelepas tekanan gas dingin HRSG",
            "Pelepasan gas aman saat prosedur commissioning/shutdown",
            "Proteksi dari potensi overpressure pada sistem uap"
        ]
    },
    "b21": {
        number: "b21",
        name: "Aux. Boiler",
        zona: "A",
        dimensi: "± 300 m²",
        shortDesc: "Ketel uap pembantu yang menyediakan uap awal untuk proses start-up pembangkit.",
        description: "Auxiliary Boiler menghasilkan uap pembantu (auxiliary steam) untuk pemanasan awal pipa uap, gland seal steam turbin, dan deaerasi saat unit akan di-start dari kondisi dingin.",
        fungsi: [
            "Penyedia uap bantu saat proses start-up unit dari kondisi dingin",
            "Menyuplai gland sealing uap pada turbin uap",
            "Prapemanasan deaerator dan perpipaan uap"
        ]
    },
    "b22": {
        number: "b22",
        name: "Administration Building",
        zona: "D",
        dimensi: "± 1.500 m²",
        shortDesc: "Gedung perkantoran manajemen utama dan administrasi operasional PLTGU Cilegon.",
        description: "Administration Building merupakan pusat administrasi, manajemen perusahaan, keuangan, SDM, IT, dan pertemuan resmi operasional PLTGU Cilegon.",
        fungsi: [
            "Pusat kegiatan manajemen dan administrasi perusahaan",
            "Kantor staf engineering, SDM, keuangan, dan pimpinan unit",
            "Ruang rapat utama dan penerimaan tamu resmi"
        ]
    },
        "b23": {
        number: "b23",
        name: "NOT USED",
        zona: "-",
        dimensi: "-",
        shortDesc: "Slot nomor 23 (NOT USED) pada daftar resmi peralatan.",
        description: "Slot bangunan nomor 23 bertuliskan NOT USED pada daftar resmi EQUIPMENT / BUILDING LIST.",
        fungsi: ["Tidak digunakan dalam daftar resmi peralatan pembangkit"]
    },
    "b24": {
        number: "b24",
        name: "CCCW Pump",
        zona: "C",
        dimensi: "± 400 m²",
        shortDesc: "Gedung pusat kontrol dan pompa pengolahan air limbah kimia WWTP.",
        description: "Waste Water Treatment Building menampung peralatan dosing bahan kimia, panel pengontrol otomatis, dan pompa pengolah limbah di kompleks WWTP.",
        fungsi: [
            "Pusat kontrol dan peralatan dosing kimia pengolah limbah",
            "Monitoring kualitas air olahan effluent WWTP",
            "Pengoperasian sirkulasi koagulasi dan netralisasi pH"
        ]
    },
    "b25": {
        number: "b25",
        name: "Waste Water Treatment Plant",
        zona: "C",
        dimensi: "± 1.000 m²",
        shortDesc: "Kompleks kolam pengolahan air limbah (WWTP) untuk proses pengolahan fisik-kimia.",
        description: "Waste Water Treatment Plant (WWTP) mengolah seluruh limbah cair pembangkit (blow-down, pencucian, limbah laboratorium) melalui netralisasi, pengendapan, dan filtrasi.",
        fungsi: [
            "Mengolah air limbah industri pembangkit agar memenuhi baku mutu",
            "Netralisasi asam-basa dan pengendapan padatan tersuspensi",
            "Memastikan air buangan aman sebelum dialirkan ke laut"
        ]
    },
        "b26": {
        number: "b26",
        name: "NOT USED",
        zona: "-",
        dimensi: "-",
        shortDesc: "Slot nomor 26 (NOT USED) pada daftar resmi peralatan.",
        description: "Slot bangunan nomor 26 bertuliskan NOT USED pada daftar resmi EQUIPMENT / BUILDING LIST.",
        fungsi: ["Tidak digunakan dalam daftar resmi peralatan pembangkit"]
    },
    "b27": {
        number: "b27",
        name: "Gas Storage Area (Nitrogen & CO2 Cylinders)",
        zona: "B",
        dimensi: "± 350 m²",
        shortDesc: "Area penyimpanan tabung gas industri (Nitrogen, CO2, & gas pembersih).",
        description: "Gas Storage Area menampung tabung-tabung bertekanan berisi gas nitrogen untuk purging saluran gas bumi dan CO2 untuk pemadam kebakaran/purging generator.",
        fungsi: [
            "Penyimpanan tabung gas Nitrogen (N2) untuk purging jalur gas alam",
            "Penyimpanan CO2 untuk pemadaman kebakaran dan pembilasan generator",
            "Pengelolaan pasokan gas inert industri secara aman"
        ]
    },
    "b28": {
        number: "b28",
        name: "Gas Reducing Station",
        zona: "B",
        dimensi: "± 500 m²",
        shortDesc: "Stasiun pengatur dan penurun tekanan gas alam (Off-take Station) dari pipa pasokan PGN/Pertamina.",
        description: "Gas Reducing Station menyaring, memanaskan, dan menurunkan tekanan gas bumi dari jalur pipa transmisi utama hingga mencapai tekanan aman operasi turbin gas.",
        fungsi: [
            "Penurunan tekanan gas bumi secara terkontrol ke tekanan operasi turbin",
            "Filtrasi partikel dan pemisahan cairan dari gas alam",
            "Pengaturan debit dan pengukuran tekanan pasokan gas"
        ]
    },
    "b29": {
        number: "b29",
        name: "Makeup Water Tank",
        zona: "C",
        dimensi: "± 973 m²",
        shortDesc: "Tangki penyimpanan air demineralisasi cadangan pengisi siklus uap.",
        description: "Makeup Water Tank menampung air demin ber-purity tinggi untuk menggantikan kehilangan air siklus akibat blow-down boiler dan penguapan.",
        fungsi: [
            "Menyimpan cadangan air demineralisasi kualitas tinggi",
            "Menyokong kontinuitas pasokan air pengisi HRSG",
            "Menjaga keseimbangan volume air siklus uap"
        ]
    },
    "b30": {
        number: "b30",
        name: "Demineralized Water Treatment Building",
        zona: "C",
        dimensi: "± 800 m²",
        shortDesc: "Gedung pemurnian air tawar menjadi air demineralisasi (Demin Plant).",
        description: "Demineralized Water Treatment Building menampung bejana resin penukar ion (Cation, Anion, Mixed Bed) yang memurnikan air tawar hingga konduktivitas sangat rendah.",
        fungsi: [
            "Pemurnian air hasil desalinasi menjadi air demin murni",
            "Menghilangkan mineral dan silika pengganggu pipa boiler",
            "Regenerasi resin penukar ion secara periodik"
        ]
    },
    "b31": {
        number: "b31",
        name: "GT Electrical Building",
        zona: "A",
        dimensi: "± 600 m²",
        shortDesc: "Gedung kelistrikan dan modul kontrol dedicated unit Turbin Gas.",
        description: "GT Electrical Building menampung switchgear tegangan menengah/rendah, MCC, inverter, baterai DC, dan sistem kontrol instrumen khusus turbin gas.",
        fungsi: [
            "Distribusi daya listrik auxiliary unit turbin gas",
            "Menyimpan perlengkapan kontrol pneumatik/elektronik GT",
            "Catu daya DC terproteksi baterai cadangan"
        ]
    },
    "b32": {
        number: "b32",
        name: "Fire Water Pump Area",
        zona: "C",
        dimensi: "± 297 m²",
        shortDesc: "Stasiun pompa utama sistem pemadam kebakaran (Electric, Diesel, & Jockey Pump).",
        description: "Fire Water Pump Area menampung pompa-pompa pemadam bertekanan tinggi yang memompa air dari tangki pemadam ke seluruh jaringan hydrant dan sprinkler.",
        fungsi: [
            "Pasokan air bertekanan tinggi ke jaringan pemadam kebakaran",
            "Operasi otomatis Diesel Fire Pump saat terjadi padam listrik",
            "Jockey pump pembina tekanan stabil pipa pemadam"
        ]
    },
    "b33": {
        number: "b33",
        name: "Fire Water Tank",
        zona: "A",
        dimensi: "± 600 m²",
        shortDesc: "Tangki penyimpanan air cadangan khusus proteksi kebakaran.",
        description: "Fire Water Tank menyimpan volume air dalam jumlah besar yang khusus dialokasikan untuk pemadaman kebakaran di seluruh area PLTGU.",
        fungsi: [
            "Penyimpanan air dedicated untuk emergency pemadaman kebakaran",
            "Menjamin kecukupan air sesuai standar skenario NFPA",
            "Pengisian ulang otomatis dari sistem penyuplai air"
        ]
    },
    "b34": {
        number: "b34",
        name: "Raw Water Tank",
        zona: "C",
        dimensi: "± 468 m²",
        shortDesc: "Tangki penampungan air mentah (air laut/PDAM) sebelum olahan desalinasi.",
        description: "Raw Water Tank berfungsi sebagai penampung buffer air mentah baku yang dikirim dari pasokan utama sebelum diproses oleh unit Desalinasi.",
        fungsi: [
            "Penampungan air mentah buffer sumber air baku",
            "Pemerataan debit masukan ke unit Desalination Plant",
            "Cadangan air proses awal pembangkit"
        ]
    },
    "b35": {
        number: "b35",
        name: "Emergency D/G Building",
        zona: "A",
        dimensi: "± 300 m²",
        shortDesc: "Gedung generator diesel darurat (Emergency Diesel Generator) untuk pasokan blackout.",
        description: "Emergency D/G Building berisi generator mesin diesel yang otomatis menyala saat blackout total untuk memberi daya pada beban esensial penyelamat turbin.",
        fungsi: [
            "Catu daya listrik darurat otomatis saat pemadaman total (blackout)",
            "Menyuplai emergency lube oil pump dan turning gear turbin",
            "Mendukung prosedur penyetopan aman (safe shutdown)"
        ]
    },
    "b36": {
        number: "b36",
        name: "Distillate Oil Tank",
        zona: "B",
        dimensi: "± 2.500 m²",
        shortDesc: "Tangki penyimpanan utama bahan bakar minyak High Speed Diesel (HSD).",
        description: "Distillate Oil Tank adalah tangki silinder raksasa yang menyimpan minyak HSD sebagai bahan bakar cadangan/utama turbin gas saat pasokan gas terhenti.",
        fungsi: [
            "Penyimpanan stok minyak HSD skala besar untuk pembangkitan",
            "Menjamin ketahanan pasokan bahan bakar minyak",
            "Dilengkapi tanggul penahan tumpahan (bunding wall)"
        ]
    },
    "b37": {
        number: "b37",
        name: "Oil Unloading Area",
        zona: "B",
        dimensi: "± 500 m²",
        shortDesc: "Area fasilitas penerimaan dan pembongkaran minyak HSD dari truk/kapal.",
        description: "Oil Unloading Area dilengkapi manifold pipa dan koneksi fleksibel untuk proses bongkar muat BBM dari truk tangki ke tangki penampung.",
        fungsi: [
            "Fasilitas pembongkaran minyak HSD dari truk pengangkut",
            "Dilengkapi sistem pembumian (grounding) pencegah statis",
            "Pengukuran awal debit penerimaan minyak"
        ]
    },
    "b38": {
        number: "b38",
        name: "Guard House",
        zona: "D",
        dimensi: "± 119 m²",
        shortDesc: "Pos keamanan pintu gerbang utama PLTGU (Pos Gate & Akses Masuk).",
        description: "Guard House adalah pos pemeriksa keamanan utama tempat verifikasi identitas personel, tamu, dan kendaraan yang masuk ke kawasan PLTGU Cilegon.",
        fungsi: [
            "Pemeriksaan identitas dan izin akses personel serta tamu",
            "Pengawasan lalu lintas kendaraan dan barang masuk-keluar",
            "Pusat pemantauan CCTV gerbang depan"
        ]
    },
    "b39": {
        number: "b39",
        name: "Turbine Oil Storage Tank (GT/ST Clean & Dirty Oil Tank)",
        zona: "B",
        dimensi: "± 400 m²",
        shortDesc: "Tangki penyimpanan oli pelumas bersih dan kotor untuk turbin gas & uap.",
        description: "Turbine Oil Storage Tank menampung cadangan oli pelumas baru (clean oil) dan oli pelumas bekas/kotor (dirty oil) saat penggantian oli rutin turbin.",
        fungsi: [
            "Penyimpanan oli pelumas turbin baru dan bekas",
            "Fasilitas pemindahan oli saat overhaul turbin",
            "Pencegahan tumpahan oli ke tanah industri"
        ]
    },
    "b40": {
        number: "b40",
        name: "Intake Structure",
        zona: "C",
        dimensi: "± 720 m²",
        shortDesc: "Struktur bangunan pengambilan air laut (Water Intake) dengan saringan otomatis.",
        description: "Intake Structure berada di tepi laut, dilengkapi travelling bar screen dan saluran penyaring kotoran laut sebelum air diambil oleh pompa pendingin.",
        fungsi: [
            "Pengambilan air laut sebagai pasokan air pendingin dan desalinasi",
            "Penyaringan kotoran, sampah, dan biota laut dengan bar screen",
            "Perlindungan pompa dari penyumbatan benda asing"
        ]
    },
    "b41": {
        number: "b41",
        name: "Laydown Area for Intake Equipment",
        zona: "C",
        dimensi: "± 600 m²",
        shortDesc: "Area perkerasan lantai terbuka di dekat Intake untuk penempatan peralatan maintenance.",
        description: "Laydown Area for Intake Equipment digunakan sebagai tempat meletakkan pompa, saringan, crane, dan peralatan saat overhaul area Water Intake.",
        fungsi: [
            "Area perakitan dan penempatan alat kerja pemeliharaan Intake",
            "Lokasi pembersihan travelling screen saat overhaul",
            "Fasilitas pendukung perawatan alat teknis perairan"
        ]
    },
    "b42": {
        number: "b42",
        name: "Fuel Oil Unloading Pump Area",
        zona: "B",
        dimensi: "± 300 m²",
        shortDesc: "Stasiun pompa pembongkaran bahan bakar minyak HSD di luar benteng tangki b36.",
        description: "Fuel Oil Unloading Pump Area berisi pompa-pompa pemindah berkapasitas tinggi untuk menyedot HSD dari area pembongkaran menuju tangki penerima.",
        fungsi: [
            "Memompa minyak HSD dari armada tangki ke penyimpanan",
            "Penyaringan kasar bahan bakar cair dari kotoran fisikal",
            "Menjaga laju pembongkaran BBM agar efisien"
        ]
    },
    "b43": {
        number: "b43",
        name: "Laydown Area for GT Maintenance",
        zona: "A",
        dimensi: "± 800 m²",
        shortDesc: "Area terbuka lantai beton di dekat gedung turbin gas untuk perakitan & pemeliharaan GT.",
        description: "Laydown Area for GT Maintenance adalah area kerja lapangan luas di sekitar GT 1 & 2 untuk meletakkan rotor, casing, dan kompresor saat pemeliharaan besar (major overhaul).",
        fungsi: [
            "Tempat penempatan komponen berat turbin gas saat overhaul",
            "Area kerja pembersihan dan inspeksi sudu-sudu turbin",
            "Memudahkan mobilisasi crane dan alat berat pemeliharaan"
        ]
    },
    "b44": {
        number: "b44",
        name: "Raw Water Transfer Pump",
        zona: "C",
        dimensi: "± 200 m²",
        shortDesc: "Stasiun pompa pemindah air baku dari tangki b34 ke unit pengolahan.",
        description: "Raw Water Transfer Pump memompa air mentah dari Raw Water Tank menuju pabrik desalinasi dan sistem pengolahan air pembersih.",
        fungsi: [
            "Transfer air baku dari tangki ke Desalination Plant",
            "Pengaturan debit pasokan air proses secara berkesinambungan",
            "Penjagaan tekanan alir saluran air mentah"
        ]
    },
    "b45": {
        number: "b45",
        name: "Sewage Treatment Plant",
        zona: "D",
        dimensi: "± 250 m²",
        shortDesc: "Fasilitas pengolahan limbah domestik/toilet gedung perkantoran & umum.",
        description: "Sewage Treatment Plant mengolah limbah sanitasi domestik perkantoran melalui proses aerasi biologi agar aman dan tidak berbau sebelum dilepas.",
        fungsi: [
            "Pengolahan biologis limbah sanitasi domestik",
            "Penghilangan bau dan bakteri patogen air limbah gedung",
            "Kepatuhan standar kebersihan lingkungan domestik"
        ]
    },
    "b46": {
        number: "b46",
        name: "Gas Treatment Station",
        zona: "B",
        dimensi: "± 400 m²",
        shortDesc: "Stasiun pemurnian dan pengondisian gas alam di dekat Gas Reducing Station.",
        description: "Gas Treatment Station menyaring kelembapan, mengatur temperatur gas alam dengan heater, dan memisahkan kondensat cair sebelum masuk ke ruang bakar turbin.",
        fungsi: [
            "Pengondisian suhu dan kelembapan gas alam pasokan GT",
            "Pemisahan kondensat hidrokarbon cair dari gas",
            "Memastikan kualitas gas memenuhi spesifikasi pembakaran"
        ]
    },
    "b47": {
        number: "b47",
        name: "Demin Water Transfer Pump",
        zona: "C",
        dimensi: "± 200 m²",
        shortDesc: "Pompa pemindah air demineralisasi dari tangki b29 menuju sistem pengisi HRSG.",
        description: "Demin Water Transfer Pump memompa air demin murni ke deaerator dan condenser hotwell saat terjadi pengurangan level air pengisi boiler.",
        fungsi: [
            "Mengalirkan air demin murni dari tangki penyimpanan ke boiler",
            "Penjagaan level air pengisi HRSG secara otomatis",
            "Penyuplai air makeup saat proses start-up"
        ]
    },
    "b48": {
        number: "b48",
        name: "Foam Spare Bottle Space",
        zona: "B",
        dimensi: "± 150 m²",
        shortDesc: "Gudang penyimpanan tabung konsentrat busa pemadam kebakaran di yard tangki HSD.",
        description: "Foam Spare Bottle Space menyimpan tabung-tabung busa pemadam (AFFF foam concentrate) cadangan untuk proteksi pemadaman api di area tangki minyak HSD.",
        fungsi: [
            "Penyimpanan konsentrat foam pemadam kebakaran tangki BBM",
            "Pengisian ulang cepat sistem pemadam busa otomatis",
            "Perlindungan darurat dari bahaya kebakaran minyak"
        ]
    },
    "b49": {
        number: "b49",
        name: "GT Cooling Water Pump & Make Up Tank",
        zona: "A",
        dimensi: "± 350 m²",
        shortDesc: "Pompa sirkulasi air pendingin GT dan tangki penambahnya di dekat b9.",
        description: "GT Cooling Water Pump & Make Up Tank memompa air pendingin sirkulasi tertutup menuju pendingin fin-fan b9 dan menjaga volume air pendingin sirkulasi.",
        fungsi: [
            "Sirkulasi air pendingin komponen auxiliary turbin gas",
            "Menjaga kecukupan level air sirkulasi pendingin GT",
            "Stabilisasi tekanan air pendingin sirkulasi tertutup"
        ]
    },
    "b50": {
        number: "b50",
        name: "Laydown Area for ST Maintenance",
        zona: "A",
        dimensi: "± 700 m²",
        shortDesc: "Area perkerasan terbuka di samping gedung turbin uap untuk maintenance ST.",
        description: "Laydown Area for ST Maintenance khusus digunakan untuk menempatkan bagian-bagian casing turbin uap, rotor, dan pipa uap saat perbaikan Steam Turbine.",
        fungsi: [
            "Fasilitas penempatan komponen turbin uap saat overhaul",
            "Area inspeksi visual dan pembersihan sudu turbin uap",
            "Ruang gerak alat angkat berat (crane/forklift)"
        ]
    },
    "b51": {
        number: "b51",
        name: "150 kV Substation Control Building",
        zona: "A",
        dimensi: "± 400 m²",
        shortDesc: "Gedung pusat kontrol dan panel proteksi Gardu Induk 150kV.",
        description: "150 kV Substation Control Building berisi panel-panel relai proteksi digital, sistem SCADA switchyard, dan modul komunikasi jaringan transmisi 150kV.",
        fungsi: [
            "Pusat kendali dan proteksi pemutus arus switchyard 150kV",
            "Menyimpan relai proteksi transmisi digital dan sistem SCADA",
            "Komunikasi tele-informasi dengan sistem pengatur beban transmisi"
        ]
    },
    "b52": {
        number: "b52",
        name: "C.W Outfall / Outlet",
        zona: "D",
        dimensi: "± 800 m²",
        shortDesc: "Saluran pelepasan akhir air pendingin kondenser dan effluent murni ke laut.",
        description: "C.W Outfall / Outlet adalah saluran konstruksi pantai yang mengalirkan kembali air laut pendingin yang telah mendinginkan kondenser ke laut terbuka.",
        fungsi: [
            "Pelepasan kembali air laut pendingin ke laut lepas",
            "Konstruksi pemecah arus pengurang dampak termal laut",
            "Pemantauan kualitas air buangan akhir (online analyzer)"
        ]
    },
    "b53": {
        number: "b53",
        name: "Hydrogen Plant",
        zona: "B",
        dimensi: "± 300 m²",
        shortDesc: "Fasilitas pembangkit/penyimpanan gas hidrogen murni penyejuk generator.",
        description: "Hydrogen Plant memproduksi atau menyimpan gas hidrogen (H2) berkualitas murni yang digunakan sebagai media pendingin berpotensi transfer panas tinggi di dalam generator turbin.",
        fungsi: [
            "Penyediaan gas hidrogen murni pendingin rotor generator",
            "Pengaturan tekanan dan kemurnian gas pendingin generator",
            "Proteksi sistem pengaman pembuangan hidrogen"
        ]
    },
    "b54": {
        number: "b54",
        name: "Mosque",
        zona: "D",
        dimensi: "± 245 m²",
        shortDesc: "Masjid PLTGU Cilegon untuk tempat ibadah karyawan dan warga sekitar.",
        description: "Masjid PLTGU Cilegon menyediakan sarana ibadah yang nyaman bagi karyawan Muslim dan tamu di lingkungan pembangkit.",
        fungsi: [
            "Fasilitas ibadah sholat 5 waktu dan Sholat Jumat",
            "Pusat kegiatan kerohanian Islam karyawan",
            "Sarana pembinaan mental dan keagamaan"
        ]
    },
    "b55": {
        number: "b55",
        name: "HSD Treatment Plant",
        zona: "B",
        dimensi: "± 400 m²",
        shortDesc: "Gedung pemurnian dan penyaringan minyak HSD di sebelah kiri benteng tangki b36.",
        description: "HSD Treatment Plant menyaring kontaminan, memisahkan kandungan air, dan memanaskan minyak HSD agar memenuhi spesifikasi injeksi combustor turbin gas.",
        fungsi: [
            "Pemurnian minyak HSD dari partikel dan kadar air",
            "Pemanasan bahan bakar menurunkan viskositas alir",
            "Pemeriksaan mutu minyak HSD sebelum pembakaran"
        ]
    },
    "b56": {
        number: "b56",
        name: "Desalination Plant",
        zona: "C",
        dimensi: "± 1.693 m²",
        shortDesc: "Pabrik pengolahan air laut menjadi air tawar (Reverse Osmosis / Multi-Stage Flash).",
        description: "Desalination Plant mengubah air laut menjadi air tawar murni dengan memisahkan kadar garam secara intensif sebagai pasokan air demin pembangkit.",
        fungsi: [
            "Mengolah air laut menjadi air tawar murni berkapasitas tinggi",
            "Pemasok utama air baku untuk Demin Plant",
            "Pengurangan kadar garam dan mineral terlarut"
        ]
    },
    "b57": {
        number: "b57",
        name: "Fuel Oil Receiving Tank",
        zona: "B",
        dimensi: "± 600 m²",
        shortDesc: "Tangki penerima awal minyak HSD dari pembongkaran truk sebelum masuk tangki b36.",
        description: "Fuel Oil Receiving Tank menampung sementara minyak HSD dari unloading pump untuk proses pengendapan awal sebelum dipompa ke Distillate Oil Tank.",
        fungsi: [
            "Penampungan sementara minyak HSD hasil bongkar muat",
            "Pengendapan gravitasi awal air dan endapan minyak",
            "Buffer penyeimbang debit transfer bahan bakar"
        ]
    },
    "b58": {
        number: "b58",
        name: "Seal Pit",
        zona: "D",
        dimensi: "± 200 m²",
        shortDesc: "Struktur bak penahan (Seal Pit) di tepi saluran pembuangan b52.",
        description: "Seal Pit menjaga batas kedap air (hydraulic seal) pada ujung saluran pendingin outfall agar tidak terjadi penyedotan balik air laut dan tekanan udara buang.",
        fungsi: [
            "Menjaga penutupan hidrolik (water seal) saluran buangan",
            "Mencegah efek siphon balik dan arus ombak laut",
            "Stabilisasi pelepasan air pendingin ke saluran pantai"
        ]
    },
    "b59": {
        number: "b59",
        name: "Garage",
        zona: "D",
        dimensi: "± 311 m²",
        shortDesc: "Gedung garasi & tempat parkir terlindung kendaraan operasional PLTGU.",
        description: "Garage menyediakan tempat parkir dan pemeliharaan rutin untuk armada mobil dinas, truck, dan alat transportasi internal PLTGU.",
        fungsi: [
            "Garasi dan pemeliharaan kendaraan dinas operasional",
            "Perlindungan armada transportasi dari cuaca",
            "Manajemen pengelolaan alokasi armada perusahaan"
        ]
    },
    "b60": {
        number: "b60",
        name: "Yard",
        zona: "D",
        dimensi: "± 1.200 m²",
        shortDesc: "Halaman perkerasan semen luas & tiang bendera di depan Gedung Admin & Masjid.",
        description: "Yard adalah lapangan perkerasan semen terbuka luas yang digunakan untuk upacara bendera, apel pagi karyawan, gathering, dan kegiatan outdoor perusahan.",
        fungsi: [
            "Lapangan upacara bendera dan apel K3 mingguan/bulanan",
            "Area gathering dan kegiatan outdoor bersama karyawan",
            "Ruang terbuka serbaguna kawasan administrasi"
        ]
    },
    "b61": {
        number: "b61",
        name: "Laboratory",
        zona: "A",
        dimensi: "± 250 m²",
        shortDesc: "Fasilitas laboratorium pengujian kualitas air, minyak, dan bahan kimia operasional.",
        description: "Laboratorium pengujian kimia dan kualitas air bahan baku (raw water), air demin, minyak pelumas, dan bahan bakar untuk menjamin keandalan operasional pembangkit.",
        fungsi: [
            "Pengujian kualitas air baku dan air demin boiler",
            "Analisis laboratorium bahan bakar HSD dan minyak pelumas",
            "Kontrol kualitas kimia air pendingin pembangkit"
        ]
    },
    "b62": {
        number: "b62",
        name: "Gedung K3 (HSE Office)",
        zona: "D",
        dimensi: "± 300 m²",
        shortDesc: "Gedung pusat keselamatan kerja, kesehatan lingkungan, dan pelatihan K3 karyawan.",
        description: "Gedung operasional tim HSE (Health, Safety, and Environment) untuk pengelolaan keselamatan kerja, inspeksi peralatan K3, dan pelatihan tanggap darurat.",
        fungsi: [
            "Pusat koordinasi operasional tim keselamatan K3 (HSE)",
            "Ruang penyimpanan perlengkapan APD dan tanggap darurat",
            "Ruang pengarahan dan induksi K3 karyawan & kontraktor"
        ]
    },
    "b63": {
        number: "b63",
        name: "Engineering Building",
        zona: "B",
        dimensi: "± 600 m²",
        shortDesc: "Gedung kantor perencanaan teknik, rekayasa enjinering, dan sistem pembangkit.",
        description: "Gedung kantor khusus tim enginering pemeliharaan, keandalan sistem pembangkit, dan perencanaan proyek teknis PLTGU Cilegon.",
        fungsi: [
            "Pusat rekayasa dan perencanaan pemeliharaan teknik",
            "Monitoring keandalan dan analisis efisiensi pembangkit",
            "Ruang kerja insinyur teknik dan spesialis sistem"
        ]
    },
    "b64": {
        number: "b64",
        name: "Gardu Induk 150 kV AIS",
        zona: "A",
        dimensi: "± 800 m²",
        shortDesc: "Fasilitas gardu induk transmisi sakelar listrik 150 kV (Air Insulated Switchgear).",
        description: "Gardu induk transmisi daya listrik 150 kV berisolasi udara untuk menyalurkan energi listrik hasil olahan pembangkit ke sistem interkoneksi PLN.",
        fungsi: [
            "Penyaluran daya listrik 150 kV ke jaringan transmisi PLN",
            "Proteksi dan pemutus daya utama sistem kelistrikan",
            "Fasilitas isolasi transmisi tegangan tinggi"
        ]
    },
    "b65": {
        number: "b65",
        name: "Pos Security Samping",
        zona: "D",
        dimensi: "± 60 m²",
        shortDesc: "Pos pemeriksaan keamanan kendaraan & akses masuk gerbang samping.",
        description: "Pos pos penjagaan keamanan pintu masuk samping untuk pemeriksaan dokumen kendaraan operasional dan pengawasan akses lalu lintas kawasan.",
        fungsi: [
            "Pemeriksaan akses gerbang samping dan lalu lintas logistik",
            "Pos penyiagaan personel keamanan fisik kawasan",
            "Pengawasan perbatasan luar area fasilitas pembangkit"
        ]
    },

    "b66": {
        number: "b66",
        name: "Safety Center / UPPK",
        zona: "D",
        dimensi: "± 350 m²",
        shortDesc: "Pusat keselamatan kerja K3 & Unit Pelayanan Kesehatan Kerja.",
        description: "Fasilitas keselamatan kerja K3, pusat klinik UPPK (Unit Pelayanan Kesehatan Kerja), dan pengawasan K3 karyawan.",
        fungsi: [
            "Pusat penanganan kesehatan dan K3 karyawan",
            "Klinik pelayanan kesehatan kerja (UPPK)",
            "Ruang pertolongan pertama (P3K)"
        ]
    },
    "b67": {
        number: "b67",
        name: "Area BSM (Berkah Swadaya Mandiri) & Sakopi",
        zona: "D",
        dimensi: "± 400 m²",
        shortDesc: "Fasilitas kantin, minimarket BSM, dan Cafe Sakopi.",
        description: "Kawasan pelayanan karyawan yang mencakup minimarket BSM, pujasera/kantin, dan tempat istirahat Cafe Sakopi.",
        fungsi: [
            "Fasilitas minimarket Koperasi BSM karyawan",
            "Kantin dan area katering makanan karyawan",
            "Tempat istirahat dan Cafe Sakopi"
        ]
    },
    "b68": {
        number: "b68",
        name: "Area Solar Panel & Rumah Bibit",
        zona: "D",
        dimensi: "± 500 m²",
        shortDesc: "Instalasi panel surya PV & green house pembibitan tanaman penghijauan.",
        description: "Area fasilitas energi terbarukan instalasi Solar Panel PV serta rumah pembibitan tanaman (Green House) untuk program penghijauan lingkungan kawasan PLTGU Cilegon.",
        fungsi: [
            "Pembangkit listrik tenaga surya (PV) energi bersih internal",
            "Pembibitan pohon dan tanaman reboisasi kawasan",
            "Fasilitas edukasi lingkungan hidup perusahan"
        ]
    },
    "b69": {
        number: "b69",
        name: "Area Olahraga / Lapangan",
        zona: "D",
        dimensi: "± 600 m²",
        shortDesc: "Fasilitas lapangan olahraga serbaguna karyawan.",
        description: "Lapangan olahraga serbaguna terbuka untuk kegiatan fisik, olahraga tenis/badminton/futsal karyawan PLTGU Cilegon.",
        fungsi: [
            "Fasilitas olahraga dan kebugaran karyawan",
            "Kegiatan turnamen olahraga internal perusahan"
        ]
    },
    "b70": {
        number: "b70",
        name: "Gedung Parkir Samping",
        zona: "D",
        dimensi: "± 200 m²",
        shortDesc: "Gedung penunjang parkir dan penyimpanan operasional samping.",
        description: "Fasilitas gedung parkir samping dan area tempat teduh kendaraan operasional.",
        fungsi: [
            "Area parkir penunjang kendaraan operasional",
            "Fasilitas penyimpanan peralatan pendukung"
        ]
    }
};

// ============================================================
// APPLICATION LOGIC
// ============================================================

const allImageFiles = import.meta.glob('../public/buildings/**/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}');
const allImagePaths = Object.keys(allImageFiles);

document.addEventListener("DOMContentLoaded", () => {

    // Keep every numbered map marker visually consistent without moving its center point.
    [
        ['mapOverlaySatelit', 150],
        ['mapOverlayVektor', 80]
    ].forEach(([overlayId, size]) => {
        const overlay = document.getElementById(overlayId);
        if (!overlay) return;

        overlay.querySelectorAll('image.building-icon').forEach(icon => {
            const x = Number(icon.getAttribute('x'));
            const y = Number(icon.getAttribute('y'));
            const width = Number(icon.getAttribute('width'));
            const height = Number(icon.getAttribute('height'));

            if (![x, y, width, height].every(Number.isFinite)) return;

            icon.setAttribute('x', x + (width - size) / 2);
            icon.setAttribute('y', y + (height - size) / 2);
            icon.setAttribute('width', size);
            icon.setAttribute('height', size);
        });

        overlay.querySelectorAll('.building-polygon').forEach(building => overlay.appendChild(building));
    });

    // ===== DIGITAL CLOCK (WIB — Cilegon, Banten) =====
    const clockTimeEl = document.getElementById('clockTime');
    if (clockTimeEl) {
        function updateClock() {
            const now = new Date();
            const options = {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
                timeZone: 'Asia/Jakarta'
            };
            clockTimeEl.textContent = now.toLocaleTimeString('id-ID', options);
        }
        updateClock();
        setInterval(updateClock, 1000);
    }

    // ===== MAP VIEW TOGGLE (Satelit ↔ Vektor) =====
    const mapViewToggle = document.getElementById('mapViewToggle');
    if (mapViewToggle) {
        const btnSatelit = document.getElementById('btnSatelit');
        const btnVektor = document.getElementById('btnVektor');
        const baseMapSatelit = document.getElementById('baseMapSatelit');
        const baseMapVektor = document.getElementById('baseMapVektor');
        const overlaySatelit = document.getElementById('mapOverlaySatelit');
        const overlayVektor = document.getElementById('mapOverlayVektor');

        let mapSwitchTimeout = null;

        function switchMapView(view) {
            if (mapSwitchTimeout) clearTimeout(mapSwitchTimeout);

            if (view === 'satelit') {
                btnSatelit.classList.add('active');
                btnVektor.classList.remove('active');
                // Base map
                baseMapSatelit.style.display = '';
                baseMapSatelit.offsetHeight; // reflow
                baseMapSatelit.classList.add('active');
                baseMapVektor.classList.remove('active');
                mapSwitchTimeout = setTimeout(() => {
                    if (!baseMapVektor.classList.contains('active')) {
                        baseMapVektor.style.display = 'none';
                    }
                }, 400);
                // SVG overlay
                if (overlaySatelit) overlaySatelit.style.display = '';
                if (overlayVektor) overlayVektor.style.display = 'none';
            } else {
                btnVektor.classList.add('active');
                btnSatelit.classList.remove('active');
                // Base map
                baseMapVektor.style.display = '';
                baseMapVektor.offsetHeight; // reflow
                baseMapVektor.classList.add('active');
                baseMapSatelit.classList.remove('active');
                mapSwitchTimeout = setTimeout(() => {
                    if (!baseMapSatelit.classList.contains('active')) {
                        baseMapSatelit.style.display = 'none';
                    }
                }, 400);
                // SVG overlay
                if (overlaySatelit) overlaySatelit.style.display = 'none';
                if (overlayVektor) overlayVektor.style.display = '';
            }
        }

        btnSatelit.addEventListener('click', () => switchMapView('satelit'));
        btnVektor.addEventListener('click', () => switchMapView('vektor'));
    }

    const buildings = document.querySelectorAll('.building-polygon');
    const modalOverlay = document.getElementById('infoModal');

    // Guard: Hanya jalankan logic interaktif jika berada di index.html
    if (!modalOverlay) return;
    const closeModalBtn = document.getElementById('closeModal');
    const tooltip = document.getElementById('tooltip');

    // Popover elements
    const popoverCard = document.getElementById('popoverCard');
    const popoverTitle = document.getElementById('popoverTitle');
    const popoverDesc = document.getElementById('popoverDesc');
    const popoverImage = document.getElementById('popoverImage');
    const popoverClose = document.getElementById('popoverClose');
    const btnDetail = document.getElementById('btnDetail');

    let currentBuildingId = null;

    // Modal content elements
    const modalNumber = document.getElementById('modalNumber');
    const modalName = document.getElementById('modalName');
    const modalDescription = document.getElementById('modalDescription');

    // Attach events to each interactive building
    buildings.forEach(building => {
        // Click → open popover card
        building.addEventListener('click', function (e) {
            e.stopPropagation();
            const buildingId = this.getAttribute('data-building-id');
            openPopover(buildingId, e.clientX, e.clientY);
            tooltip.classList.remove('visible');
        });

        // Hover → show tooltip
        building.addEventListener('mouseenter', function () {
            const data = buildingData[this.getAttribute('data-building-id')];
            if (data) {
                tooltip.textContent = data.name;
                tooltip.classList.add('visible');
            }
        });

        building.addEventListener('mousemove', function (e) {
            tooltip.style.left = (e.clientX + 16) + 'px';
            tooltip.style.top = (e.clientY - 12) + 'px';
        });

        building.addEventListener('mouseleave', function () {
            tooltip.classList.remove('visible');
        });

        // Keyboard accessibility (Enter/Space)
        building.setAttribute('tabindex', '0');
        building.setAttribute('role', 'button');
        building.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // If opened via keyboard, position popover in center of screen
                openPopover(this.getAttribute('data-building-id'), window.innerWidth / 2, window.innerHeight / 2);
            }
        });
    });

    // Open Popover logic
    function openPopover(buildingId, x, y) {
        const data = buildingData[buildingId];
        if (!data) return;

        currentBuildingId = buildingId;
        popoverTitle.textContent = data.name;

        // Nyalakan (highlight) polygon bangunan yang dipilih di peta
        document.querySelectorAll('.building-polygon.active').forEach(el => el.classList.remove('active'));
        document.querySelectorAll(`.building-polygon[data-building-id="${buildingId}"]`).forEach(el => el.classList.add('active'));

        // Use shortDesc if available, otherwise truncate description
        let desc = data.shortDesc || data.description;
        if (!data.shortDesc && desc.length > 150) {
            desc = desc.substring(0, 150) + "...";
        }
        popoverDesc.textContent = desc;

        // Auto-load thumbnail dari allImagePaths matching folderName atau buildingId
        const folderName = buildingId + '(' + data.name.replace(/[\/\\:*?"<>|]/g, '-') + ')';
        const folderPathMatcher = `../public/buildings/${folderName}/`.toLowerCase();
        const folderPathMatcherFallback = `../public/buildings/${buildingId}/`.toLowerCase();

        let thumbPath = allImagePaths.find(path => {
            const normPath = path.replace(/\\/g, '/');
            const lowerPath = normPath.toLowerCase();
            const isInsideFolder = lowerPath.startsWith(folderPathMatcher) || lowerPath.startsWith(folderPathMatcherFallback);
            const isThumb = lowerPath.endsWith('/thumb.jpg') || 
                            lowerPath.endsWith('/thumb.jpeg') || 
                            lowerPath.endsWith('/thumb.png') || 
                            lowerPath.endsWith('/thumb.webp');
            return isInsideFolder && isThumb;
        });

        // Fallback: jika tidak ada file thumb.*, gunakan gambar pertama di folder tersebut
        if (!thumbPath) {
            const folderImages = allImagePaths.filter(path => {
                const normPath = path.replace(/\\/g, '/');
                const lowerPath = normPath.toLowerCase();
                return lowerPath.startsWith(folderPathMatcher) || lowerPath.startsWith(folderPathMatcherFallback);
            }).sort();
            if (folderImages.length > 0) {
                thumbPath = folderImages[0];
            }
        }

        if (thumbPath) {
            popoverImage.src = thumbPath.replace('../public', '');
            popoverImage.style.display = 'block';
        } else {
            popoverImage.style.display = 'none';
        }

        popoverCard.classList.add('visible');

        // Position logic (prevent overflowing screen)
        const popWidth = 320;
        const popHeight = popoverCard.offsetHeight || 350; // estimate if not rendered

        let posX = x + 15;
        let posY = y + 15;

        if (posX + popWidth > window.innerWidth) posX = window.innerWidth - popWidth - 15;
        if (posY + popHeight > window.innerHeight) posY = y - popHeight - 15;

        popoverCard.style.left = posX + 'px';
        popoverCard.style.top = posY + 'px';
    }

    function closePopover() {
        popoverCard.classList.remove('visible');
        document.querySelectorAll('.building-polygon.active').forEach(el => el.classList.remove('active'));
    }

    // Detail button clicks inside popover
    btnDetail.addEventListener('click', () => {
        closePopover();
        if (currentBuildingId) openModal(currentBuildingId);
    });

    // Close popover when clicking close button or outside
    popoverClose.addEventListener('click', closePopover);
    document.addEventListener('click', (e) => {
        if (!popoverCard.contains(e.target) && !e.target.closest('.building-polygon')) {
            closePopover();
        }
    });

    // Open modal with building data
    function openModal(buildingId) {
        const data = buildingData[buildingId];
        if (!data) return;

        const numVal = data.number || buildingId;
        document.getElementById('modalNumber').textContent = (numVal.startsWith('b') || numVal.startsWith('B') || numVal.startsWith('#')) ? numVal : '#' + numVal;
        document.getElementById('modalName').textContent = data.name;
        document.getElementById('modalDescription').textContent = data.description;
        document.getElementById('modalDimensi').textContent = data.dimensi || '-';

        // Zona badge (header + meta-row)
        const zonaEl = document.getElementById('modalZona');
        const zonaDetailEl = document.getElementById('modalZonaDetail');
        const zonaVal = data.zona || '-';
        [zonaEl, zonaDetailEl].forEach(el => {
            if (el) {
                el.textContent = 'Zona ' + zonaVal;
                el.className = 'zona-badge zona-' + zonaVal.toLowerCase();
            }
        });
        // Fungsi list
        const fungsiEl = document.getElementById('modalFungsi');
        fungsiEl.innerHTML = '';
        if (data.fungsi && data.fungsi.length > 0) {
            data.fungsi.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                fungsiEl.appendChild(li);
            });
            document.getElementById('modalFungsiSection').style.display = '';
        } else {
            document.getElementById('modalFungsiSection').style.display = 'none';
        }

        // Gallery — auto-detect photos from /buildings/<id>/ and sub-folders (floors)
        const galleryContent = document.getElementById('galleryContent');
        const gallerySection = document.getElementById('modalGallery');
        galleryContent.innerHTML = '';

        const folderName = buildingId + '(' + data.name.replace(/[\/\\:*?"<>|]/g, '-') + ')';
        const folderPathMatcher = `../public/buildings/${folderName}/`.toLowerCase();
        const folderPathMatcherFallback = `../public/buildings/${buildingId}/`.toLowerCase();

        // Categorize photos into root photos and floor-grouped photos
        const rootPhotos = [];
        const floorPhotos = {}; // key = floor name, value = array of photo objects
        let thumbPhoto = null;

        allImagePaths.forEach(path => {
            const normPath = path.replace(/\\/g, '/');
            const lowerPath = normPath.toLowerCase();

            if (lowerPath.startsWith(folderPathMatcher) || lowerPath.startsWith(folderPathMatcherFallback)) {
                if (lowerPath.endsWith('/thumb.jpg') || 
                    lowerPath.endsWith('/thumb.jpeg') || 
                    lowerPath.endsWith('/thumb.png') || 
                    lowerPath.endsWith('/thumb.webp')) {
                    thumbPhoto = { url: normPath.replace('../public', ''), title: 'Foto Utama / Thumbnail', fileName: 'thumb', originalPath: path };
                    return;
                }
                
                const url = normPath.replace('../public', '');
                const fileName = normPath.split('/').pop();
                const match = fileName.match(/\((.*?)\)/);
                const title = match ? match[1] : '';

                // Determine which folder the file lives in
                const matcherLength = lowerPath.startsWith(folderPathMatcher) 
                    ? folderPathMatcher.length 
                    : folderPathMatcherFallback.length;
                
                const relativePath = normPath.substring(matcherLength);
                const pathParts = relativePath.split('/');
                
                if (pathParts.length > 1) {
                    // File is in a sub-folder (floor)
                    const floorName = pathParts[0]; // e.g., "Lt 1", "Lt 2", "Lt Dasar"
                    if (!floorPhotos[floorName]) floorPhotos[floorName] = [];
                    floorPhotos[floorName].push({ url, title, fileName, originalPath: path });
                } else {
                    // File is in root folder
                    rootPhotos.push({ url, title, fileName, originalPath: path });
                }
            }
        });

        if (rootPhotos.length === 0 && Object.keys(floorPhotos).length === 0 && thumbPhoto) {
            rootPhotos.push(thumbPhoto);
        }

        // Sort photos by numeric prefix in filename
        const sortPhotos = (arr) => arr.sort((a, b) => {
            const numA = parseInt(a.fileName) || 999;
            const numB = parseInt(b.fileName) || 999;
            return numA - numB;
        });

        sortPhotos(rootPhotos);
        Object.values(floorPhotos).forEach(sortPhotos);

        // Sort floor names naturally
        const floorNames = Object.keys(floorPhotos).sort((a, b) => {
            // Put "Lt Dasar" first, then "Lt 1", "Lt 2", etc.
            if (a.toLowerCase().includes('dasar')) return -1;
            if (b.toLowerCase().includes('dasar')) return 1;
            const numA = parseInt(a.replace(/\D/g, '')) || 0;
            const numB = parseInt(b.replace(/\D/g, '')) || 0;
            return numA - numB;
        });

        const hasFloors = floorNames.length > 0;
        const allSections = [];

        // Prepare sections
        if (rootPhotos.length > 0) {
            allSections.push({
                title: hasFloors ? '🏢 Eksterior Bangunan' : null,
                photos: rootPhotos
            });
        }

        floorNames.forEach(floorName => {
            allSections.push({
                title: `🏠 ${floorName}`,
                photos: floorPhotos[floorName]
            });
        });

        if (allSections.length === 0) {
            gallerySection.style.display = 'none';
        } else {
            gallerySection.style.display = '';
            
            allSections.forEach((section, sectionIdx) => {
                const sectionEl = document.createElement('div');
                sectionEl.className = 'gallery-floor-section';

                // Floor title
                if (section.title) {
                    const titleEl = document.createElement('div');
                    titleEl.className = 'gallery-floor-title';
                    titleEl.textContent = section.title;
                    sectionEl.appendChild(titleEl);
                }

                // Gallery wrapper with arrows
                const wrapper = document.createElement('div');
                wrapper.className = 'gallery-wrapper';

                const prevBtn = document.createElement('button');
                prevBtn.className = 'gallery-arrow gallery-arrow--prev';
                prevBtn.innerHTML = '&#8249;';
                prevBtn.setAttribute('aria-label', 'Foto sebelumnya');

                const nextBtn = document.createElement('button');
                nextBtn.className = 'gallery-arrow gallery-arrow--next';
                nextBtn.innerHTML = '&#8250;';
                nextBtn.setAttribute('aria-label', 'Foto berikutnya');

                const slider = document.createElement('div');
                slider.className = 'gallery-slider';

                // Counter badge
                const counter = document.createElement('div');
                counter.className = 'gallery-counter';
                slider.appendChild(counter);

                // Track (horizontal flex container)
                const track = document.createElement('div');
                track.className = 'gallery-track';

                section.photos.forEach((photo, i) => {
                    const slide = document.createElement('div');
                    slide.className = 'gallery-slide';

                    const img = document.createElement('img');
                    img.src = photo.url;
                    img.alt = photo.title || `Foto ${data.name} ${i + 1}`;
                    img.addEventListener('click', () => openLightbox(photo.url, photo.title || img.alt));
                    slide.appendChild(img);

                    if (photo.title) {
                        const caption = document.createElement('div');
                        caption.className = 'gallery-caption';
                        caption.textContent = photo.title;
                        slide.appendChild(caption);
                    }

                    track.appendChild(slide);
                });

                slider.appendChild(track);
                wrapper.appendChild(prevBtn);
                wrapper.appendChild(slider);
                wrapper.appendChild(nextBtn);
                sectionEl.appendChild(wrapper);

                // Dot navigation
                const nav = document.createElement('div');
                nav.className = 'gallery-nav';

                let currentIdx = 0;
                const totalPhotos = section.photos.length;

                function updateSlider() {
                    track.style.transform = `translateX(-${currentIdx * 100}%)`;
                    counter.textContent = `${currentIdx + 1} / ${totalPhotos}`;
                    prevBtn.disabled = currentIdx === 0;
                    nextBtn.disabled = currentIdx === totalPhotos - 1;

                    nav.querySelectorAll('.gallery-dot').forEach((dot, i) => {
                        dot.classList.toggle('active', i === currentIdx);
                    });
                }

                section.photos.forEach((photo, i) => {
                    const dot = document.createElement('button');
                    dot.className = 'gallery-dot' + (i === 0 ? ' active' : '');
                    dot.setAttribute('aria-label', photo.title || `Foto ${i + 1}`);
                    dot.addEventListener('click', () => {
                        currentIdx = i;
                        updateSlider();
                    });
                    nav.appendChild(dot);
                });

                sectionEl.appendChild(nav);

                // Arrow events
                prevBtn.addEventListener('click', () => {
                    if (currentIdx > 0) {
                        currentIdx--;
                        updateSlider();
                    }
                });

                nextBtn.addEventListener('click', () => {
                    if (currentIdx < totalPhotos - 1) {
                        currentIdx++;
                        updateSlider();
                    }
                });

                // Show/hide arrows
                if (totalPhotos <= 1) {
                    prevBtn.style.display = 'none';
                    nextBtn.style.display = 'none';
                    nav.style.display = 'none';
                    counter.style.display = 'none';
                }

                // Initialize
                updateSlider();

                galleryContent.appendChild(sectionEl);
            });
        }

        modalOverlay.classList.add('active');
        modalOverlay.setAttribute('aria-hidden', 'false');
        setTimeout(() => document.getElementById('closeModal').focus(), 100);
    }

    // Close modal
    function closeModal() {
        modalOverlay.classList.remove('active');
        modalOverlay.setAttribute('aria-hidden', 'true');
    }

    closeModalBtn.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
    });

    // ===== LIGHTBOX =====
    const lightboxOverlay = document.getElementById('lightboxOverlay');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    function openLightbox(src, caption) {
        lightboxImage.src = src;
        lightboxCaption.textContent = caption || '';
        lightboxOverlay.classList.add('active');
    }

    function closeLightbox() {
        lightboxOverlay.classList.remove('active');
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', (e) => {
        if (e.target === lightboxOverlay) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxOverlay.classList.contains('active')) closeLightbox();
    });

    // Daftar Bangunan (always visible panel inside SVG - Satelit & Vektor)
    const buildingLists = [
        document.getElementById('buildingList'),
        document.getElementById('buildingListVektor')
    ].filter(Boolean);

    if (buildingLists.length > 0) {
        // 1. Populate data
        const sortedBuildings = Object.entries(buildingData).sort((a, b) => {
            const numA = parseInt(a[0].replace(/[^0-9]/g, '')) || 0;
            const numB = parseInt(b[0].replace(/[^0-9]/g, '')) || 0;
            return numA - numB;
        });

        sortedBuildings.forEach(([id, data]) => {
            const num = id.replace(/[^0-9]/g, '');
            buildingLists.forEach(listEl => {
                const li = document.createElement('li');
                li.className = 'building-item';
                li.innerHTML = `
                    <div class="building-item-number">${num}</div>
                    <div class="building-item-name">${data.name}</div>
                `;

                li.addEventListener('click', (e) => {
                    e.stopPropagation();

                    // Cari elemen polygon bangunan yang sedang aktif/terlihat di layar (Satelit atau Vektor)
                    const polys = document.querySelectorAll(`.building-polygon[data-building-id="${id}"]`);
                    let targetRect = null;
                    for (let i = 0; i < polys.length; i++) {
                        const rect = polys[i].getBoundingClientRect();
                        if (rect && rect.width > 0 && rect.height > 0) {
                            targetRect = rect;
                            break;
                        }
                    }

                    if (targetRect) {
                        const x = targetRect.left + targetRect.width / 2;
                        const y = targetRect.top + targetRect.height / 2;
                        openPopover(id, x, y);
                    } else {
                        openPopover(id, window.innerWidth / 2, window.innerHeight / 2);
                    }
                });

                listEl.appendChild(li);
            });
        });
    }

    // ===== SIDE NAVBAR DRAWER LOGIC =====
    const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    const sideNavbar = document.getElementById('sideNavbar');
    const sideNavbarClose = document.getElementById('sideNavbarClose');
    const sideNavbarBackdrop = document.getElementById('sideNavbarBackdrop');

    function openSidebar() {
        if (sideNavbar && sideNavbarBackdrop) {
            sideNavbar.classList.add('active');
            sideNavbarBackdrop.classList.add('active');
            sideNavbar.setAttribute('aria-hidden', 'false');
        }
    }

    function closeSidebar() {
        if (sideNavbar && sideNavbarBackdrop) {
            sideNavbar.classList.remove('active');
            sideNavbarBackdrop.classList.remove('active');
            sideNavbar.setAttribute('aria-hidden', 'true');
        }
    }

    if (sidebarToggleBtn) {
        sidebarToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (sideNavbar && sideNavbar.classList.contains('active')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });
    }

    if (sideNavbarClose) sideNavbarClose.addEventListener('click', closeSidebar);
    if (sideNavbarBackdrop) sideNavbarBackdrop.addEventListener('click', closeSidebar);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sideNavbar && sideNavbar.classList.contains('active')) {
            closeSidebar();
        }
    });

    // ===== SIDEBAR PORTAL LINKS & ACTIONS =====
    const btnNavDenah = document.getElementById('btnNavDenah');
    const btnNavReoc = document.getElementById('btnNavReoc');
    const btnNavSolar = document.getElementById('btnNavSolar');
    const btnNavPronia = document.getElementById('btnNavPronia');

    if (btnNavDenah) {
        btnNavDenah.addEventListener('click', (e) => {
            e.preventDefault();
            closeSidebar();
        });
    }

    // Handler untuk link portal external yang siap diisi URL dari user
    const externalNavBtns = [btnNavReoc, btnNavSolar, btnNavPronia];
    externalNavBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', (e) => {
                const targetUrl = btn.getAttribute('href');
                if (!targetUrl || targetUrl === '#' || targetUrl === '') {
                    e.preventDefault();
                    const titleText = btn.querySelector('.web-nav-title') ? btn.querySelector('.web-nav-title').textContent.trim() : 'Website';
                    alert('Tautan menuju ' + titleText + ' akan segera dipasang/disinkronkan.');
                } else {
                    closeSidebar();
                }
            });
        }
    });
});
