/**
 * Project: regions-server
 * File: regions.js
 * Created by Pennycodes on 2/27/2022.
 * Copyright regions-server
 */
const regions = [
    {
        code: "AR",
        label: "Ahafo Region",
        capital: "Goaso",
        districts: [
            {
                code: "ASN",
                label: "Asunafo North",
                category: "Municipal",
                capital: "Goaso"
            },
            {
                code: "ASS",
                label: "Asunafo South",
                category: "District",
                capital: "Kukuom"
            },
            {
                code: "ATN",
                label: "Asutifi North",
                category: "District",
                capital: "Kenyasi"
            },
            {
                code: "ATS",
                label: "Asutifi South",
                category: "District",
                capital: "Hwidiem"
            },
            {
                code: "TAN",
                label: "Tano North",
                category: "Municipal",
                capital: "Duayaw Nkwanta"
            },
            {
                code: "TAS",
                label: "Tano South",
                category: "Municipal",
                capital: "Bechem"
            }
        ]
    },
    {
        code: "ASR",
        label: "Ashanti Region",
        capital: "Kumasi",
        districts: [
            {
                code: "ADA",
                label: "Adansi Asokwa",
                category: "District",
                capital: "Adansi Asokwa"
            },
            {
                code: "ADN",
                label: "Adansi North",
                category: "District",
                capital: "Fomena"
            },
            {
                code: "ADS",
                label: "Adansi North",
                category: "District",
                capital: "New Edubiase"
            },
            {
                code: "AKN",
                label: "Afigya-Kwabre North",
                category: "District",
                capital: "Boamang"
            },
            {
                code: "AKS",
                label: "Afigya-Kwabre South",
                category: "District",
                capital: "Kodie"
            },
            {
                code: "AAN",
                label: "Ahafo-Ano North",
                category: "Municipal",
                capital: "Tepa"
            },
            {
                code: "AASE",
                label: "Ahafo-Ano South East",
                category: "District",
                capital: "Adugyama"
            },
            {
                code: "AASW",
                label: "Ahafo-Ano South West",
                category: "District",
                capital: "Mankranso"
            },
            {
                code: "AKF",
                label: "Akrofuom",
                category: "District",
                capital: "Akrofuom"
            },
            {
                code: "AMC",
                label: "Amansie Central",
                category: "District",
                capital: "Jacobu"
            },
            {
                code: "AMW",
                label: "Amansie West",
                category: "District",
                capital: "Manso Nkwanta"
            },
            {
                code: "AMS",
                label: "Amansie South",
                category: "District",
                capital: "Manso Adubia"
            },
            {
                code: "AAKC",
                label: "Asante-Akim Central",
                category: "Municipal",
                capital: "Konongo"
            },
            {
                code: "AAKN",
                label: "Asante-Akim North",
                category: "District",
                capital: "Agogo"
            },
            {
                code: "AAKS",
                label: "Asante-Akim South",
                category: "Municipal",
                capital: "Juaso"
            },
            {
                code: "ASM",
                label: "Asokore-Mampong",
                category: "Municipal",
                capital: "Asokore-Mampong"
            },
            {
                code: "ASK",
                label: "Asokwa",
                category: "Municipal",
                capital: "Asokwa"
            },
            {
                code: "ATK",
                label: "Atwima-Kwanwoma",
                category: "District",
                capital: "Twedie"
            },
            {
                code: "ATM",
                label: "Atwima-Mponua",
                category: "District",
                capital: "Nyinahin"
            },
            {
                code: "ATN",
                label: "Atwima-Nwabiagya",
                category: "Municipal",
                capital: "Nkawie"
            },
            {
                code: "ATNN",
                label: "Atwima-Nwabiagya North",
                category: "District",
                capital: "Barekese"
            },
            {
                code: "BEK",
                label: "Bekwai",
                category: "Municipal",
                capital: "Bekwai"
            },
            {
                code: "BF",
                label: "Bosome Freho",
                category: "District",
                capital: "Asiwa"
            },
            {
                code: "BST",
                label: "Bosomtwe",
                category: "District",
                capital: "Kuntanase"
            },
            {
                code: "EJ",
                label: "Ejisu",
                category: "Municipal",
                capital: "Ejisu"
            },
            {
                code: "EJS",
                label: "Ejura/Sekyedumase",
                category: "Municipal",
                capital: "Ejura"
            },
            {
                code: "JB",
                label: "Juaben",
                category: "Municipal",
                capital: "Juaben"
            },
            {
                code: "KSI",
                label: "Kumasi",
                category: "Metropolitan",
                capital: "Kumasi"
            },
            {
                code: "KBE",
                label: "Kwabre East",
                category: "Municipal",
                capital: "Mamponteng"
            },
            {
                code: "KDS",
                label: "Kwadaso",
                category: "Municipal",
                capital: "Kwadaso"
            },
            {
                code: "MAP",
                label: "Mampong",
                category: "Municipal",
                capital: "Mampong"
            },
            {
                code: "OBE",
                label: "Obuasi East",
                category: "Municipal",
                capital: "Tutuka"
            },
            {
                code: "OB",
                label: "Obuasi",
                category: "Municipal",
                capital: "Obuasi"
            },
            {
                code: "OFF",
                label: "Offinso",
                category: "Municipal",
                capital: "Offinso"
            },
            {
                code: "OFFN",
                label: "Offinso North",
                category: "District",
                capital: "Akomadan"
            },
            {
                code: "OFK",
                label: "Oforikrom",
                category: "Municipal",
                capital: "Oforikrom"
            },
            {
                code: "OLT",
                label: "Old Tafo",
                category: "Municipal",
                capital: "Old Tafo"
            },
            {
                code: "SAP",
                label: "Sekyere Afram Plains",
                category: "District",
                capital: "Drobonso"
            },
            {
                code: "SEC",
                label: "Sekyere Central",
                category: "District",
                capital: "Nsuta"
            },
            {
                code: "SEE",
                label: "Sekyere East",
                category: "District",
                capital: "Effiduase"
            },
            {
                code: "SEK",
                label: "Sekyere Kumawu",
                category: "District",
                capital: "Kumawu"
            },
            {
                code: "SES",
                label: "Sekyere South",
                category: "District",
                capital: "Agona"
            },
            {
                code: "SUA",
                label: "Suame",
                category: "Municipal",
                capital: "Suame"
            }
        ]
    },
    {
        code: "BR",
        label: "Bono Region",
        capital: "Sunyani",
        districts: [
            {
                code: "BD",
                label: "Banda",
                category: "District",
                capital: "Banda Ahenkro"
            },
            {
                code: "BEE",
                label: "Berekum East",
                category: "Municipal",
                capital: "Berekum"
            },
            {
                code: "BEW",
                label: "Berekum West",
                category: "District",
                capital: "Jinijini"
            },
            {
                code: "DC",
                label: "Dormaa Central",
                category: "Municipal",
                capital: "Dormaa Ahenkro"
            },
            {
                code: "DE",
                label: "Dormaa East",
                category: "District",
                capital: "Wamfie"
            },
            {
                code: "DW",
                label: "Dormaa West",
                category: "District",
                capital: "Nkrankwanta"
            },
            {
                code: "JN",
                label: "Jaman North",
                category: "District",
                capital: "Sampa"
            },
            {
                code: "JS",
                label: "Jaman South",
                category: "Municipal",
                capital: "Drobo"
            },
            {
                code: "SY",
                label: "Sunyani",
                category: "Municipal",
                capital: "Sunyani"
            },
            {
                code: "SYW",
                label: "Sunyani West",
                category: "District",
                capital: "Odumase"
            },
            {
                code: "TN",
                label: "Tain",
                category: "District",
                capital: "Nsawkaw"
            },
            {
                code: "WC",
                label: "Wenchi",
                category: "Municipal",
                capital: "Wenchi"
            }
        ]
    },
    {
        code: "BER",
        label: "Bono East Region",
        capital: "Techiman",
        districts: [
            {
                code: "ATA",
                label: "Atebubu-Amantin",
                category: "Municipal",
                capital: "Atebubu"
            },
            {
                code: "KTN",
                label: "Kintampo North",
                category: "Municipal",
                capital: "Kintampo"
            },
            {
                code: "KTS",
                label: "Kintampo South",
                category: "District",
                capital: "Jema"
            },
            {
                code: "NKN",
                label: "Nkoranza North",
                category: "District",
                capital: "Busunya"
            },
            {
                code: "NKS",
                label: "Nkoranza South",
                category: "Municipal",
                capital: "Nkoranza"
            },
            {
                code: "PRE",
                label: "Pru East",
                category: "District",
                capital: "Yeji"
            },
            {
                code: "PRW",
                label: "Pru West",
                category: "District",
                capital: "Prang"
            },
            {
                code: "SEE",
                label: "Sene East",
                category: "District",
                capital: "Kajaji"
            },
            {
                code: "SEW",
                label: "Sene West",
                category: "District",
                capital: "Kwame Danso"
            },
            {
                code: "TEC",
                label: "Techiman",
                category: "Municipal",
                capital: "Techiman"
            },
            {
                code: "TECN",
                label: "Techiman North",
                category: "District",
                capital: "Tuobodom"
            }
        ]
    },
    {
        code: "CR",
        label: "Central Region",
        capital: "Cape Coast",
        districts: [
            {
                code: "AAK",
                label: "Abura/Asebu/Kwamankese",
                category: "District",
                capital: "Abura-Dunkwa"
            },
            {
                code: "AGE",
                label: "Agona East",
                category: "District",
                capital: "Nsaba"
            },
            {
                code: "AGW",
                label: "Agona West Municipal",
                category: "Municipal",
                capital: "Agona Swedru"
            },
            {
                code: "AEE",
                label: "Ajumako/Enyan/Essiam",
                category: "District",
                capital: "Ajumako"
            },
            {
                code: "AOB",
                label: "Asikuma Odoben Brakwa",
                category: "District",
                capital: "Breman Asikuma"
            },
            {
                code: "ASC",
                label: "Assin Central",
                category: "Municipal",
                capital: "Assin Foso"
            },
            {
                code: "ASN",
                label: "Assin North",
                category: "District",
                capital: "Assin Bereku"
            },
            {
                code: "ASS",
                label: "Assin South",
                category: "District",
                capital: "Nsuaem Kyekyewere"
            },
            {
                code: "ASE",
                label: "Awutu Senya East",
                category: "Municipal",
                capital: "Kasoa"
            },
            {
                code: "ASW",
                label: "Awutu Senya West",
                category: "District",
                capital: "Awutu Breku"
            },
            {
                code: "CAC",
                label: "Cape Coast",
                category: "Metropolitan",
                capital: "Cape Coast"
            },
            {
                code: "EFT",
                label: "Effutu",
                category: "Municipal",
                capital: "Winneba"
            },
            {
                code: "EKF",
                label: "Ekumfi",
                category: "District",
                capital: "Esakyir"
            },
            {
                code: "GOE",
                label: "Gomoa East",
                category: "District",
                capital: "Potsin"
            },
            {
                code: "GOC",
                label: "Gomoa Central",
                category: "District",
                capital: "Afransi"
            },
            {
                code: "GOW",
                label: "Gomoa West",
                category: "District",
                capital: "Apam"
            },
            {
                code: "KEE",
                label: "Komenda/Edina/Eguafo/Abirem",
                category: "Municipal",
                capital: "Elmina"
            },
            {
                code: "MFM",
                label: "Mfantsiman",
                category: "Municipal",
                capital: "Saltpond"
            },
            {
                code: "TAM",
                label: "Twifo Atti Morkwa",
                category: "District",
                capital: "Twifo Praso"
            },
            {
                code: "THL",
                label: "Twifo/Hemang/Lower Denkyira",
                category: "District",
                capital: "Hemang"
            },
            {
                code: "UDE",
                label: "Upper Denkyira East",
                category: "Municipal",
                capital: "Dunkwa-on-Offin"
            },
            {
                code: "UDW",
                label: "Upper Denkyira West",
                category: "District",
                capital: "Diaso"
            }
        ]
    },
    {
        code: "ER",
        label: "Eastern Region",
        capital: "Koforidua",
        districts: [
            {
                code: "ABN",
                label: "Abuakwa North",
                category: "Municipal",
                capital: "Kukurantumi"
            },
            {
                code: "ABS",
                label: "Abuakwa South",
                category: "Municipal",
                capital: "Kibi"
            },
            {
                code: "ACS",
                label: "Achiase",
                category: "District",
                capital: "Achiase"
            },
            {
                code: "AKN",
                label: "Akuapim North",
                category: "Municipal",
                capital: "Akropong"
            },
            {
                code: "AKS",
                label: "Akuapim South",
                category: "District",
                capital: "Aburi"
            },
            {
                code: "AKM",
                label: "Akyemansa",
                category: "District",
                capital: "Ofoase"
            },
            {
                code: "AMA",
                label: "Asene Manso Akroso",
                category: "District",
                capital: "Manso"
            },
            {
                code: "ASG",
                label: "Asuogyaman",
                category: "District",
                capital: "Atimpoku"
            },
            {
                code: "ATE",
                label: "Atiwa East",
                category: "District",
                capital: "Anyinam"
            },
            {
                code: "ATW",
                label: "Atiwa West",
                category: "District",
                capital: "Kwabeng"
            },
            {
                code: "AYS",
                label: "Ayensuano",
                category: "District",
                capital: "Coaltar"
            },
            {
                code: "BRC",
                label: "Birim Central",
                category: "Municipal",
                capital: "Akim Oda"
            },
            {
                code: "BRN",
                label: "Birim North",
                category: "District",
                capital: "New Abirem"
            },
            {
                code: "BRS",
                label: "Birim South",
                category: "District",
                capital: "Akim Swedru"
            },
            {
                code: "DKB",
                label: "Denkyembour",
                category: "District",
                capital: "Akwatia"
            },
            {
                code: "FTA",
                label: "Fanteakwa North",
                category: "District",
                capital: "Begoro"
            },
            {
                code: "FTS",
                label: "Fanteakwa South",
                category: "District",
                capital: "Osino"
            },
            {
                code: "KBB",
                label: "Kwaebibirem",
                category: "Municipal",
                capital: "Kade"
            },
            {
                code: "KPN",
                label: "Kwahu Afram Plains North",
                category: "District",
                capital: "Donkorkrom"
            },
            {
                code: "KPS",
                label: "Kwahu Afram Plains South",
                category: "District",
                capital: "Tease"
            },
            {
                code: "KWE",
                label: "Kwahu East",
                category: "District",
                capital: "Abetifi"
            },
            {
                code: "KWS",
                label: "Kwahu South",
                category: "District",
                capital: "Mpraeso"
            },
            {
                code: "KWW",
                label: "Kwahu West",
                category: "Municipal",
                capital: "Nkawkaw"
            },
            {
                code: "LMK",
                label: "Lower Manya Krobo",
                category: "Municipal",
                capital: "Krobo Odumase"
            },
            {
                code: "NJN",
                label: "New Juaben North",
                category: "Municipal",
                capital: "Effiduase"
            },
            {
                code: "NJS",
                label: "New Juaben South",
                category: "Municipal",
                capital: "Koforidua"
            },
            {
                code: "NSA",
                label: "Nsawam Adoagyire",
                category: "Municipal",
                capital: "Nsawam"
            },
            {
                code: "OKE",
                label: "Okere",
                category: "District",
                capital: "Adukrom"
            },
            {
                code: "SHM",
                label: "Suhum",
                category: "Municipal",
                capital: "Suhum, Ghana"
            },
            {
                code: "UMK",
                label: "Upper Manya Krobo",
                category: "Municipal",
                capital: "Asesewa"
            },
            {
                code: "UWA",
                label: "Upper West Akim",
                category: "District",
                capital: "Adeiso"
            },
            {
                code: "WEA",
                label: "West Akim",
                category: "Municipal",
                capital: "Asamankese"
            },
            {
                code: "YIK",
                label: "Yilo-Krobo",
                category: "Municipal",
                capital: "Somanya"
            }
        ]
    },
    {
        code: "GAR",
        label: "Greater Accra Region",
        capital: "Accra",
        districts: [
            {
                code: "ABC",
                label: "Ablekuma Central",
                category: "Municipal",
                capital: "Lartebiokorshie"
            },
            {
                code: "ABN",
                label: "Ablekuma North",
                category: "Municipal",
                capital: "Darkuman"
            },
            {
                code: "ABW",
                label: "Ablekuma West",
                category: "Municipal",
                capital: "Dansoman"
            },
            {
                code: "ACR",
                label: "Accra",
                category: "Metropolitan",
                capital: "Accra"
            },
            {
                code: "ADE",
                label: "Ada East",
                category: "District",
                capital: "Ada Foah"
            },
            {
                code: "ADW",
                label: "Ada West",
                category: "District",
                capital: "Sege"
            },
            {
                code: "ADT",
                label: "Adenta",
                category: "Municipal",
                capital: "Adenta"
            },
            {
                code: "ASH",
                label: "Ashaiman",
                category: "Municipal",
                capital: "Ashaiman"
            },
            {
                code: "AYC",
                label: "Ayawaso Central",
                category: "Municipal",
                capital: "Kokomlemle"
            },
            {
                code: "AYE",
                label: "Ayawaso East",
                category: "Municipal",
                capital: "Nima"
            },
            {
                code: "AYN",
                label: "Ayawaso North",
                category: "Municipal",
                capital: "Accra New Town"
            },
            {
                code: "AYW",
                label: "Ayawaso West",
                category: "Municipal",
                capital: "Dzorwulu"
            },
            {
                code: "GAC",
                label: "Ga Central",
                category: "Municipal",
                capital: "Sowutuom"
            },
            {
                code: "GAE",
                label: "Ga East",
                category: "Municipal",
                capital: "Abokobi"
            },
            {
                code: "GAN",
                label: "Ga North",
                category: "Municipal",
                capital: "Amomole"
            },
            {
                code: "GAS",
                label: "Ga South",
                category: "Municipal",
                capital: "Ngleshie Amanfro"
            },
            {
                code: "GAW",
                label: "Ga West",
                category: "Municipal",
                capital: "Amasaman"
            },
            {
                code: "KKT",
                label: "Korle-Klottey",
                category: "Municipal",
                capital: "Osu"
            },
            {
                code: "KPK",
                label: "Kpone-Katamanso",
                category: "Municipal",
                capital: "Kpone"
            },
            {
                code: "KRW",
                label: "Krowor",
                category: "Municipal",
                capital: "Nungua"
            },
            {
                code: "LDK",
                label: "La-Dade-Kotopon",
                category: "Municipal",
                capital: "La"
            },
            {
                code: "LNM",
                label: "La-Nkwantanang-Madina",
                category: "Municipal",
                capital: "Madina"
            },
            {
                code: "LZK",
                label: "Ledzokuku",
                category: "Municipal",
                capital: "Teshie"
            },
            {
                code: "NIP",
                label: "Ningo-Prampram",
                category: "District",
                capital: "Prampram"
            },
            {
                code: "OKN",
                label: "Okaikwei North",
                category: "Municipal",
                capital: "Tesano"
            },
            {
                code: "SOD",
                label: "Shai-Osudoku",
                category: "District",
                capital: "Dodowa"
            },
            {
                code: "TEM",
                label: "Tema Metropolitan",
                category: "Metropolitan",
                capital: "Tema"
            },
            {
                code: "TEW",
                label: "Tema West",
                category: "Municipal",
                capital: "Tema Community 18"
            },
            {
                code: "WEG",
                label: "Weija Gbawe",
                category: "Municipal",
                capital: "Weija"
            }
        ]
    },
    {
        code: "NR",
        label: "Northern Region",
        capital: "Tamale",
        districts: [
            {
                code: "GUM",
                label: "Gushegu Municipal",
                category: "Municipal",
                capital: "Gushegu"
            },
            {
                code: "KRG",
                label: "Karaga",
                category: "District",
                capital: "Karaga"
            },
            {
                code: "KPD",
                label: "Kpandai",
                category: "District",
                capital: "Kpandai"
            },
            {
                code: "KUM",
                label: "Kumbungu",
                category: "District",
                capital: "Kumbungu"
            },
            {
                code: "MIO",
                label: "Mion",
                category: "District",
                capital: "Sang"
            },
            {
                code: "NTN",
                label: "Nanton",
                category: "District",
                capital: "Nanton"
            },
            {
                code: "NNM",
                label: "Nanumba North Municipal",
                category: "Municipal",
                capital: "Bimbilla"
            },
            {
                code: "NBS",
                label: "Nanumba South",
                category: "District",
                capital: "Wulensi"
            },
            {
                code: "SBA",
                label: "Saboba",
                category: "District",
                capital: "Saboba"
            },
            {
                code: "SGM",
                label: "Sagnarigu Municipal",
                category: "Municipal",
                capital: "Sagnarigu"
            },
            {
                code: "SVM",
                label: "Savelugu Municipal",
                category: "Municipal",
                capital: "Savelugu"
            },
            {
                code: "TAM",
                label: "Tamale Metropolitan",
                category: "Metropolitan",
                capital: "Tamale"
            },
            {
                code: "TAS",
                label: "Tatale Sanguli",
                category: "District",
                capital: "Tatale"
            },
            {
                code: "TOL",
                label: "Tolon",
                category: "District",
                capital: "Tolon"
            },
            {
                code: "YEM",
                label: "Yendi Municipal",
                category: "Municipal",
                capital: "Yendi"
            },
            {
                code: "ZAB",
                label: "Zabzugu",
                category: "District",
                capital: "Zabzugu"
            }
        ]
    },
    {
        code: "NER",
        label: "North East Region",
        capital: "Nalerigu",
        districts: [
            {
                code: "BUN",
                label: "Bunkpurugu Nyankpanduri",
                category: "District",
                capital: "Bunkpurugu"
            },
            {
                code: "CHE",
                label: "Chereponi",
                category: "District",
                capital: "Chereponi"
            },
            {
                code: "EMP",
                label: "East Mamprusi",
                category: "Municipal",
                capital: "Nalerigu"
            },
            {
                code: "MPM",
                label: "Mamprugu Moagduri",
                category: "District",
                capital: "Yagaba"
            },
            {
                code: "WMP",
                label: "West Mamprusi",
                category: "Municipal",
                capital: "Walewale"
            },
            {
                code: "YYN",
                label: "Yunyoo-Nasuan",
                category: "District",
                capital: "Yunyoo"
            }
        ]
    },
    {
        code: "OR",
        label: "Oti Region",
        capital: "Dambai",
        districts: [
            {
                code: "BKE",
                label: "Biakoye",
                category: "District",
                capital: "Nkonya Ahenkro"
            },
            {
                code: "JKN",
                label: "Jasikan",
                category: "District",
                capital: "Jasikan"
            },
            {
                code: "KDB",
                label: "Kadjebi",
                category: "District",
                capital: "Kadjebi"
            },
            {
                code: "KRE",
                label: "Krachi East",
                category: "Municipal",
                capital: "Dambai"
            },
            {
                code: "KRN",
                label: "Krachi Nchumuru",
                category: "District",
                capital: "Chinderi"
            },
            {
                code: "KRW",
                label: "Krachi West",
                category: "District",
                capital: "Kete Krachi"
            },
            {
                code: "NKN",
                label: "Nkwanta North",
                category: "District",
                capital: "Kpassa"
            },
            {
                code: "NKS",
                label: "Nkwanta South",
                category: "Municipal",
                capital: "Nkwanta"
            }
        ]
    },
    {
        code: "SR",
        label: "Savannah Region",
        capital: "Damongo",
        districts: [
            {
                code: "BOL",
                label: "Bole",
                category: "District",
                capital: "Bole"
            },
            {
                code: "CGO",
                label: "Central Gonja",
                category: "District",
                capital: "Buipe"
            },
            {
                code: "EGM",
                label: "East Gonja Municipal",
                category: "Municipal",
                capital: "Salaga"
            },
            {
                code: "NGO",
                label: "North Gonja",
                category: "District",
                capital: "Daboya"
            },
            {
                code: "NEG",
                label: "North East Gonja",
                category: "District",
                capital: "Kpalbe"
            },
            {
                code: "STK",
                label: "Sawla-Tuna-Kalba",
                category: "District",
                capital: "Sawla"
            },
            {
                code: "WGO",
                label: "West Gonja",
                category: "Municipal",
                capital: "Damongo"
            }
        ]
    },
    {
        code: "UER",
        label: "Upper East Region",
        capital: "Bolgatanga",
        districts: [
            {
                code: "BAM",
                label: "Bawku Municipal",
                category: "Municipal",
                capital: "Bawku"
            },
            {
                code: "BAW",
                label: "Bawku West",
                category: "District",
                capital: "Zebilla"
            },
            {
                code: "BND",
                label: "Binduri",
                category: "District",
                capital: "Binduri"
            },
            {
                code: "BOE",
                label: "Bolgatanga East",
                category: "District",
                capital: "Zuarungu"
            },
            {
                code: "BOM",
                label: "Bolgatanga Municipal",
                category: "Municipal",
                capital: "Bolgatanga"
            },
            {
                code: "BOG",
                label: "Bongo",
                category: "District",
                capital: "Bongo"
            },
            {
                code: "BNM",
                label: "Builsa North Municipal",
                category: "Municipal",
                capital: "Sandema"
            },
            {
                code: "BUS",
                label: "Builsa South",
                category: "District",
                capital: "Fumbisi"
            },
            {
                code: "GAU",
                label: "Garu",
                category: "District",
                capital: "Garu"
            },
            {
                code: "KNM",
                label: "Kassena-Nankana Municipal",
                category: "Municipal",
                capital: "Navrongo"
            },
            {
                code: "KNW",
                label: "Kassena-Nankana West",
                category: "District",
                capital: "Paga"
            },
            {
                code: "NDM",
                label: "Nabdam",
                category: "District",
                capital: "Nangodi"
            },
            {
                code: "PSG",
                label: "Pusiga",
                category: "District",
                capital: "Pusiga"
            },
            {
                code: "TLS",
                label: "Talensi",
                category: "District",
                capital: "Tongo"
            },
            {
                code: "TPE",
                label: "Tempane",
                category: "District",
                capital: "Tempane"
            }
        ]
    },
    {
        code: "UWR",
        label: "Upper West Region",
        capital: "Wa",
        districts: [
            {
                code: "DBI",
                label: "Daffiama Bussie Issa",
                category: "District",
                capital: "Issa"
            },
            {
                code: "JIM",
                label: "Jirapa Municipal",
                category: "Municipal",
                capital: "Jirapa"
            },
            {
                code: "LBK",
                label: "Lambussie Karni",
                category: "District",
                capital: "Lambussie"
            },
            {
                code: "LWM",
                label: "Lawra Municipal",
                category: "Municipal",
                capital: "Lawra"
            },
            {
                code: "NDK",
                label: "Nadowli-Kaleo",
                category: "District",
                capital: "Nadowli"
            },
            {
                code: "NDM",
                label: "Nandom Municipal",
                category: "Municipal",
                capital: "Nandom"
            },
            {
                code: "SEM",
                label: "Sissala East Municipal",
                category: "Municipal",
                capital: "Tumu"
            },
            {
                code: "SSW",
                label: "Sissala West",
                category: "District",
                capital: "Gwollu"
            },
            {
                code: "WAW",
                label: "Wa East",
                category: "District",
                capital: "Funsi"
            },
            {
                code: "WAM",
                label: "Wa Municipal",
                category: "Municipal",
                capital: "Wa"
            },
            {
                code: "WAW",
                label: "Wa West",
                category: "District",
                capital: "Wechiau"
            }
        ]
    },
    {
        code: "VR",
        label: "Volta Region",
        capital: "Ho",
        districts: [
            {
                code: "ADD",
                label: "Adaklu District",
                category: "District",
                capital: "Adaklu Waya"
            },
            {
                code: "AFS",
                label: "Afadzato South",
                category: "District",
                capital: "Ve Golokwati"
            },
            {
                code: "AGZ",
                label: "Agotime Ziope",
                category: "District",
                capital: "Kpetoe"
            },
            {
                code: "AKN",
                label: "Akatsi North",
                category: "District",
                capital: "Ave-Dakpa"
            },
            {
                code: "AKS",
                label: "Akatsi South",
                category: "District",
                capital: "Akatsi"
            },
            {
                code: "ANG",
                label: "Anloga",
                category: "District",
                capital: "Anloga"
            },
            {
                code: "CTG",
                label: "Central Tongu",
                category: "District",
                capital: "Adidome"
            },
            {
                code: "HOM",
                label: "Ho Municipal",
                category: "Municipal",
                capital: "Ho"
            },
            {
                code: "HOW",
                label: "Ho West",
                category: "District",
                capital: "Dzolokpuita"
            },
            {
                code: "HHM",
                label: "Hohoe Municipal",
                category: "Municipal",
                capital: "Hohoe"
            },
            {
                code: "KEM",
                label: "Keta Municipal",
                category: "Municipal",
                capital: "Keta"
            },
            {
                code: "KEN",
                label: "Ketu North Municipal",
                category: "Municipal",
                capital: "Dzodze"
            },
            {
                code: "KES",
                label: "Ketu South Municipal",
                category: "Municipal",
                capital: "Denu"
            },
            {
                code: "KPM",
                label: "Kpando Municipal",
                category: "Municipal",
                capital: "Kpando"
            },
            {
                code: "NDA",
                label: "North Dayi",
                category: "District",
                capital: "Anfoega"
            },
            {
                code: "NTO",
                label: "North Tongu",
                category: "District",
                capital: "Battor Dugame"
            },
            {
                code: "SDA",
                label: "South Dayi",
                category: "District",
                capital: "South Dayi"
            },
            {
                code: "STO",
                label: "South Tongu",
                category: "District",
                capital: "Sogakopei"
            }
        ]
    },
    {
        code: "WR",
        label: "Western Region",
        capital: "Sekondi-Takoradi",
        districts: [
            {
                code: "AHW",
                label: "Ahanta West",
                category: "Municipal",
                capital: "Agona Ahanta"
            },
            {
                code: "AMC",
                label: "Amenfi Central",
                category: "District",
                capital: "Manso Amenfi"
            },
            {
                code: "AMW",
                label: "Amenfi West",
                category: "Municipal",
                capital: "Asankragua"
            },
            {
                code: "EKM",
                label: "Effia Kwesimintsim Municipal",
                category: "Municipal",
                capital: "Kwesimintsim"
            },
            {
                code: "ELB",
                label: "Ellembelle",
                category: "District",
                capital: "Nkroful"
            },
            {
                code: "JMR",
                label: "Jomoro",
                category: "Municipal",
                capital: "Half Assini"
            },
            {
                code: "MPH",
                label: "Mpohor",
                category: "District",
                capital: "Mpohor"
            },
            {
                code: "NEM",
                label: "Nzema East Municipal",
                category: "Municipal",
                capital: "Axim"
            },
            {
                code: "PVM",
                label: "Prestea-Huni Valley Municipal",
                category: "Municipal",
                capital: "Prestea"
            },
            {
                code: "STM",
                label: "Sekondi Takoradi Metropolitan",
                category: "Metropolitan",
                capital: "Sekondi-Takoradi"
            },
            {
                code: "SHA",
                label: "Shama",
                category: "District",
                capital: "Shama"
            },
            {
                code: "TNM",
                label: "Tarkwa-Nsuaem Municipal",
                category: "Municipal",
                capital: "Tarkwa"
            },
            {
                code: "WAE",
                label: "Wassa Amenfi East",
                category: "Municipal",
                capital: "Wassa-Akropong"
            },
            {
                code: "WSE",
                label: "Wassa East",
                category: "District",
                capital: "Daboase"
            }
        ]
    },
    {
        code: "WNR",
        label: "Western North Region",
        capital: "Sefwi Wiawso",
        districts: [
            {
                code: "AOW",
                label: "Aowin",
                category: "Municipal",
                capital: "Enchi"
            },
            {
                code: "BIE",
                label: "Bia East",
                category: "District",
                capital: "Sefwi Adabokrom"
            },
            {
                code: "BIW",
                label: "Bia West",
                category: "District",
                capital: "Essam-Debiso"
            },
            {
                code: "BAB",
                label: "Bibiani Anhwiaso Bekwai",
                category: "Municipal",
                capital: "Bibiani"
            },
            {
                code: "BOD",
                label: "Bodi",
                category: "District",
                capital: "Sefwi Bodi"
            },
            {
                code: "JBS",
                label: "Juaboso",
                category: "District",
                capital: "Juaboso"
            },
            {
                code: "SAK",
                label: "Sefwi Akontombra",
                category: "District",
                capital: "Sefwi Akontombra"
            },
            {
                code: "SEW",
                label: "Sefwi-Wiawso",
                category: "Municipal",
                capital: "Sefwi-Wiawso"
            },
            {
                code: "SUA",
                label: "Suaman",
                category: "District",
                capital: "Dadieso"
            }
        ]
    }
]

module.exports = regions
