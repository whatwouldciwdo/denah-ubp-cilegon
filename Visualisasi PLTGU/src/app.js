// ============================================================

export const buildingData = {
    "b1": {
        number: "b1",
        name: "Gas Turbine",
        zona: "A",
        dimensi: "± 2.450 m²",
        shortDesc: "Mitsubishi M701F Gas Turbine — Peralatan utama pembangkit yang mengubah energi pembakaran menjadi energi mekanik untuk menggerakkan generator.",
        description: "Mitsubishi M701F Gas Turbine\nPeralatan utama pembangkit yang mengubah energi pembakaran menjadi energi mekanik untuk menggerakkan generator. Gas buangnya dimanfaatkan oleh HRSG sebagai sumber panas pada siklus kombinasi.",
        fungsi: [
            "Mengubah energi hasil pembakaran bahan bakar menjadi energi mekanik untuk memutar generator dan menghasilkan listrik."
        ]
    },
    "b2": {
        number: "b2",
        name: "Steam Turbine Building & Common Building",
        zona: "A",
        dimensi: "± 2.100 m²",
        shortDesc: "Steam Turbine TC2F-35.4\" — Turbin uap yang memanfaatkan uap hasil HRSG untuk menghasilkan putaran mekanik pada generator.",
        description: "Steam Turbine TC2F-35.4\"\nTurbin uap yang memanfaatkan uap hasil HRSG untuk menghasilkan putaran mekanik pada generator, sehingga meningkatkan efisiensi pembangkit pada sistem combined cycle.",
        fungsi: [
            "Mengubah energi uap bertekanan dan bertemperatur tinggi dari HRSG menjadi energi mekanik untuk menggerakkan generator."
        ]
    },
    "b3": {
        number: "b3",
        name: "Heat Recovery Steam Generator",
        zona: "A",
        dimensi: "± 3.200 m²",
        shortDesc: "Heat Recovery Steam Generator (HRSG) — Boiler pemulihan panas tipe unfired yang memanfaatkan panas gas buang Gas Turbine untuk menghasilkan uap.",
        description: "Heat Recovery Steam Generator (HRSG)\nBoiler pemulihan panas tipe unfired yang memanfaatkan panas gas buang Gas Turbine untuk menghasilkan uap bertekanan HP, IP/RH, dan LP. HRSG menggunakan sistem natural circulation dengan konfigurasi vertical flow sebagai bagian utama dari proses combined cycle.",
        fungsi: [
            "Memanfaatkan panas gas buang Gas Turbine untuk menghasilkan uap yang digunakan oleh Steam Turbine."
        ]
    },
    "b4": {
        number: "b4",
        name: "Transformer",
        zona: "A",
        dimensi: "± 1.200 m²",
        shortDesc: "Transformer – CG PAUWELS / UNINDO — Transformator tenaga yang berfungsi menyesuaikan level tegangan dari sistem pembangkitan ke jaringan kelistrikan.",
        description: "Transformer – CG PAUWELS / UNINDO\nTransformator tenaga yang berfungsi menyesuaikan level tegangan dari sistem pembangkitan ke jaringan kelistrikan. Peralatan ini berperan penting dalam menjaga keandalan, keamanan, dan efisiensi penyaluran daya listrik.",
        fungsi: [
            "Menaikkan atau menurunkan tegangan listrik agar sesuai dengan kebutuhan penyaluran dan distribusi daya."
        ]
    },
    "b5": {
        number: "b5",
        name: "Rest Area",
        zona: "A",
        dimensi: "± 450 m²",
        shortDesc: "Area yang disediakan bagi pekerja untuk beristirahat sementara selama kegiatan operasional maupun pemeliharaan.",
        description: "Area yang disediakan bagi pekerja untuk beristirahat sementara selama kegiatan operasional maupun pemeliharaan.",
        fungsi: [
            "Menyediakan tempat istirahat bagi pekerja selama kegiatan operasional maupun pemeliharaan."
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
        name: "Fire Truck Station",
        zona: "D",
        dimensi: "± 300 m²",
        shortDesc: "Area siaga kendaraan pemadam kebakaran yang digunakan untuk mendukung respons cepat terhadap kondisi kebakaran atau keadaan darurat di area pembangkit.",
        description: "Area siaga kendaraan pemadam kebakaran yang digunakan untuk mendukung respons cepat terhadap kondisi kebakaran atau keadaan darurat di area pembangkit.",
        fungsi: [
            "Menjadi lokasi siaga kendaraan pemadam untuk mendukung penanganan kebakaran dan keadaan darurat."
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
        name: "Gas Metering Station PHE",
        zona: "B",
        dimensi: "-",
        shortDesc: "Fasilitas pengukuran dan pemantauan aliran gas yang dipasok dari PHE sebelum digunakan sebagai bahan bakar pembangkit.",
        description: "Fasilitas pengukuran dan pemantauan aliran gas yang dipasok dari PHE sebelum digunakan sebagai bahan bakar pembangkit. Sistem ini digunakan untuk memantau parameter penting seperti tekanan, temperatur, laju alir, dan jumlah gas yang disalurkan ke PLTGU.",
        fungsi: [
            "Mengukur dan memantau tekanan, temperatur, laju alir, serta jumlah pasokan gas dari PHE yang masuk ke PLTGU."
        ]
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
        shortDesc: "Tangki penyimpanan air kondensat yang digunakan sebagai bagian dari siklus air-uap dan sebagai suplai air menuju sistem terkait.",
        description: "Tangki penyimpanan air kondensat yang digunakan sebagai bagian dari siklus air-uap dan sebagai suplai air menuju sistem terkait.",
        fungsi: [
            "Menampung air kondensat sebagai cadangan dan suplai dalam sistem siklus air-uap pembangkit."
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
        name: "Gardu Induk PLTGU Cilegon",
        zona: "A",
        dimensi: "± 3.500 m²",
        shortDesc: "Fasilitas kelistrikan yang berfungsi menerima, mengatur, melindungi, dan menyalurkan daya listrik dari pembangkit menuju jaringan transmisi.",
        description: "Fasilitas kelistrikan yang berfungsi menerima, mengatur, melindungi, dan menyalurkan daya listrik dari pembangkit menuju jaringan transmisi.",
        fungsi: [
            "Menerima dan menyalurkan daya listrik dari pembangkit ke jaringan transmisi serta menyediakan fungsi switching dan proteksi."
        ]
    },
    "b15": {
        number: "b15",
        name: "Oil Separator",
        zona: "B",
        dimensi: "± 300 m²",
        shortDesc: "Fasilitas pemisah minyak-air di bunding tangki bahan bakar HSD.",
        description: "Oil Separator memisahkan minyak dari air hujan dan drainase di sekitar area tangki HSD agar air buangan bebas pencemaran sebelum ke WWTP.",
        fungsi: [
            "Separasi minyak dari air drainase di yard tangki HSD",
            "Mencegah kontaminasi minyak ke lingkungan sekitar",
            "Kepatuhan standar perlindungan lingkungan hidup"
        ]
    },
    "b16": {
        number: "b16",
        name: "Closed Cooling Water Pump GT",
        zona: "B",
        dimensi: "± 200 m²",
        shortDesc: "Pompa yang mensirkulasikan air pendingin pada sistem closed cooling water untuk mendinginkan peralatan pendukung Gas Turbine.",
        description: "Pompa yang mensirkulasikan air pendingin pada sistem closed cooling water untuk mendinginkan peralatan pendukung Gas Turbine.",
        fungsi: [
            "Mensirkulasikan air pendingin pada sistem closed cooling untuk mendinginkan peralatan pendukung Gas Turbine."
        ]
    },
    "b17": {
        number: "b17",
        name: "Warehouse & Workshop",
        zona: "B",
        dimensi: "± 648 m²",
        shortDesc: "Fasilitas penyimpanan material, suku cadang, dan peralatan sekaligus area untuk pekerjaan perbaikan dan pemeliharaan.",
        description: "Fasilitas penyimpanan material, suku cadang, dan peralatan sekaligus area untuk pekerjaan perbaikan dan pemeliharaan.",
        fungsi: [
            "Menyimpan material dan suku cadang serta menjadi tempat pelaksanaan pekerjaan perbaikan dan pemeliharaan."
        ]
    },
    "b18": {
        number: "b18",
        name: "Closed Cooling Fan",
        zona: "C",
        dimensi: "± 800 m²",
        shortDesc: "Kipas pendingin yang membantu membuang panas dari sistem closed cooling water ke lingkungan agar temperatur fluida tetap sesuai batas operasi.",
        description: "Kipas pendingin yang membantu membuang panas dari sistem closed cooling water ke lingkungan agar temperatur fluida tetap sesuai batas operasi.",
        fungsi: [
            "Melepaskan panas dari closed cooling water ke udara untuk menjaga temperatur sistem pendingin."
        ]
    },
    "b19": {
        number: "b19",
        name: "Chlorination Plant",
        zona: "C",
        dimensi: "± 1.840 m²",
        shortDesc: "Fasilitas injeksi bahan kimia berbasis klorin untuk mengendalikan pertumbuhan organisme dan biofouling pada sistem air.",
        description: "Fasilitas injeksi bahan kimia berbasis klorin untuk mengendalikan pertumbuhan organisme dan biofouling pada sistem air.",
        fungsi: [
            "Menginjeksikan klorin untuk mengendalikan organisme laut, lumut, dan biofouling pada sistem air pendingin."
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
        name: "Auxiliary Boiler",
        zona: "A",
        dimensi: "± 300 m²",
        shortDesc: "Boiler bantu yang menghasilkan uap untuk kebutuhan start-up, pemanasan, atau kebutuhan utilitas ketika suplai uap utama belum tersedia.",
        description: "Boiler bantu yang menghasilkan uap untuk kebutuhan start-up, pemanasan, atau kebutuhan utilitas ketika suplai uap utama belum tersedia.",
        fungsi: [
            "Menghasilkan uap bantu untuk kebutuhan start-up, heating, sealing, dan utilitas ketika uap utama belum tersedia."
        ]
    },
    "b22": {
        number: "b22",
        name: "Administration Building",
        zona: "D",
        dimensi: "± 1.500 m²",
        shortDesc: "Gedung yang digunakan untuk kegiatan administrasi, koordinasi, perencanaan, dan fungsi pendukung operasional pembangkit.",
        description: "Gedung yang digunakan untuk kegiatan administrasi, koordinasi, perencanaan, dan fungsi pendukung operasional pembangkit.",
        fungsi: [
            "Mendukung kegiatan administrasi, koordinasi, perencanaan, dan pengelolaan operasional pembangkit."
        ]
    },
    "b23": {
        number: "b23",
        name: "Gas Metering Station PGN",
        zona: "B",
        dimensi: "-",
        shortDesc: "Fasilitas pengukuran dan pemantauan aliran gas yang dipasok dari PGN sebelum masuk ke sistem bahan bakar pembangkit.",
        description: "Fasilitas pengukuran dan pemantauan aliran gas yang dipasok dari PGN sebelum masuk ke sistem bahan bakar pembangkit. Peralatan ini berfungsi memastikan kuantitas dan kondisi gas yang diterima sesuai dengan kebutuhan operasi serta mendukung pencatatan konsumsi gas.",
        fungsi: [
            "Mengukur dan memantau parameter serta kuantitas pasokan gas dari PGN sebelum digunakan sebagai bahan bakar pembangkit."
        ]
    },
    "b24": {
        number: "b24",
        name: "WWTP Room",
        zona: "C",
        dimensi: "± 400 m²",
        shortDesc: "Ruang kontrol dan peralatan pendukung sistem pengolahan air limbah atau Waste Water Treatment Plant.",
        description: "Ruang kontrol dan peralatan pendukung sistem pengolahan air limbah atau Waste Water Treatment Plant.",
        fungsi: [
            "Menjadi ruang kontrol dan lokasi peralatan pendukung pengoperasian Waste Water Treatment Plant."
        ]
    },
    "b25": {
        number: "b25",
        name: "Waste Water Treatment Plant",
        zona: "C",
        dimensi: "± 1.000 m²",
        shortDesc: "Fasilitas pengolahan air limbah untuk memastikan kualitas air buangan memenuhi persyaratan sebelum dialirkan ke lingkungan.",
        description: "Fasilitas pengolahan air limbah untuk memastikan kualitas air buangan memenuhi persyaratan sebelum dialirkan ke lingkungan.",
        fungsi: [
            "Mengolah air limbah agar memenuhi persyaratan kualitas sebelum dibuang atau dimanfaatkan kembali."
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
        name: "N2 Station",
        zona: "B",
        dimensi: "± 350 m²",
        shortDesc: "Fasilitas penyimpanan dan distribusi nitrogen yang digunakan untuk kebutuhan purging, blanketing, dan aplikasi pendukung lainnya.",
        description: "Fasilitas penyimpanan dan distribusi nitrogen yang digunakan untuk kebutuhan purging, blanketing, dan aplikasi pendukung lainnya.",
        fungsi: [
            "Menyediakan nitrogen untuk kebutuhan purging, blanketing, inerting, dan keperluan operasional lainnya."
        ]
    },
    "b28": {
        number: "b28",
        name: "Fuel Gas Compressor Station",
        zona: "B",
        dimensi: "± 500 m²",
        shortDesc: "Fasilitas kompresi gas bahan bakar untuk menaikkan dan menjaga tekanan gas sesuai kebutuhan operasi Gas Turbine.",
        description: "Fasilitas kompresi gas bahan bakar untuk menaikkan dan menjaga tekanan gas sesuai kebutuhan operasi Gas Turbine.",
        fungsi: [
            "Menaikkan dan menjaga tekanan gas bahan bakar agar sesuai dengan kebutuhan Gas Turbine."
        ]
    },
    "b29": {
        number: "b29",
        name: "Make Up Water Tank",
        zona: "C",
        dimensi: "± 973 m²",
        shortDesc: "Tangki penyimpanan air tambahan yang digunakan untuk menggantikan kehilangan air pada sistem pembangkit.",
        description: "Tangki penyimpanan air tambahan yang digunakan untuk menggantikan kehilangan air pada sistem pembangkit.",
        fungsi: [
            "Menyimpan air make-up untuk menggantikan kehilangan air pada sistem pembangkit."
        ]
    },
    "b30": {
        number: "b30",
        name: "Demineralized Water Treatment Building",
        zona: "C",
        dimensi: "± 800 m²",
        shortDesc: "Fasilitas pengolahan air untuk menghasilkan air demineralisasi dengan kandungan mineral sangat rendah sebagai kebutuhan sistem air-uap.",
        description: "Fasilitas pengolahan air untuk menghasilkan air demineralisasi dengan kandungan mineral sangat rendah sebagai kebutuhan sistem air-uap.",
        fungsi: [
            "Mengolah air menjadi air demineralisasi berkualitas tinggi untuk kebutuhan boiler dan sistem air-uap."
        ]
    },
    "b31": {
        number: "b31",
        name: "GT Electrical Building",
        zona: "A",
        dimensi: "± 600 m²",
        shortDesc: "Gedung yang menampung peralatan kelistrikan, kontrol, dan proteksi yang mendukung pengoperasian Gas Turbine.",
        description: "Gedung yang menampung peralatan kelistrikan, kontrol, dan proteksi yang mendukung pengoperasian Gas Turbine.",
        fungsi: [
            "Menampung peralatan kelistrikan, kontrol, proteksi, dan distribusi daya untuk Gas Turbine."
        ]
    },
    "b32": {
        number: "b32",
        name: "Fire Pump Station",
        zona: "C",
        dimensi: "± 297 m²",
        shortDesc: "Fasilitas pompa pemadam yang menyediakan tekanan dan aliran air untuk jaringan fire fighting di area pembangkit.",
        description: "Fasilitas pompa pemadam yang menyediakan tekanan dan aliran air untuk jaringan fire fighting di area pembangkit.",
        fungsi: [
            "Menyediakan tekanan dan aliran air yang dibutuhkan oleh jaringan sistem pemadam kebakaran."
        ]
    },
    "b33": {
        number: "b33",
        name: "Fire Water Tank",
        zona: "A",
        dimensi: "± 600 m²",
        shortDesc: "Tangki penyimpanan cadangan air khusus untuk sistem proteksi dan pemadaman kebakaran.",
        description: "Tangki penyimpanan cadangan air khusus untuk sistem proteksi dan pemadaman kebakaran.",
        fungsi: [
            "Menyimpan cadangan air khusus untuk kebutuhan sistem pemadam kebakaran."
        ]
    },
    "b34": {
        number: "b34",
        name: "Raw Water Tank",
        zona: "C",
        dimensi: "± 468 m²",
        shortDesc: "Tangki penyimpanan air baku sebelum diproses lebih lanjut untuk berbagai kebutuhan operasional pembangkit.",
        description: "Tangki penyimpanan air baku sebelum diproses lebih lanjut untuk berbagai kebutuhan operasional pembangkit.",
        fungsi: [
            "Menampung air baku sebelum diproses atau digunakan untuk kebutuhan utilitas pembangkit."
        ]
    },
    "b35": {
        number: "b35",
        name: "Emergency Diesel Generator Building",
        zona: "A",
        dimensi: "± 300 m²",
        shortDesc: "Gedung yang menampung Emergency Diesel Generator sebagai sumber listrik darurat ketika suplai listrik utama tidak tersedia.",
        description: "Gedung yang menampung Emergency Diesel Generator sebagai sumber listrik darurat ketika suplai listrik utama tidak tersedia.",
        fungsi: [
            "Menyediakan sumber listrik darurat ketika sumber listrik utama dan cadangan normal tidak tersedia."
        ]
    },
    "b36": {
        number: "b36",
        name: "HSD Area",
        zona: "B",
        dimensi: "± 2.500 m²",
        shortDesc: "Area penyimpanan, penanganan, dan distribusi High Speed Diesel sebagai bahan bakar pendukung atau cadangan.",
        description: "Area penyimpanan, penanganan, dan distribusi High Speed Diesel sebagai bahan bakar pendukung atau cadangan.",
        fungsi: [
            "Menjadi area penyimpanan, penanganan, dan distribusi High Speed Diesel untuk kebutuhan pembangkit."
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
        shortDesc: "Pos penjagaan yang berfungsi untuk pengawasan keamanan serta pengendalian akses orang dan kendaraan.",
        description: "Pos penjagaan yang berfungsi untuk pengawasan keamanan serta pengendalian akses orang dan kendaraan.",
        fungsi: [
            "Melakukan pengawasan dan pengendalian akses orang maupun kendaraan ke area pembangkit."
        ]
    },
    "b39": {
        number: "b39",
        name: "hazardous and toxic waste storage facility",
        zona: "B",
        dimensi: "± 400 m²",
        shortDesc: "Fasilitas penyimpanan sementara limbah bahan berbahaya dan beracun sebelum dilakukan pengangkutan dan pengelolaan sesuai ketentuan.",
        description: "Fasilitas penyimpanan sementara limbah bahan berbahaya dan beracun sebelum dilakukan pengangkutan dan pengelolaan sesuai ketentuan.",
        fungsi: [
            "Menyimpan sementara limbah B3 secara aman sebelum dilakukan pengangkutan dan pengolahan lebih lanjut."
        ]
    },
    "b40": {
        number: "b40",
        name: "Intake Structure",
        zona: "C",
        dimensi: "± 720 m²",
        shortDesc: "Struktur pengambilan air dari sumber eksternal untuk memasok kebutuhan sistem pendingin maupun utilitas pembangkit.",
        description: "Struktur pengambilan air dari sumber eksternal untuk memasok kebutuhan sistem pendingin maupun utilitas pembangkit.",
        fungsi: [
            "Mengambil air dari sumber eksternal sebagai suplai sistem pendingin dan kebutuhan utilitas pembangkit."
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
        name: "Fuel Oil Unloading Area",
        zona: "B",
        dimensi: "± 300 m²",
        shortDesc: "Area penerimaan dan pembongkaran bahan bakar minyak dari kendaraan atau sarana pengangkut menuju sistem penyimpanan.",
        description: "Area penerimaan dan pembongkaran bahan bakar minyak dari kendaraan atau sarana pengangkut menuju sistem penyimpanan.",
        fungsi: [
            "Menjadi area penerimaan dan pemindahan bahan bakar minyak dari sarana pengangkut menuju sistem penyimpanan."
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
        name: "Fuel Gas Separator",
        zona: "B",
        dimensi: "± 400 m²",
        shortDesc: "Peralatan yang memisahkan cairan, kondensat, atau partikel dari aliran gas bahan bakar sebelum gas digunakan pada sistem pembakaran.",
        description: "Peralatan yang memisahkan cairan, kondensat, atau partikel dari aliran gas bahan bakar sebelum gas digunakan pada sistem pembakaran.",
        fungsi: [
            "Memisahkan cairan, kondensat, dan partikel dari gas bahan bakar sebelum masuk ke peralatan downstream."
        ]
    },
    "b47": {
        number: "b47",
        name: "Demin & Service Water Transfer Pump",
        zona: "C",
        dimensi: "± 200 m²",
        shortDesc: "Pompa transfer yang menyalurkan air demineralisasi dan/atau service water menuju sistem dan peralatan yang membutuhkan.",
        description: "Pompa transfer yang menyalurkan air demineralisasi dan/atau service water menuju sistem dan peralatan yang membutuhkan.",
        fungsi: [
            "Memindahkan air demineralisasi dan service water dari tangki penyimpanan menuju sistem yang membutuhkan."
        ]
    },
    "b48": {
        number: "b48",
        name: "Foam SpareBottle Space",
        zona: "B",
        dimensi: "± 150 m²",
        shortDesc: "Area penyimpanan tabung atau persediaan fire fighting foam sebagai cadangan untuk penanggulangan kebakaran tertentu.",
        description: "Area penyimpanan tabung atau persediaan fire fighting foam sebagai cadangan untuk penanggulangan kebakaran tertentu.",
        fungsi: [
            "Menyimpan tabung atau persediaan foam pemadam sebagai cadangan untuk sistem proteksi kebakaran."
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
        name: "ST Building Area",
        zona: "A",
        dimensi: "± 400 m²",
        shortDesc: "Area bangunan Steam Turbine yang menampung turbin uap, generator, serta peralatan pendukung sistem pembangkitan tenaga uap.",
        description: "Area bangunan Steam Turbine yang menampung turbin uap, generator, serta peralatan pendukung sistem pembangkitan tenaga uap.",
        fungsi: [
            "Menjadi area utama penempatan Steam Turbine, generator, serta peralatan pendukungnya."
        ]
    },
    "b52": {
        number: "b52",
        name: "Hydrogen Plant",
        zona: "D",
        dimensi: "± 800 m²",
        shortDesc: "Fasilitas penyediaan atau penanganan hidrogen yang digunakan terutama untuk kebutuhan pendinginan generator dan sistem terkait.",
        description: "Fasilitas penyediaan atau penanganan hidrogen yang digunakan terutama untuk kebutuhan pendinginan generator dan sistem terkait.",
        fungsi: [
            "Menyediakan hidrogen untuk kebutuhan pendinginan generator atau sistem terkait."
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
        shortDesc: "Fasilitas ibadah yang disediakan bagi pekerja dan pengunjung di lingkungan pembangkit.",
        description: "Fasilitas ibadah yang disediakan bagi pekerja dan pengunjung di lingkungan pembangkit.",
        fungsi: [
            "Menyediakan fasilitas ibadah bagi pekerja dan pengunjung."
        ]
    },
    "b55": {
        number: "b55",
        name: "HSD Treatment Plant",
        zona: "B",
        dimensi: "± 400 m²",
        shortDesc: "Fasilitas pengolahan bahan bakar HSD untuk menjaga kebersihan dan kualitas bahan bakar sebelum digunakan oleh peralatan pembangkit.",
        description: "Fasilitas pengolahan bahan bakar HSD untuk menjaga kebersihan dan kualitas bahan bakar sebelum digunakan oleh peralatan pembangkit.",
        fungsi: [
            "Mengolah dan meningkatkan kualitas HSD sebelum digunakan sebagai bahan bakar peralatan pembangkit."
        ]
    },
    "b56": {
        number: "b56",
        name: "Desalination Plant",
        zona: "C",
        dimensi: "± 1.693 m²",
        shortDesc: "Fasilitas pengolahan air laut atau air berkadar garam tinggi menjadi air dengan kadar garam rendah untuk kebutuhan pembangkit.",
        description: "Fasilitas pengolahan air laut atau air berkadar garam tinggi menjadi air dengan kadar garam rendah untuk kebutuhan pembangkit.",
        fungsi: [
            "Mengurangi kandungan garam pada air laut untuk menghasilkan air olahan yang dapat diproses lebih lanjut."
        ]
    },
    "b57": {
        number: "b57",
        name: "Fuel Oil Receiving Tank",
        zona: "B",
        dimensi: "± 600 m²",
        shortDesc: "Tangki penerima awal bahan bakar minyak sebelum bahan bakar diproses atau dipindahkan ke tangki penyimpanan utama.",
        description: "Tangki penerima awal bahan bakar minyak sebelum bahan bakar diproses atau dipindahkan ke tangki penyimpanan utama.",
        fungsi: [
            "Menampung bahan bakar minyak yang baru diterima sebelum dipindahkan ke tangki penyimpanan atau sistem berikutnya."
        ]
    },
    "b58": {
        number: "b58",
        name: "Outfall",
        zona: "D",
        dimensi: "± 200 m²",
        shortDesc: "Titik atau struktur pembuangan akhir air yang telah digunakan atau diolah dari area pembangkit menuju badan air penerima.",
        description: "Titik atau struktur pembuangan akhir air yang telah digunakan atau diolah dari area pembangkit menuju badan air penerima.",
        fungsi: [
            "Menjadi titik pembuangan akhir air hasil proses atau air pendingin menuju badan air penerima."
        ]
    },
    "b59": {
        number: "b59",
        name: "Parking Lot",
        zona: "D",
        dimensi: "± 311 m²",
        shortDesc: "Area parkir kendaraan bagi pegawai, tamu, maupun kendaraan operasional.",
        description: "Area parkir kendaraan bagi pegawai, tamu, maupun kendaraan operasional.",
        fungsi: [
            "Menyediakan area parkir bagi kendaraan pegawai, tamu, dan kendaraan operasional."
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
        shortDesc: "Fasilitas pengujian dan analisis sampel seperti air, bahan bakar, minyak, dan parameter kimia untuk mendukung pengendalian kualitas operasi.",
        description: "Fasilitas pengujian dan analisis sampel seperti air, bahan bakar, minyak, dan parameter kimia untuk mendukung pengendalian kualitas operasi.",
        fungsi: [
            "Melakukan pengujian dan analisis kualitas air, minyak, bahan bakar, serta parameter kimia lainnya."
        ]
    },
    "b62": {
        number: "b62",
        name: "HSE Office",
        zona: "D",
        dimensi: "± 300 m²",
        shortDesc: "Kantor fungsi Health, Safety, and Environment yang mendukung pengelolaan keselamatan kerja, kesehatan, dan lingkungan.",
        description: "Kantor fungsi Health, Safety, and Environment yang mendukung pengelolaan keselamatan kerja, kesehatan, dan lingkungan.",
        fungsi: [
            "Mengelola kegiatan kesehatan kerja, keselamatan, lingkungan, serta pemenuhan aspek HSE di area pembangkit."
        ]
    },
    "b63": {
        number: "b63",
        name: "Engineering Building",
        zona: "B",
        dimensi: "± 600 m²",
        shortDesc: "Gedung yang digunakan oleh fungsi teknik untuk kegiatan analisis, perencanaan, evaluasi, dan dukungan teknis pembangkit.",
        description: "Gedung yang digunakan oleh fungsi teknik untuk kegiatan analisis, perencanaan, evaluasi, dan dukungan teknis pembangkit.",
        fungsi: [
            "Mendukung kegiatan rekayasa, analisis teknis, evaluasi performa, dan perencanaan teknis pembangkit."
        ]
    },
    "b64": {
        number: "b64",
        name: "Substation Building",
        zona: "A",
        dimensi: "± 800 m²",
        shortDesc: "Bangunan yang menampung peralatan distribusi, proteksi, kontrol, dan transformasi tenaga listrik pada sistem pembangkit.",
        description: "Bangunan yang menampung peralatan distribusi, proteksi, kontrol, dan transformasi tenaga listrik pada sistem pembangkit.",
        fungsi: [
            "Menampung peralatan distribusi, proteksi, kontrol, dan switching sistem kelistrikan pembangkit."
        ]
    },
    "b65": {
        number: "b65",
        name: "security posts",
        zona: "D",
        dimensi: "± 60 m²",
        shortDesc: "Pos keamanan yang digunakan untuk pengawasan area, patroli, serta pengendalian akses di titik-titik tertentu.",
        description: "Pos keamanan yang digunakan untuk pengawasan area, patroli, serta pengendalian akses di titik-titik tertentu.",
        fungsi: [
            "Melaksanakan pengawasan keamanan dan pengendalian akses pada titik-titik tertentu di area pembangkit."
        ]
    },
    "b66": {
        number: "b66",
        name: "Safety Center",
        zona: "D",
        dimensi: "± 350 m²",
        shortDesc: "Fasilitas pusat koordinasi keselamatan yang mendukung pelatihan, kesiapsiagaan, dan penanganan keadaan darurat.",
        description: "Fasilitas pusat koordinasi keselamatan yang mendukung pelatihan, kesiapsiagaan, dan penanganan keadaan darurat.",
        fungsi: [
            "Menjadi pusat koordinasi, pelatihan, kesiapsiagaan, dan penanganan keselamatan serta keadaan darurat."
        ]
    },
    "b67": {
        number: "b67",
        name: "BSM Mart & Sakopi",
        zona: "D",
        dimensi: "± 400 m²",
        shortDesc: "Fasilitas penunjang bagi pekerja yang menyediakan kebutuhan harian, makanan, atau minuman di lingkungan pembangkit.",
        description: "Fasilitas penunjang bagi pekerja yang menyediakan kebutuhan harian, makanan, atau minuman di lingkungan pembangkit.",
        fungsi: [
            "Menyediakan kebutuhan konsumsi dan kebutuhan harian bagi pekerja di lingkungan pembangkit."
        ]
    },
    "b68": {
        number: "b68",
        name: "plant nursery",
        zona: "D",
        dimensi: "± 500 m²",
        shortDesc: "Area pembibitan dan pemeliharaan tanaman yang mendukung penghijauan serta pengelolaan lingkungan pembangkit.",
        description: "Area pembibitan dan pemeliharaan tanaman yang mendukung penghijauan serta pengelolaan lingkungan pembangkit.",
        fungsi: [
            "Menjadi tempat pembibitan dan pemeliharaan tanaman untuk mendukung penghijauan dan pengelolaan lingkungan."
        ]
    },
    "b69": {
        number: "b69",
        name: "tennis court",
        zona: "D",
        dimensi: "± 600 m²",
        shortDesc: "Fasilitas olahraga yang disediakan untuk mendukung kebugaran dan aktivitas rekreasi pekerja.",
        description: "Fasilitas olahraga yang disediakan untuk mendukung kebugaran dan aktivitas rekreasi pekerja.",
        fungsi: [
            "Menyediakan sarana olahraga dan kebugaran bagi pekerja."
        ]
    },
    "b70": {
        number: "b70",
        name: "clinic",
        zona: "D",
        dimensi: "± 200 m²",
        shortDesc: "Fasilitas pelayanan kesehatan untuk pemeriksaan awal, pertolongan pertama, dan penanganan medis dasar bagi pekerja maupun pengunjung.",
        description: "Fasilitas pelayanan kesehatan untuk pemeriksaan awal, pertolongan pertama, dan penanganan medis dasar bagi pekerja maupun pengunjung.",
        fungsi: [
            "Memberikan pelayanan kesehatan dasar, pemeriksaan, pertolongan pertama, dan penanganan medis awal."
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

        // Auto-load thumbnail dari allImagePaths matching folderName, buildingId, atau 01.png
        const numStr = buildingId.replace(/[^0-9]/g, '');
        const numPadded = numStr.padStart(2, '0');
        const folderName = buildingId + '(' + data.name.replace(/[\/\\:*?"<>|]/g, '-') + ')';
        const folderPathMatcher = `../public/buildings/${folderName}/`.toLowerCase();
        const folderPathMatcherFallback = `../public/buildings/${buildingId}/`.toLowerCase();
        const folderPathMatcherPadded = `../public/buildings/${numPadded}/`.toLowerCase();

        let thumbPath = allImagePaths.find(path => {
            const normPath = path.replace(/\\/g, '/');
            const lowerPath = normPath.toLowerCase();
            const fileName = normPath.split('/').pop().toLowerCase();
            const fileNameNoExt = fileName.replace(/\.[^/.]+$/, "");

            if (fileNameNoExt === numPadded || fileNameNoExt === numStr || fileNameNoExt === 'b' + numStr || fileNameNoExt === 'b' + numPadded) {
                return true;
            }
            const isInsideFolder = lowerPath.startsWith(folderPathMatcher) || lowerPath.startsWith(folderPathMatcherFallback) || lowerPath.startsWith(folderPathMatcherPadded);
            const isThumb = lowerPath.endsWith('/thumb.jpg') || 
                            lowerPath.endsWith('/thumb.jpeg') || 
                            lowerPath.endsWith('/thumb.png') || 
                            lowerPath.endsWith('/thumb.webp');
            return isInsideFolder && isThumb;
        });

        // Fallback: gunakan gambar pertama di folder atau yang cocok dengan nomor
        if (!thumbPath) {
            const folderImages = allImagePaths.filter(path => {
                const normPath = path.replace(/\\/g, '/');
                const lowerPath = normPath.toLowerCase();
                const fileName = normPath.split('/').pop().toLowerCase();
                const fileNameNoExt = fileName.replace(/\.[^/.]+$/, "");

                if (fileNameNoExt === numPadded || fileNameNoExt === numStr || fileNameNoExt === 'b' + numStr || fileNameNoExt === 'b' + numPadded) {
                    return true;
                }
                return lowerPath.startsWith(folderPathMatcher) || lowerPath.startsWith(folderPathMatcherFallback) || lowerPath.startsWith(folderPathMatcherPadded);
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

        // Gallery — auto-detect photos from /buildings/<id>/, sub-folders, or direct <01.png> files
        const galleryContent = document.getElementById('galleryContent');
        const gallerySection = document.getElementById('modalGallery');
        galleryContent.innerHTML = '';

        const numStr = buildingId.replace(/[^0-9]/g, '');
        const numPadded = numStr.padStart(2, '0');
        const folderName = buildingId + '(' + data.name.replace(/[\/\\:*?"<>|]/g, '-') + ')';
        const folderPathMatcher = `../public/buildings/${folderName}/`.toLowerCase();
        const folderPathMatcherFallback = `../public/buildings/${buildingId}/`.toLowerCase();
        const folderPathMatcherPadded = `../public/buildings/${numPadded}/`.toLowerCase();

        // Categorize photos into root photos and floor-grouped photos
        const rootPhotos = [];
        const floorPhotos = {}; // key = floor name, value = array of photo objects
        let thumbPhoto = null;

        allImagePaths.forEach(path => {
            const normPath = path.replace(/\\/g, '/');
            const lowerPath = normPath.toLowerCase();
            const fileName = normPath.split('/').pop();
            const fileNameLower = fileName.toLowerCase();
            const fileNameNoExt = fileNameLower.replace(/\.[^/.]+$/, "");

            const isDirectMatch = (fileNameNoExt === numPadded || fileNameNoExt === numStr || fileNameNoExt === 'b' + numStr || fileNameNoExt === 'b' + numPadded);
            const isFolderMatch = lowerPath.startsWith(folderPathMatcher) || lowerPath.startsWith(folderPathMatcherFallback) || lowerPath.startsWith(folderPathMatcherPadded);

            if (isDirectMatch || isFolderMatch) {
                if (fileNameLower.startsWith('thumb.')) {
                    thumbPhoto = { url: normPath.replace('../public', ''), title: 'Foto Utama / Thumbnail', fileName: 'thumb', originalPath: path };
                    return;
                }
                
                const url = normPath.replace('../public', '');
                const match = fileName.match(/\((.*?)\)/);
                const title = match ? match[1] : data.name;

                const matcherLength = lowerPath.startsWith(folderPathMatcher) 
                    ? folderPathMatcher.length 
                    : lowerPath.startsWith(folderPathMatcherFallback)
                        ? folderPathMatcherFallback.length
                        : lowerPath.startsWith(folderPathMatcherPadded)
                            ? folderPathMatcherPadded.length
                            : 0;

                if (isFolderMatch && matcherLength > 0 && matcherLength < normPath.length) {
                    const relativePath = normPath.substring(matcherLength);
                    const pathParts = relativePath.split('/');
                    if (pathParts.length > 1) {
                        const floorName = pathParts[0];
                        if (!floorPhotos[floorName]) floorPhotos[floorName] = [];
                        floorPhotos[floorName].push({ url, title, fileName, originalPath: path });
                        return;
                    }
                }
                rootPhotos.push({ url, title, fileName, originalPath: path });
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
