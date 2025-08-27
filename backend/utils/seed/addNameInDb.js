require('dotenv').config();
const { TelegramUser }  = require('../../models');

const seedDoers = async () => {
  try {
    

//     const names = [
//   "ANITA DORJEE",
//   "ANISHA LYNGDOH",
//   "ALVIN KHARBAMON",
//   "AIDAHUNLIN NALLE JYRWA",
//   "BANROILANG",
//   "BANSHANLANG",
//   "BANTYNSHAIN LYNGDOH",
//   "BHAGYASHREE SINHA",
//   "DORIS",
//   "EVAMEDALYNE LANGSTANG",
//   "FANNY",
//   "HIMANI",
//   "JOEY",
//   "KIRAN DAS",
//   "MONICA LYNGDOH",
//   "MOHAMMED SERAJ ANSARI",
//   "MEWANKHRAW MAJAW",
//   "RAJESH KUMAR THAKUR",
//   "SANJAY THAPA",
//   "SAFIRALIN",
//   "ROSHAN",
//   "SICOVONTRITCHZ D THANGKHIEW",
//   "TITU BHOWMICK",
//   "WANHUNLANG KHARSATI",
//   "YUMNAM JACKSON SINGH",
// ];

const names = ["SHANBOR", "EWAN HA I SHYLLA"];

    const doers = names.map(name => ({
      name,
      chat_id: null // You can update later when they register
    }));

    await TelegramUser.bulkCreate(doers, { ignoreDuplicates: true });
    console.log('✅ All doers inserted successfully.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error inserting doers:', error);
    process.exit(1);
  }
};

seedDoers();
