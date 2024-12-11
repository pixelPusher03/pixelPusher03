const Telegraf = require('telegraf')

const bot = new Telegraf('Your_Token')
const axios = require('axios')
const helpMessage = `Tell me something\n/start - to start the bot\n/menu - to display the menu list`;
bot.use((ctx, next) => {
  if(ctx.updateSubTypes[0] == "text"){
    console.log("[ @"+ctx.from.username+" ]  Execute : "+ctx.message.text);
  }else{
    console.log("[ @"+ctx.from.username+" ]  Send : "+ctx.updateSubTypes[0]);
  }
  next();
})

bot.command("start", ctx => {
    ctx.reply("Halo "+ctx.from.first_name);
    ctx.reply("Please select the menu below...",
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Menu', callback_data: 'menu'},
                    { text: 'Profile', callback_data: 'profile'}
                ]
            ]
        }
    })
})
bot.hears('/', (ctx) => {
    ctx.reply(helpMessage);
})

bot.hears('Return to Main Menu', (ctx) => {
    let priceMessage = '┏━━❉ DARK BOT ❉━━━┓\n┣⊱ Creator : TheDeveloper03\n┣⊱ Whatsapp : +256709825720\n┣⊱ Github : github.com/byte-smith03\n┣⊱ IG : the_developer03\n┣⊱ Owner :The Developer03\n┗━━━━━━━━━━━━━━━━\n┏━━❉ *INFO* ❉━━━┓\n┣⊱ *No spam bot*\n┗━━━━━━━━━━━━━━━━\n┏━━⊱ *BOT MENU* ⊰━━┓\n┣⊱ /othermenu\n┣⊱ /makermenu\n┣⊱ /praymenu\n┣⊱ /funmenu\n┣⊱ /kerangmenu\n┣⊱ /mediamenu\n┣⊱ /animemenu\n┣⊱ /nsfwmenu\n┣⊱ /downloadmenu(error)\n┗━━━━━━━━━━━━━━━━';
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage,
    {
        reply_markup: {
            keyboard: [
                [
                    {text: 'Other Menu'},
                    {text: "Maker Menu"},
                    {text: "Pray Menu"}
                ],
                [
                    {text: "Fun Menu"},
                    {text: "Kerang Menu"},
                    {text: "Media Menu"}
                ],
                [
                    {text: "Anime Menu"},
                    {text: "Nsfw Menu"},
                    {text: "Download Menu"}
                ],
                [
                    {text: 'Remove keyboard!!'}
                ]
            ]
        }
    })
})

bot.action('menu', ctx => {
    let priceMessage = '┏━━❉ DARK BOT ❉━━━┓\n┣⊱ Creator : TheDeveloper03\n┣⊱ Whatsapp : +256709825720\n┣⊱ Github : github.com/byte-smith03\n┣⊱ IG : the_developer03\n┣⊱ Owner :The Developer03\n┗━━━━━━━━━━━━━━━━\n┏━━❉ *INFO* ❉━━━┓\n┣⊱ *No spam bot*\n┗━━━━━━━━━━━━━━━━\n┏━━⊱ *BOT MENU* ⊰━━┓\n┣⊱ /othermenu\n┣⊱ /makermenu\n┣⊱ /praymenu\n┣⊱ /funmenu\n┣⊱ /kerangmenu\n┣⊱ /mediamenu\n┣⊱ /animemenu\n┣⊱ /nsfwmenu\n┣⊱ /downloadmenu(error)\n┗━━━━━━━━━━━━━━━━';
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage,
    {
        reply_markup: {
            keyboard: [
                [
                    {text: 'Other Menu'},
                    {text: "Maker Menu"},
                    {text: "Pray Menu"}
                ],
                [
                    {text: "Fun Menu"},
                    {text: "Kerang Menu"},
                    {text: "Media Menu"}
                ],
                [
                    {text: "Anime Menu"},
                    {text: "Nsfw Menu"},
                    {text: "Download Menu"}
                ],
                [
                    {text: 'Remove keyboard!!'}
                ]
            ]
        }
    })
})
//silahkan di edit sesuka hati kalian
bot.hears(['Hi','Hallo','Halo'], (ctx) => {
    ctx.reply("Hallo "+ctx.from.username+" ada yang bisa saya bantu?");
})
bot.hears(['Assalamualaikum','Asalamualaikum','Assalamualaikum wr wb','Asalamualaikum wr wb'], (ctx) => {
    ctx.reply("Waalaikumsalam Wr Wb");
})
bot.hears('Bot', (ctx) => {
    ctx.reply("Hallo "+ctx.from.username+"\n\nJika Kamu ingin menggunakan BOT silahkan ketikan command /menu atau /help");
})
bot.hears('Apakabar', (ctx) => {
    ctx.reply("Saya Baik baik saja bagaimana dengan mu?");
})
bot.hears(['Alhamdulilah baik','Baik','Saya baik baik saja'], (ctx) => {
    ctx.reply("Thank God, I hope you are always healthy");
})
//end message

//Bot Settings
const makerMessage = `┏━━⊱ *MAKER MENU* ⊰━━┓\n┣⊱ /nulis \n┣⊱ /crosslogo <text>\n┣⊱ /cat <text>\n┣⊱ /tahta <teks>\n┣⊱ /flowertext <text>\n┣⊱ /flametext <text>\n┣⊱ /woodentext <text>\n┣⊱ /silktext <text>\n┣⊱ /glowtext <text>\n┣⊱ /smoketext <text>\n┣⊱ /pubglogo |<text>|<text>\n┣⊱ /skytext <text>\n┣⊱ /cslogo <text>\n┣⊱ /emojiimage <emoji>\n┣⊱ /lightext <text>\n┣⊱ /retro <text>\n┣⊱ /text3dbox <text>\n┣⊱ /crismes <text>\n┣⊱ /thunder <text>\n┣⊱ /gpbutton <text>\n┣⊱ /spbutton <text>\n┣⊱ /snowwrite <text>\n┣⊱ /colortext <text>\n┣⊱ /grafiti <text>\n┣⊱ /pantai <text>\n┣⊱ /watercolor <text>\n┣⊱ /firetext <text>\n┣⊱ /metaltext <text>\n┣⊱ /baloontext <text>\n┣⊱ /padlocktext <text>\n┣⊱ /txtgif <text>\n┣⊱ /slidingtext <text>\n┣⊱ /bannerff <text>\n┣⊱ /logoff <text>\n┣⊱ /logoml <text>\n┣⊱ /blackpink <text>\n┣⊱ /textthunder <text>\n┣⊱ /silktext <text>\n┣⊱ /partytext <text>\n┣⊱ /romancetext <text>\n┣⊱ /googletxt |<text>|<text>|<text>\n┣⊱ /glowtext2 <text>\n┣⊱ /lovemessage <text>\n┣⊱ /glitchtxt |<text>|<text>\n┣⊱ /galaxytxt <text>\n┣⊱ /phlogo |<text>|<text>\n┣⊱ /wetglass <text>\n┣⊱ /stylelogo <text>\n┣⊱ /watercolor2 <text>\n┣⊱ /qrcode <text>\n┣⊱ /txtimg <text>\n┗━━━━━━━━━━━━━━━━`
const otherMessage = `┏━━❉ *OTHER MENU* ❉━━━┓\n┣⊱ /reply <text>\n┣⊱ /RandomCat\n┣⊱ /RandomQuotes\n┣⊱ /QuotesNime\n┣⊱ /InfoGempa\n┣⊱ /FMyLive\n┣⊱ /MostViewFilm\n┣⊱ /RandomNama\n┣⊱ /RenunganHarian\n┣⊱ /FaktaUnik\n┣⊱ /MLHeroList\n┣⊱ /JadwalTVNow\n┣⊱ /KOIN\n┣⊱ /DADU\n┣⊱ /POKEMON\n┣⊱ /PuisiImage\n┣⊱ /RandomASU\n┣⊱ /RandomRubah\n┣⊱ /RandomKambing\n┣⊱ /RandomPanda\n┣⊱ /RandomBurung\n┣⊱ /RandomTupai\n┣⊱ /RandomKoala\n┣⊱ /bucin\n┣⊱ /coronaIndonesia\n┗━━━━━━━━━━━━━━━━`
const tobatMessage = `┏━━❉ *PRAY MENU* ❉━━━┓\n┣⊱ /alkitab\n┣⊱ /quran <no surat>\n┣⊱ /quranlist\n┣⊱ /jadwalshalat <daerah>\n┗━━━━━━━━━━━━━━━━`
const funMessage = `┏━━❉ *FUN MENU* ❉━━━┓\n┣⊱ /artinama <nama>\n┣⊱ /artimimpi <mimpi>\n┣⊱ /lirik <judul>\n┣⊱ /chord <judul>\n┣⊱ /zodiak <zodiak>\n┣⊱ /wikipaedi <text>\n┣⊱ /brainly <text>\n┣⊱ /kalkulator <angka>\n┣⊱ /weather <kota>\n┣⊱ /caklontong\n┣⊱ /family100\n┣⊱ /resep <masakan>\n┣⊱ /shopee <barang>\n┣⊱ /pinte <text>\n┣⊱ /gsmarena <nama>\n┣⊱ /cekjodoh |nama kamu|nama doi|\n┣⊱ /weton |tangal|bulan|tahun|\n┣⊱ /nomorhoki <no hp>\n┣⊱ /harijadian |tangal|bulan|tahun|\n┣⊱ /ipwhois <ip>\n┣⊱ /ascitxt <text>\n┣⊱ /distance |dari|ke|\n┣⊱ /infoalamat <alamat>\n┣⊱ /infomotor <merek>\n┣⊱ /infomobil <merek>\n┗━━━━━━━━━━━━━━━━`
const kerangMessage = `
┏━━❉ *SHELL MENU* ❉━━━┓
┣⊱ /apakah <text>
┣⊱ /bisakah <text>
┣⊱ /kapankah <text>
┣⊱ /rate <text>
┗━━━━━━━━━━━━━━━━`
const mediaMessage = `
┏━━❉ *MEDIA MENU* ❉━━━┓
┣⊱ /tiktokp <text>
┣⊱ /tiktokh <text>
┣⊱ /igprofile <text>
┣⊱ /igstory <text>
┣⊱ /igtv
┣⊱ /ighastag
┣⊱ /ytsearch
┣⊱ /googles
┣⊱ /googleimg
┣⊱ /smuleprof
┣⊱ /smulerecod
┣⊱ /twiterprof
┣⊱ /trendtwit
┣⊱ /twiterindo
┣⊱ /genprim
┣⊱ /urlshort
┣⊱ /ssweb
┗━━━━━━━━━━━━━━━━`
const animeMessage = `
┏━━❉ *ANIME MENU* ❉━━━┓
┣⊱ /nekonime
┣⊱ /Loli
┣⊱ /elf
┣⊱ /waifu
┣⊱ /shota
┣⊱ /husbu
┣⊱ /shinobu
┣⊱ /megumin
┣⊱ /animeart
┣⊱ /walpapernime
┣⊱ /Wibu
┣⊱ /anime <judul>
┣⊱ /animehug
┣⊱ /animekiss
┣⊱ /animecry
┣⊱ /neonime <query>
┣⊱ /neonimed <url>
┣⊱ /ongoinganoboy
┗━━━━━━━━━━━━━━━━`
const nsfwMessage = `
┏━━❉ *ANIME MENU* ❉━━━┓
┣⊱ /xxsearch <query>
┣⊱ /xxd <link>
┣⊱ /nekosearch <query>
┣⊱ /nhentaipdf <id>
┣⊱ /nhentai <query>
┗━━━━━━━━━━━━━━━━`
const bisakah = ['bisa','tidak bisa','mungkin bisa','mungkin tidak','coba ulangi']
const apakah = ['Ya','Tidak','Coba ulangi']
const persen = ['1','2','3','4','5','6','7','8','9','10','15','20','25','30','35','40','45','50','55','60','65','70','75','80','85','90','95','96','97','98','99','100']
const angka = ['0','1','2','3','4','5','6','7','8','9','10','11','12']
const kapankah = ['1','2','3','4','5','6','7','8','9','10',,'11','12','13','14','15','16','17','18','19','20']
const hari = ['Tahun','Bulan','Hari','Minggu','Jam']
const apa = ['Lagi','Yang lalu']
const hero = `
Hero Tank :
1.	Ruby
2.	Atlas
3.	Barats
4.	Baxia
5.	Grock
6.	Lolita
7.	Johnson
8.	Esmeralda
9.	Hylos
10.	Belerick
11.	Uranus
12.	Khufra
13.	Gatot Kaca
14.	Hilda
15.	Minotour
16.	Balmond
17.	Tigriel
18.	Akai
19.	Franco

Hero Fighter :
1.	Ruby
2.	Minsitthar
3.	Argus
4.	Thamuz
5.	Khaleed
6.	Silvanna
7.	Yu Zhong
8.	Barats
9.	Masha
10.	Aldous
11.	Kaja
12.	Martis
13.	Jawhead
14.	Leomord
15.	Guinevere
16.	Badang
17.	X Borg
18.	Terizla
19.	Dyroth
20.	Gatotkaca
21.	Lapu-lapu
22.	Sun
23.	Alpha
24.	Freya
25.	Chou
26.	Roger
27.	Hilda
28.	Balmond
29.	Bane
30.	Zilong
31.	Alucard

Hero Assasin :
1.	Harley
2.	Kadita
3.	Ling
4.	Helcurt
5.	Lancelot
6.	Lapu-lapu
7.	Lesley
8.	Selena
9.	Gusion
10.	Hanzo
11.	Yi Shun-shin
12.	Hayabusa
13.	Natalia
14.	Karina
15.	Fanny
16.	Saber
17.	Zilong
18.	Alucard

Hero Marksman :
1.	Claude
2.	Kimmy
3.	Popol & Kupa
4.	Yi Sun-shin
5.	Moskov
6.	Wanwan
7.	Lesley
8.	Granger
9.	Hanabi
10.	Irithel
11.	Roger
12.	Karrie
13.	Bruno
14.	Layla
15.	Clint
16.	Miya

Hero Mage :
1.	Harley
2.	Chang’e
3.	Vale
4.	Kimmy
5.	Kadita
6.	Faramis
7.	Cecilion
8.	Luo Yi
9.	Valir
10.	Parsha
11.	Zhask
12.	Selena
13.	Harith
14.	Lunox
15.	Esmeralda
16.	Lylia
17.	Odette
18.	Kagura
19.	Vexana
20.	Aurora
21.	Alice
22.	Cyclops
23.	Eduora
24.	Nana
25.	Gord

Hero Support :
1.	Estes
2.	Faramis
3.	Carmilla
4.	Kaja
5.	Lolita
6.	Angela
7.	Diggie
8.	Minotaur
9.	Nana
10.	Rafaela` //kalau ada yang kurang tambahin aja sendiri saya capek ;v
//end settings

//list menu
bot.hears('Remove keyboard!!', ctx => {
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id,'Keyboard Berhasil Dihilangkan!!',
    {
        reply_markup: {
            remove_keyboard: true //kalau ngak ngerti jngan di utak atik
        }
    })
})
bot.command('info', (ctx) => {
    //console.log(ctx.botInfo)
    ctx.reply("ID = "+ctx.botInfo.id+"\nIs bot = "+ctx.botInfo.is_bot+"\nNama BOT = "+ctx.botInfo.first_name+"\nUsername = @"+ctx.botInfo.username+"\nCan Join Groups = "+ctx.botInfo.can_join_groups+"\nCan Read all Group Message = "+ctx.botInfo.can_read_all_group_messages+"\nSupports Inline Queries = "+ctx.botInfo.supports_inline_queries)
})
bot.hears('Maker Menu', ctx => {
    let maker = makerMessage;
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, maker,
        {
            reply_markup: {
                keyboard: [
                    [
                        {text: 'Nulis'},
                    ],
                    [
                        {text: 'Kembali Ke Menu Utama'}
                    ],
                    [
                        {text: 'Remove keyboard!!'}
                    ]
                ]
            }
        })
})
bot.hears('Other Menu', ctx => {
    let other = otherMessage;
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, other,
        {
            reply_markup: {
                keyboard: [
                    [
                        {text: 'Random pantun'},
                        {text: 'Random cat'},
                        {text: 'Random quotes'}
                    ],
                    [
                        {text: 'Quotes Nime'},
                        {text: 'F my live'},
                        {text: 'Most view film'}
                    ],
                    [
                        {text: 'Random nama'},
                        {text: 'Info Gempa'},
                        {text: 'Renungan harian'}
                    ],
                    [
                        {text: 'ML hero list'},
                        {text: 'Fakta unik'},
                        {text: 'Jadwal Tv Now'}
                    ],
                    [
                        {text: 'Koin'},
                        {text: 'Dadu'},
                        {text: 'Pokemon'}
                    ],
                    [
                        {text: 'Random asu'},
                        {text: 'Random rubah'},
                        {text: 'Random kambing'}
                    ],
                    [
                        {text: 'Random panda'},
                        {text: 'Random burung'},
                        {text: 'Random tupai'}
                    ],
                    [
                        {text: 'Random koala'},
                        {text: 'Puisi image'},
                        {text: 'Random quotes EN'}
                    ],
                    [
                        {text: 'Kata bijak'},
                        {text: 'Bucin'},
                        {text: 'Corona Indonesia'}
                    ],
                    [
                        {text: 'Kembali Ke Menu Utama'}
                    ],
                    [
                        {text: 'Remove keyboard!!'}
                    ]
                ]
            }
        })
})

bot.hears('Pray Menu', (ctx) => {
    let pray = tobatMessage
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, pray,
        {
            reply_markup: {
                keyboard: [
                    [
                        {text: 'Alkitab'},
                        {text: 'Quran list'},
                    ],
                    [
                        {text: 'Kembali Ke Menu Utama'}
                    ],
                    [
                        {text: 'Remove keyboard!!'}
                    ]
                ]
            }
        })
})
bot.hears('Fun Menu', (ctx) => {
    let fun = funMessage
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, fun,
        {
            reply_markup: {
                keyboard: [
                    [
                        {text: 'Kembali Ke Menu Utama'}
                    ],
                    [
                        {text: 'Remove keyboard!!'}
                    ]
                ]
            }
        })
})
bot.hears('Kerang Menu', (ctx) => {
    let kerang = kerangMessage
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, kerang,
        {
            reply_markup: {
                keyboard: [
                    [
                        {text: 'Kembali Ke Menu Utama'}
                    ],
                    [
                        {text: 'Remove keyboard!!'}
                    ]
                ]
            }
        })
})
bot.hears('Media Menu', (ctx) => {
    let medi = mediaMessage
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, medi,
        {
            reply_markup: {
                keyboard: [
                    [
                        {text: 'Kembali Ke Menu Utama'}
                    ],
                    [
                        {text: 'Remove keyboard!!'}
                    ]
                ]
            }
        })
})
bot.hears('Anime Menu', (ctx) => {
    let nime = animeMessage
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, nime,
        {
            reply_markup: {
                keyboard: [
                    [
                        {text : 'Random Nekonime'},
                        {text : 'Random Loli'},
                        {text : 'Random Elf'}
                    ],
                    [
                        {text : 'Random Waifu'},
                        {text : 'Random Shota'},
                        {text : 'Random Husbu'}
                    ],
                    [
                        {text : 'Random Shinobu'},
                        {text : 'Random Megumin'},
                        {text : 'Random Anime Art'}
                    ],
                    [
                        {text : 'Random Walpaper Anime'},
                        {text : 'Random Wibu'},
                        {text : 'Random Anime Hug'}
                    ],
                    [
                        {text : 'Random Anime Kiss'},
                        {text : 'Random Anime Cry'},
                        {text : 'Ongoing Anoboy'}
                    ],
                    [
                        {text: 'Kembali Ke Menu Utama'}
                    ],
                    [
                        {text: 'Remove keyboard!!'}
                    ]
                ]
            }
        })
})
bot.hears('Nsfw Menu', (ctx) => {
    let medi = mediaMessage
    ctx.deleteMessage()
    bot.telegram.sendMessage(ctx.chat.id, medi,
        {
            reply_markup: {
                keyboard: [
                    [
                        {text : 'Hentai List'},
                        {text : '3D List'},
                        {text : 'Neko Jav'}
                    ],
                    [
                        {text : 'SEX'},
                        {text : 'Random Hentai'},
                        {text : 'NSFW Neko'}
                    ],
                    [
                        {text : 'ECCHI'},
                        {text : 'Ahegao'},
                        {text : 'Holo Lewd'}
                    ],
                    [
                        {text : 'Side Oppai'},
                        {text : 'Anime Feets'},
                        {text : 'Anime Booty'}
                    ],
                    [
                        {text : 'Anime Thighss'},
                        {text : 'Hentai Paradise'},
                        {text : 'Anime Arm Pits'}
                    ],
                    [
                        {text : 'Hentai Femdom'},
                        {text : 'Lewd Anime Girls'},
                        {text : 'Big Anime Tiddies'}
                    ],
                    [
                        {text : 'Anime Belly Button'},
                        {text : 'Hentai Everyone'}
                    ],
                    [
                        {text: 'Kembali Ke Menu Utama'}
                    ],
                    [
                        {text: 'Remove keyboard!!'}
                    ]
                ]
            }
        })
})
bot.command('reply', (ctx) => {
    let input = ctx.message.text;
    let inputArray = input.split(" ");
    let message = "";

    if(inputArray.length == 1){
           message = "masukan parameter teks";
    }else{
          inputArray.shift();
          message = inputArray.join(" ");
    }
    ctx.reply(message);
})
bot.hears('Random pantun', (ctx) => {
    ctx.deleteMessage()
    axios.get('https://api.vhtear.com/random_pantun&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res);
         ctx.reply("Pantun : "+res.data.result.pantun);
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Random quotes EN', (ctx) => {
    ctx.deleteMessage()
    axios.get('https://api.vhtear.com/quotes?apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res);
         ctx.reply("Tags : "+res.data.result.tags+"\nAuthor : "+res.data.result.author+"\nContent : "+res.data.result.content);
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Kata bijak', (ctx) => {
    ctx.deleteMessage()
    axios.get('http://lolhuman.herokuapp.com/api/random/katabijak')
    .then(res => {
         //console.log(res);
         ctx.reply("Kata : "+res.data.result);
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Corona Indonesia', (ctx) => {
    ctx.deleteMessage()
    axios.get('http://lolhuman.herokuapp.com/api/corona/indonesia')
    .then(res => {
         //console.log(res);
         ctx.reply("Positif : "+res.data.result.positif+"\nSembuh : "+res.data.result.sembuh+"\nDirawat : "+res.data.result.dirawat+"\nMeninggal : "+res.data.result.meninggal);
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Bucin', (ctx) => {
    ctx.reply("silahkan pilih salah satu",
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Bucin 1', callback_data: 'bucin'},
                    { text: 'Bucin 2', callback_data: 'bucin1'}
                ],
                [
                    { text: 'Kembali Ke Menu Utama', callback_data: "menu"}
                ]
            ]
        }
    })
})
bot.action('bucin', (ctx) => {
    axios.get('http://lolhuman.herokuapp.com/api/random/bucin')
    .then(res => {
         //console.log(res);
         ctx.reply("Bucin : "+res.data.result);
    }).catch(e => {
         console.log(e);
   })
})
bot.action('bucin1', (ctx) => {
    axios.get('http://lolhuman.herokuapp.com/api/random/katabucin')
    .then(res => {
         //console.log(res);
         ctx.reply("Bucin : "+res.data.result);
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Random quotes', (ctx) => {
    ctx.reply("silahkan pilih salah satu",
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Quotes 1', callback_data: 'randomquotes'},
                    { text: 'Quotes 2', callback_data: 'randomquotes2'}
                ],
                [
                    { text: 'Quotes 3', callback_data: 'randomquotes3'}
                ],
                [
                    { text: 'Kembali Ke Menu Utama', callback_data: "menu"}
                ]
            ]
        }
    })
})
bot.action('randomquotes', (ctx) => {
    axios.get('https://mhankbarbar.herokuapp.com/api/randomquotes')
    .then(res => {
         //console.log(res);
         ctx.reply("Author : "+res.data.author+"\nQuotes : "+res.data.quotes);
    }).catch(e => {
         console.log(e);
   })
})
bot.action('randomquotes2', (ctx) => {
    axios.get('http://docs-jojo.herokuapp.com/api/randomquotes')
    .then(res => {
         //console.log(res);
         ctx.reply("Author : "+res.data.author+"\nQuotes : "+res.data.quotes);
    }).catch(e => {
         console.log(e);
   })
})
bot.action('randomquotes3', (ctx) => {
    axios.get('https://tobz-api.herokuapp.com/api/randomquotes?apikey=BotWeA')
    .then(res => {
         //console.log(res);
         ctx.reply("Author : "+res.data.author+"\nQuotes : "+res.data.quotes);
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Info Gempa', (ctx) => {
    ctx.reply('Please wait a moment....')
    axios.get('https://mhankbarbar.herokuapp.com/api/infogempa')
    .then(res => {
        // console.log(res);
        ctx.reply("📍 Location : "+res.data.lokasi+"\n🔽 Depth : "+res.data.kedalaman+"\n📌 Koordinat : "+res.data.koordinat+"\n🔴 Magnitude : "+res.data.magnitude+"\n🔵 Potential : "+res.data.potensi+"\n⏰ Time : "+res.data.waktu);
    }).catch(e => {
         console.log(e);
    })
})
bot.hears('Quotes Nime', (ctx) => {
    ctx.reply("silahkan pilih salah satu",
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Quotes Nime1 1', callback_data: 'quotesnime2'},
                    { text: 'Quotes Nime 2', callback_data: 'quotesnime'}
                ],
                [
                    { text: 'Kembali Ke Menu Utama', callback_data: 'menu'}
                ]
            ]
        }
    })
})
bot.action('quotesnime', (ctx) => {
    axios.get('https://mhankbarbar.herokuapp.com/api/quotesnime/random')
    .then(res => {
         //console.log(res);
         ctx.reply("Anime : "+res.data.data.anime+"\nCharacter : "+res.data.data.character+"\nQuotes : "+res.data.data.quote)
   }).catch(e => {
         console.log(e);
   })
})
bot.action('quotesnime2', (ctx) => {
    axios.get('http://docs-jojo.herokuapp.com/api/quotesnime/random')
    .then(res => {
         //console.log(res);
         ctx.reply("Quotes : "+res.data.data.quote)
   }).catch(e => {
         console.log(e);
   })
})
bot.hears('Renungan harian', (ctx) => {
    axios.get('http://docs-jojo.herokuapp.com/api/renungan')
    .then(res => {
         //console.log(res);
         ctx.reply("Judul : "+res.data.judul+"\nIsi : "+res.data.isi+"\nPesan : "+res.data.pesan)
   }).catch(e => {
         console.log(e);
   })
})
bot.hears('Random nama', (ctx) => {
    ctx.reply('Silahkan pilih salah satu',
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Random Nama Pria', callback_data: 'namapria'},
                    { text: 'Random Nama Wanita', callback_data: 'namawanita'},
                ],
                [
                    { text: 'Random', callback_data: 'randomnama'}
                ]
                [
                    { text: 'Kembali Ke Menu Utama', callback_data: 'menu'}
                ]
            ]
        }
    })
})
bot.action('namapria', (ctx) => {
    axios.get('https://api.i-tech.id/tools/nama?key=gxt8Hi-RFV5sp-2y2b45-5ACcEU-Drgc8j&gender=male')
    .then(res => {
        //console.log(res);
        ctx.reply("Nama : "+res.data.result)
    }).catch(e => {
        console.log(e);
    })
})
bot.action('namawanita', (ctx) => {
    axios.get('https://api.i-tech.id/tools/nama?key=gxt8Hi-RFV5sp-2y2b45-5ACcEU-Drgc8j&gender=female')
    .then(res => {
        //console.log(res);
        ctx.reply("Nama : "+res.data.result)
    }).catch(e => {
        console.log(e);
    })
})
bot.action('randomnama'), (ctx) => {
    const gender = ['male','female']
    axios.get('https://api.i-tech.id/tools/nama?key=gxt8Hi-RFV5sp-2y2b45-5ACcEU-Drgc8j&gender='+gender)
    .then(res => {
        //console.log(res);
        ctx.reply("Nama : "+res.data.result)
    }).catch(e => {
        console.log(e);
    })
}
bot.hears('Fakta unik', (ctx) => {
    ctx.reply("Please waitt...")
    axios.get('https://api.i-tech.id/tools/fakta?key=gxt8Hi-RFV5sp-2y2b45-5ACcEU-Drgc8j')
    .then(res => {
        //console.log(res.data);
        ctx.reply("Fakta : "+res.data.result)
    }).catch(e => {
        console.log(e);
    })
})
bot.hears('Alkitab', (ctx) => {
    ctx.deleteMessage()
    ctx.reply("Please waitt...")
    axios.get('http://docs-jojo.herokuapp.com/api/alkitab')
    .then(res => {
        //console.log(res);
        ctx.reply("Ayat : "+res.data.result.ayat+"\nIsi : "+res.data.result.isi)
    }).catch(e => {
        console.log(e);
    })
})

/************[ Pray Menu ]***********/
//awokowkaowk
//hemmm.....
//dahlah
/************[ Pray Menu ]**********/
bot.hears('Alkitab', (ctx) => {
    ctx.deleteMessage()
    ctx.reply("Please waitt...")
    axios.get('http://docs-jojo.herokuapp.com/api/alkitab')
    .then(res => {
        //console.log(res);
        ctx.reply("Ayat : "+res.data.result.ayat+"\nIsi : "+res.data.result.isi)
    }).catch(e => {
        console.log(e);
    })
})
bot.hears('Quran list', (ctx) => {
    ctx.deleteMessage()
    ctx.reply("Please waitt...")
    axios.get('https://api.vhtear.com/quranlist?&apikey=AW62938KK46292gJ73639h')
    .then(res => {
        //console.log(res.data.result.list);
        ctx.reply("List : \n"+res.data.result.list)
    }).catch(e => {
        console.log(e);
    })
})
bot.command('quran', (ctx) => {
    ctx.reply("Please waitt...")
    let input = ctx.message.text;
    let inputArray = input.split(" ");
    inputArray.shift();
              message = inputArray.join(" ");
    
    axios.get('https://api.vhtear.com/quran?no='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
        //console.log(res.data.result.list);
        ctx.reply("Surah : "+res.data.result.surah+"\nQuran : "+res.data.result.quran)
    }).catch(e => {
        console.log(e);
    })
})
bot.command('jadwalshalat', (ctx) => {
    ctx.reply("Please waitt...")
    let input = ctx.message.text;
    let inputArray = input.split(" ");
    inputArray.shift();
              message = inputArray.join(" ");
    
    axios.get('https://api.vhtear.com/jadwalsholat?query='+buku2+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
        //console.log(res.data.result.list);
        ctx.reply("Surah : "+res.data.result.surah+"\nQuran : "+res.data.result.quran)
    }).catch(e => {
        console.log(e);
    })
})
/*****************[ selesai udah segitu aja ]************/
//maaf kalau sedikit
//hahhh.....
/////////////////////////////////////////////////////////

bot.hears('F my live', (ctx) => {
    ctx.reply("Please waitt...")
    axios.get('https://tobz-api.herokuapp.com/api/randomfmylife?apikey=BotWeA')
    .then(res => {
        //console.log(res);
        ctx.reply("Fmylife : "+res.data.result)
    }).catch(e => {
        console.log(e);
    })
})
bot.hears('Jadwal Tv Now', (ctx) => {
    ctx.reply("Please waitt...")
    axios.get('http://docs-jojo.herokuapp.com/api/jadwaltvnow')
    .then(res => {
        //console.log(res.data.result);
        ctx.reply("Jam : "+res.data.result.jam+"\nJadwal : \n"+res.data.result.jadwalTV)
    }).catch(e => {
        console.log(e);
    })
})
bot.hears('Most view film', (ctx) => {
    ctx.reply("Please waitt...")
    axios.get('http://docs-jojo.herokuapp.com/api/mostviewfilm')
    .then(res => {
        //console.log(res.data.result);
        ctx.reply(res.data.result)
    }).catch(e => {
        console.log(e);
    })
})
bot.hears('ML hero list', (ctx) => {
         ctx.reply(hero)
    .catch(e => {
         console.log(e);
    })
})
bot.hears('Puisi image', (ctx) => {
    ctx.reply("Please waitt...")
    ctx.replyWithPhoto('https://api.vhtear.com/puisi_image&apikey=AW62938KK46292gJ73639h')
})
bot.hears('Random cat', (ctx) => {
    ctx.reply("Please waitt...")
    axios.get('https://aws.random.cat/meow')
    .then(res => {
        //console.log(res.data.result);
        ctx.replyWithPhoto(res.data.file)
    }).catch(e => {
        console.log(e);
    })
})
bot.command('cat', (ctx, args) => {
    let input = ctx.message.text;
    let inputArray = input.split(" ");
    inputArray.shift();
          message = inputArray.join(" ");

    //console.log(message)
    ctx.replyWithPhoto('https://cataas.com/cat/says/'+message)
})
bot.command('kbbi', (ctx, args) => {
    let input = ctx.message.text;
    let inputArray = input.split(" ");
    inputArray.shift();
          message = inputArray.join(" ");

    //console.log
    axios.get('https://api.vhtear.com/kbbi?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
        //console.log(res.data.search);
        ctx.reply("Hasil : \n"+res.data.result.hasil)
    })
}) //ada yang bisa bantu ini ngak ? yang ngrti helep dong saya ngak terlalu bisa ngoding javascript soalnya
bot.hears('Koin', (ctx) => {
    ctx.reply("Please Wait....")
    ctx.replyWithPhoto('https://i.ibb.co/YTWZrZV/2003-indonesia-500-rupiah-copy.png')
})

bot.hears('Dadu', (ctx) => {
    ctx.reply("Please select the number you want...",
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '1', callback_data: 'dadu1'},
                    { text: '2', callback_data: 'dadu2'},
                    {text: '3',callback_data: 'dadu3'}
                ],
                [
                    { text: '4', callback_data: 'dadu4'},
                    {text: '5', callback_data: 'dadu5'},
                    {text: '6', callback_data: 'dadu6'}
                ],
                [
                    { text: 'Return to Main Menu', callback_data: 'menu'}
                ]
            ]
        }
    })
})
bot.action('dadu1', ctx => {
    ctx.replyWithPhoto('https://www.random.org/dice/dice1.png')
})
bot.action('dadu2', ctx => {
    ctx.replyWithPhoto('https://www.random.org/dice/dice2.png')
})
bot.action('dadu3', ctx => {
    ctx.replyWithPhoto('https://www.random.org/dice/dice3.png')
})
bot.action('dadu4', ctx => {
    ctx.replyWithPhoto('https://www.random.org/dice/dice4.png')
})
bot.action('dadu5', ctx => {
    ctx.replyWithPhoto('https://www.random.org/dice/dice5.png')
})
bot.action('dadu6', ctx => {
    ctx.replyWithPhoto('https://www.random.org/dice/dice6.png')
})

bot.hears('Random asu', ctx => {
    ctx.reply("Please waitt...")
    axios.get('https://api.i-tech.id/tools/asu?key=gxt8Hi-RFV5sp-2y2b45-5ACcEU-Drgc8j')
    .then(res => {
        //console.log(res.data.result);
        ctx.replyWithPhoto(res.data.result)
    }).catch(e => {
        console.log(e);
    })
})
bot.hears('Random rubah', ctx => {
    ctx.reply("Please waitt...")
    axios.get('https://api.i-tech.id/tools/foxes?key=gxt8Hi-RFV5sp-2y2b45-5ACcEU-Drgc8j')
    .then(res => {
        //console.log(res.data.result);
        ctx.replyWithPhoto(res.data.result)
    }).catch(e => {
        console.log(e);
    })
})
bot.hears('Random kambing', ctx => {
    ctx.reply("Please waitt...")
    axios.get('https://api.i-tech.id/tools/goat?key=gxt8Hi-RFV5sp-2y2b45-5ACcEU-Drgc8j')
    .then(res => {
        //console.log(res.data.result);
        ctx.replyWithPhoto(res.data.result)
    }).catch(e => {
        console.log(e);
    })
})
bot.hears('Random panda', ctx => {
    ctx.reply("Please waitt...")
    axios.get('https://api.i-tech.id/tools/panda?key=gxt8Hi-RFV5sp-2y2b45-5ACcEU-Drgc8j')
    .then(res => {
        //console.log(res.data.result);
        ctx.replyWithPhoto(res.data.result)
    }).catch(e => {
        console.log(e);
    })
})
bot.hears('Random burung', ctx => {
    ctx.reply("Please waitt...")
    axios.get('https://api.i-tech.id/tools/bird?key=gxt8Hi-RFV5sp-2y2b45-5ACcEU-Drgc8j')
    .then(res => {
        //console.log(res.data.result);
        ctx.replyWithPhoto(res.data.result)
    }).catch(e => {
        console.log(e);
    })
})
bot.hears('Random tupai', ctx => {
    ctx.reply("Please waitt...")
    axios.get('https://api.i-tech.id/tools/fox?key=gxt8Hi-RFV5sp-2y2b45-5ACcEU-Drgc8j')
    .then(res => {
        //console.log(res.data.result);
        ctx.replyWithPhoto(res.data.result)
    }).catch(e => {
        console.log(e);
    })
})
bot.hears('Random koala', ctx => {
    ctx.reply("Please waitt...")
    axios.get('https://api.i-tech.id/tools/koala?key=gxt8Hi-RFV5sp-2y2b45-5ACcEU-Drgc8j')
    .then(res => {
        //console.log(res.data.result);
        ctx.replyWithPhoto(res.data.result)
    }).catch(e => {
        console.log(e);
    })
})


/************[ Maker Menu ]************/
//Maker Menu
//maaf segini aja dulu yah
//kalau ada rest api lain bagi dong buat nambahin fitur :v
//
/************[ Maker Menu ]************/
bot.hears('Nulis', (ctx) => {
    ctx.reply("Please select the book you want...",
    {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'Buku 1', callback_data: 'buku1'},
                    {text: 'buku 2', callback_data: 'buku2'},
                    {text: 'buku 3',callback_data: 'buku3'}
                ],
                [
                    { text: 'Back to Main Menu', callback_data: 'menu'}
                ]
            ]
        }
    })
})
bot.action('buku1', ctx => {
    ctx.reply('Successfully selected "Book 1"\Please enter text by typing: /text 1 [your text]')
})
bot.action('buku2', ctx => {
    ctx.reply('Successfully selected "Book 2"\Please enter text by typing: /text 2 [your text]')
})
bot.action('buku3', ctx => {
    ctx.reply('Successfully selected "Book 3"\nPlease enter text by typing: /text3 |name|class|text')
})
bot.command('teks1', (ctx) => {
    let teks = ctx.message.text;
    let abc = teks.split("teks1 ");
    abc.shift();
        buku = abc.join(" ");
        //console.log(message)
        ctx.replyWithPhoto('http://api.zeks.xyz/api/nulis?text='+buku+'&apikey=xptnbot352')
})
bot.command('teks2', (ctx) => {
    let teks1 = ctx.message.text;
    let def = teks1.split("teks2 ");
    def.shift();
        buku2 = def.join(" ");
        
    axios.get(`http://api-melodicxt-2.herokuapp.com/api/joki-nulis?text=`+buku2+`&apiKey=administrator`)
    .then(res => {
        //console.log(res.data.result.result)
        ctx.replyWithPhoto(res.data.result.result)   
            //ctx.replyWithPhoto(res.data.result)
        //console.log(message)
    })
})
bot.command('teks3', (ctx) => {
    let teks1 = ctx.message.text;
    let def = teks1.split("|");
    def.shift();
        buku2 = def[0];
        hoho = def[1];
        hahaha = def[2];
    
    axios.get(`http://api-melodicxt-2.herokuapp.com/api/joki-nulis?text=${hahaha}&nama=${buku2}&kelas=${hoho}&apiKey=administrator`)
        .then(res => {
            //console.log(res.data.result.result)
            ctx.replyWithPhoto(res.data.result.result)   
                //ctx.replyWithPhoto(res.data.result)
            //console.log(message)
        })
})
/*bot.command('textimage', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split(" ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('https://tobz-api.herokuapp.com/api/ttp?text='+buku2+'&apikey=BotWeA')
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.base64)
    })
})*/
bot.command('tahta', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("tahta ");
    def.shift();
        buku2 = def.join(" ");

    axios.replyWithPhoto('http://api.zeks.xyz/api/hartatahta?text='+buku2+'&apikey=xptnbot352')
})
bot.command('crosslogo', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("crosslogo ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/silktext?text='+buku2+'&apikey=xptnbot352')
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('flowertext', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("flowertext ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/flowertext?text='+buku2+'&apikey=xptnbot352')
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('flametext', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("flametext ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/flametext?text='+buku2+'&apikey=apivinz')
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('woodentext', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("woodentext ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/woodentext?text='+buku2+'&apikey=apivinz')
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('silktext', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("silktext ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/silktext?text='+buku2+'&apikey=apivinz')
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('glowtext', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("glowtext ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/glowtext?text='+buku2+'&apikey=apivinz')
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('smoketext', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("smoketext ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/smoketext?text='+buku2+'&apikey=apivinz')
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('pubglogo', ctx => {
    ctx.reply('Please Wait....')
    let input = ctx.message.text;
    let inputArray = input.split("|");
    inputArray.shift();
        tek1 = inputArray[0];
        tek2 = inputArray[1];
        //console.log(nama)
    axios.get('http://api.zeks.xyz/api/pubglogo?text1='+tek1+'&text2='+tek2+'&apikey=apivinz')
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('skytext', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("skytext ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/skytext?text='+buku2+'&apikey=apivinz')
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('cslogo', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("cslogo ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/cslogo?text='+buku2+'&apikey=apivinz')
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('emojiimage', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("emojiimage ");
    def.shift();
        buku2 = def.join(" ");

    ctx.replyWithPhoto('http://api.zeks.xyz/api/emoji-image?apikey=apivinz&emoji='+buku2)
    /*.then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })*/
})
bot.command('lightext', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("lightext ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/lithgtext?text='+buku2+'&apikey=apivinz')
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('retro', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("|");
    def.shift();
        hi = def[0];
        ho = def[1];
        ha = def[2];

    axios.get(`http://api.zeks.xyz/api/retro?text1=${hi}&text2=${ho}&text3=${ha}&apikey=apivinz`)
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('text3dbox', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("text3dbox ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/text3dbox?apikey=apivinz&text='+buku2)
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('crismes', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("crismes ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/crismes?text='+buku2+'&apikey=apivinz')
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('thunder', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("thunder ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/thundertext?text='+buku2+'&apikey=apivinz')
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('gpbutton', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("gpbutton ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/gplaybutton?text='+buku2+'&apikey=apivinz')
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('spbutton', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("spbutton ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/splaybutton?text='+buku2+'&apikey=apivinz')
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('snowwrite', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("|");
    def.shift();
        buku2 = def[0];
        hoho = def[1];
    //console.log(def)
    axios.get('http://api.zeks.xyz/api/snowwrite?text1='+buku2+'&text2='+hoho+'&apikey=apivinz')
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('colortext', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("colortext ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/colortext?text='+buku2+'&apikey=apivinz')
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('grafiti', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("grafiti ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/grafiti?text='+buku2+'&apikey=apivinz')
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('pantai', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("pantai ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/tpantai?text='+buku2+'&apikey=apivinz')
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('watercolor', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("|");
    def.shift();
        buku2 = def[0];
        hoho = def[1];
    //console.log(def)
    axios.get('http://api.zeks.xyz/api/watercolour?text1='+buku2+'&text2='+hoho+'&apikey=apivinz')
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})
bot.command('firetext', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("firetext ");
    def.shift();
        buku2 = def.join(" ");

    ctx.replyWithPhoto('https://api.vhtear.com/fire_maker?text='+buku2+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('metaltext', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("metaltext ");
    def.shift();
        buku2 = def.join(" ");

    ctx.replyWithPhoto('https://api.vhtear.com/metal_maker?text='+buku2+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('baloontext', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("|");
    def.shift();
        buku2 = def[0];
        hoho = def[1];
    //console.log(def)
    ctx.replyWithPhoto('https://api.vhtear.com/balloonmaker?text1='+buku2+'&text2='+hoho+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('padlocktext', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("|");
    def.shift();
        buku2 = def[0];
        hoho = def[1];
    //console.log(def)
    ctx.replyWithPhoto('https://api.vhtear.com/padlock?text1='+buku2+'&text2='+hoho+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('txtgif', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("textgif ");
    def.shift();
        buku2 = def.join(" ");

    ctx.replyWithPhoto('https://api.vhtear.com/textxgif?text='+buku2+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('slidingtext', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("slidingtext ");
    def.shift();
        buku2 = def.join(" ");

    ctx.replyWithPhoto('https://api.vhtear.com/slidingtext?text='+buku2+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('bannerff', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("|");
    def.shift();
        buku2 = def[0];
        hoho = def[1];
    //console.log(def)
    ctx.replyWithPhoto('https://api.vhtear.com/bannerff?title='+buku2+'&text='+hoho+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('logoff', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("logoff ");
    def.shift();
        buku2 = def.join(" ");

    ctx.replyWithPhoto('https://api.vhtear.com/logoff?hero=alok&text='+buku2+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('logoml', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("|");
    def.shift();
        buku2 = def[0];
        hoho = def[1];
    //console.log(def)
    ctx.replyWithPhoto('https://api.vhtear.com/logoml?hero='+buku2+'&text='+hoho+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('blackpink', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("blackpink ");
    def.shift();
        buku2 = def.join(" ");

    ctx.replyWithPhoto('https://api.vhtear.com/blackpinkicon?text='+buku2+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('textthunder', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("txtthunder ");
    def.shift();
        buku2 = def.join(" ");

    ctx.replyWithPhoto('https://api.vhtear.com/thundertext?text='+buku2+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('silktext', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("silktext ");
    def.shift();
        buku2 = def.join(" ");

    ctx.replyWithPhoto('https://api.vhtear.com/silktext?text='+buku2+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('partytext', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("partytext ");
    def.shift();
        buku2 = def.join(" ");

    ctx.replyWithPhoto('https://api.vhtear.com/partytext?text='+buku2+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('romancetext', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("romancetext ");
    def.shift();
        buku2 = def.join(" ");

    ctx.replyWithPhoto('https://api.vhtear.com/romancetext?text='+buku2+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('googletxt', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("|");
    def.shift();
        buku2 = def[0];
        hoho = def[1];
        ikan = def[2];
    //console.log(def)
    ctx.replyWithPhoto('https://api.vhtear.com/googletext?text1='+buku2+'&text2='+hoho+'&text3='+ikan+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('glowtext2', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("glowtext2 ");
    def.shift();
        buku2 = def.join(" ");

    ctx.replyWithPhoto('https://api.vhtear.com/glowtext?text='+buku2+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('lovemessage', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("lovemessage ");
    def.shift();
        buku2 = def.join(" ");

    ctx.replyWithPhoto('https://api.vhtear.com/lovemessagetext?text='+buku2+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('glitchtxt', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("|");
    def.shift();
        buku2 = def[0];
        hoho = def[1];
    //console.log(def)
    ctx.replyWithPhoto('https://api.vhtear.com/glitchtext?text1='+buku2+'&text2='+hoho+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('galaxytxt', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("galaxytxt ");
    def.shift();
        buku2 = def.join(" ");

    ctx.replyWithPhoto('https://api.vhtear.com/galaxytext?text='+buku2+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('phlogo', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("|");
    def.shift();
        buku2 = def[0];
        hoho = def[1];
    //console.log(def)
    ctx.replyWithPhoto('https://api.vhtear.com/pornlogo?text1='+buku2+'&text2='+hoho+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('wetglass', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("wetglass ");
    def.shift();
        buku2 = def.join(" ");

    ctx.replyWithPhoto('https://api.vhtear.com/wetglass?text='+buku2+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('stylelogo', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("stylelogo ");
    def.shift();
        buku2 = def.join(" ");

    ctx.replyWithPhoto('https://api.vhtear.com/stylelogo?text='+buku2+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('watercolor2', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("watercolor2 ");
    def.shift();
        buku2 = def.join(" ");

    ctx.replyWithPhoto('https://api.vhtear.com/watercolor?text='+buku2+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('qrcode', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("qrcode ");
    def.shift();
        buku2 = def.join(" ");

    ctx.replyWithPhoto('https://api.vhtear.com/generateqr?data='+buku2+'&apikey=AW62938KK46292gJ73639h')
})
bot.command('txtimg', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("txtimg ");
    def.shift();
        buku2 = def.join(" ");

    ctx.replyWithPhoto('http://api-melodicxt-2.herokuapp.com/api/img-text?text='+buku2+'&apiKey=administrator')
})

/**********[ Fun Menu ]**********/
//awokowk
//sengaja diginiin biar gampang nyari nya ;v
//dah lah
//////////////////////////////////
bot.command('artinama', (ctx) => {
    let input = ctx.message.text;
    let inputArray = input.split("artinama ");
    inputArray.shift();
              message = inputArray.join(" ");

    axios.get('https://api.vhtear.com/artinama?nama='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res);
         ctx.reply(res.data.result.hasil);
    }).catch(e => {
         console.log(e);
   })
})
bot.command('artimimpi', (ctx) => {
    let input = ctx.message.text;
    let inputArray = input.split("artimimpi ");
    inputArray.shift();
              message = inputArray.join(" ");

    axios.get('https://api.vhtear.com/artimimpi?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res);
         ctx.reply(res.data.result.hasil);
    }).catch(e => {
         console.log(e);
   })
})
bot.command('lirik', (ctx) => {
    let input = ctx.message.text;
    let inputArray = input.split("lirik ");
    inputArray.shift();
              message = inputArray.join(" ");

    axios.get('https://api.vhtear.com/liriklagu?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res);
         ctx.reply(res.data.result.result);
    }).catch(e => {
         console.log(e);
   })
})
bot.command('chord', (ctx) => {
    let input = ctx.message.text;
    let inputArray = input.split("chord ");
    inputArray.shift();
              message = inputArray.join(" ");

    axios.get('https://api.vhtear.com/chordguitar?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res);
         ctx.reply(res.data.result.result);
    }).catch(e => {
         console.log(e);
   })
})
bot.command('zodiak', (ctx) => {
    let input = ctx.message.text;
    let inputArray = input.split("zodiak ");
    inputArray.shift();
              message = inputArray.join(" ");

    axios.get('https://api.vhtear.com/zodiak?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res);
         ctx.reply(`Zodiac : ${res.data.result.zodiak}\nLucky Number : ${res.data.result.nomorKeberuntungan}\nRamlan1 : ${res.data.result.ramalan}\nMotivation : ${res.data.result.motivasi}\nInspiration : ${res.data.result.inspirasi}`); //awoakowakwok ramlan siapa wkwwk ;v
    }).catch(e => {
         console.log(e);
   })
})
bot.command('wikipaedi', (ctx) => { //awoakowkawok pak edi siapa wkwkwk ;v
    let input = ctx.message.text;
    let inputArray = input.split("wikipaedi ");
    inputArray.shift();
              message = inputArray.join(" ");

    axios.get('https://api.vhtear.com/wikipedia?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res);
         ctx.reply(`Dilansir dari Wiki Pak Edi : \n\n${res.data.result.info}`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('brainly', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("brainly ");
    inputArray.shift();
              message = inputArray.join(" ");

    axios.get('https://api.vhtear.com/branly?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res);
         ctx.reply(res.data.result.data); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('kalkulator', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("kalkulator ");
    inputArray.shift();
              message = inputArray.join(" ");

    axios.get('https://api.vhtear.com/calculator?value='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res);
         ctx.reply(`Info : ${res.data.result.info}\n\nJawaban : ${res.data.result.data}`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('weather', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("weather ");
    inputArray.shift();
              message = inputArray.join(" ");

    axios.get('https://api.vhtear.com/weather?city='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res);
         ctx.reply(`Lokasi : ${res.data.result.location}\nRamalan : ${res.data.result.weather}`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('caklontong', (ctx) => { 
    axios.get('https://api.vhtear.com/funkuis&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); maaf kalau cuma begini doang saya capek males utak atik
         ctx.reply(`Soal : ${res.data.result.soal}\nJawaban : ${res.data.result.jawaban}\nDeskripsi : ${res.data.result.desk}`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('family100', (ctx) => { 
    axios.get('https://api.vhtear.com/family100&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); maaf kalau cuma begini doang saya capek males utak atik
         ctx.replyWithPhoto(res.data.result.soalImg)
         ctx.reply(`Jawaban : ${res.data.result.jawaban}`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('resep', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("resep ");
    inputArray.shift();
              message = inputArray.join(" ");
    axios.get('https://api.vhtear.com/resepmasakan?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         ctx.replyWithPhoto(res.data.result.image)
         ctx.reply(`Judul : ${res.data.result.title}\nDeskripsi : ${res.data.result.desc}\nBahan² : ${res.data.result.bahan}\nCara Pembuatan : ${res.data.result.cara}`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('shopee', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("shopee ");
    inputArray.shift();
              message = inputArray.join(" ");
    axios.get('https://api.vhtear.com/shopee?query='+message+'&count=1&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         ctx.replyWithPhoto(res.data.result.items.image_cover)
         ctx.reply(`Nama : ${res.data.result.items.nama}\nHarga : ${res.data.result.items.harga}\nTerjual : ${res.data.result.items.terjual}\nLokasi toko : ${res.data.result.items.shop_location}\nDeskripsi : ${res.data.result.items.description}`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('pinte', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("pinte ");
    inputArray.shift();
              message = inputArray.join(" ");
    axios.get('https://api.vhtear.com/pinterest?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res.data.result); 
         
         ctx.replyWithPhoto(res.data.result[0]),
         ctx.replyWithPhoto(res.data.result[1]),
         ctx.replyWithPhoto(res.data.result[2]),
         ctx.replyWithPhoto(res.data.result[3]),
         ctx.replyWithPhoto(res.data.result[4]),
         ctx.replyWithPhoto(res.data.result[5]),
         ctx.replyWithPhoto(res.data.result[6]),
         ctx.replyWithPhoto(res.data.result[7]),
         ctx.replyWithPhoto(res.data.result[8]) //mamam biar paketan kalian cepat abis ;v
         //ctx.reply(`Nama : ${res.data.result.items.nama}\nHarga : ${res.data.result.items.harga}\nTerjual : ${res.data.result.items.terjual}\nLokasi toko : ${res.data.result.items.shop_location}\nDeskripsi : ${res.data.result.items.description}`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('gsmarena', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("gsmarena ");
    inputArray.shift();
              message = inputArray.join(" ");
    axios.get('https://api.vhtear.com/gsmarena?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         ctx.replyWithPhoto(res.data.result.image)
         ctx.reply(`Namr : ${res.data.result.title}\nSpec : ${res.data.result.spec}`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('cekjodoh', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("|");
    inputArray.shift();
              message = inputArray[0];
              mer = inputArray[1];
    axios.get('https://api.vhtear.com/primbonjodoh?nama='+message+'&pasangan='+mer+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         //ctx.replyWithPhoto(res.data.result.image)
         ctx.reply(res.data.result.hasil); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('weton', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("|");
    inputArray.shift();
              message = inputArray[0];
              mer = inputArray[1];
              lele = inputArray[2];
    axios.get('https://api.vhtear.com/ramalweton?tgl='+message+'&bln='+mer+'&thn='+lele+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         //ctx.replyWithPhoto(res.data.result.image)
         ctx.reply(res.data.result.hasil); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('nomorhoki', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("nomorhoki ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/nomerhoki?no='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         //ctx.replyWithPhoto(res.data.result.image)
         ctx.reply(res.data.result.hasil); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('harijadian', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("|");
    inputArray.shift();
              message = inputArray[0];
              mer = inputArray[1];
              lele = inputArray[2];
    axios.get('https://api.vhtear.com/harijadian?tgl='+message+'&bln='+mer+'&thn='+lele+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         //ctx.replyWithPhoto(res.data.result.image)
         ctx.reply(res.data.result.hasil); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('ipwhois', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("ipwhois ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/ipwhois?ipaddr='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         //ctx.replyWithPhoto(res.data.result.image)
         ctx.reply(`IP : ${res.data.result.ip_address}\nKota : ${res.data.result.city}\ncity : ${res.data.result.region}\nCountry : ${res.data.result.country}\nPostal Code : ${res.data.result.postal_code}/nTime Zone : ${res.data.result.time_zone}\ncalling code : ${res.data.result.calling_code}`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('ascitxt', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("ascitxt ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/textscreen?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         //ctx.replyWithPhoto(res.data.result.image)
         ctx.reply(res.data.result.text); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('distance', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("|");
    inputArray.shift();
              message = inputArray[0];
              lele = inputArray[1];
    axios.get('https://api.vhtear.com/distance?from='+message+'&to='+lele+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         //ctx.replyWithPhoto(res.data.result.image)
         ctx.reply(res.data.result.data); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('infoalamat', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("infoalamat ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/infoalamat?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         //ctx.replyWithPhoto(res.data.result.image)
         ctx.reply(""+res.data.result.data+"\n\nDeskripsi : "+res.data.result.deskripsi); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('infomotor', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("infomotor ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/infomotor?merk='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         ctx.replyWithPhoto(res.data.result.image)
         ctx.reply("Title : "+res.data.result.title+"\nPrice : "+res.data.result.harga+"\nSpecification : "+res.data.result.spesifikasi+"\nDeficiencies : "+res.data.result.kekurangan+"\nAdvantage : "+res.data.result.kelebihan); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('infomobil', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("infomobil ");
    inputArray.shift();
              message = inputArray.join();
              console.log(message)
    axios.get('https://api.vhtear.com/infomobil?merk='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         ctx.replyWithPhoto(res.data.result.image)
         ctx.reply("Title : "+res.data.result.title+"\nPrice : "+res.data.result.harga+"\nSpecification : "+res.data.result.spesifikasi+"\nDeficiencies : "+res.data.result.kekurangan+"\nno memory : "+res.data.result.kelebihan); 
    }).catch(e => {
         console.log(e);
   })
})
///////////////////////////////////////
//Dahlah
//males
//pengen beli
//truk ;v
////////////////////////////////////// 


/************[ Kerang Menu ]***********/
//hahah
//dahlah
//males
//capek
/////////////////////////////////////// 
bot.command('whether', ctx => {
    let input = ctx.message.text;
    let inputArray = input.split("/");
    inputArray.shift();
              message = inputArray;
              //console.log(inputArray)
              jawaban = apakah[Math.floor(Math.random() * (apakah.length))]
              ctx.reply(`The question : ${message}\n\nAnswer : ${jawaban}`)
})
bot.command('can', ctx => {
    let input = ctx.message.text;
    let inputArray = input.split("/");
    inputArray.shift();
              message = inputArray;
              //console.log(inputArray)
              jawaban = bisakah[Math.floor(Math.random() * (bisakah.length))]
              ctx.reply(`Question : ${message}\n\nAnswer : ${jawaban}`)
})
bot.command('rate', ctx => {
    let input = ctx.message.text;
    let inputArray = input.split("/");
    inputArray.shift();
              message = inputArray;
              //console.log(inputArray)
              jawaban = persen[Math.floor(Math.random() * (persen.length))]
              ctx.reply(`Question : ${message}\n\nAnswer : ${jawaban}%`)
})
bot.command('when', ctx => {
    let input = ctx.message.text;
    let inputArray = input.split("/");
    inputArray.shift();
              message = inputArray;
              //console.log(inputArray)
              jawaban = kapankah[Math.floor(Math.random() * (kapankah.length))]
              kap = hari[Math.floor(Math.random() * (hari.length))]
              lagi = apa[Math.floor(Math.random() * (apa.length))]
              ctx.reply(`Question : ${message}\n\nAnswer : ${jawaban} ${kap} ${lagi}`)
})
/**********[ selesai ]************/



/**********[ Media Menu ]**********/
//vgsxb
//cschjbchwcb
//jvnkj
/*****************************8***/
bot.command('tiktokp', ctx => {
    let input = ctx.message.text;
    let inputArray = input.split("tiktokp ");
    inputArray.shift();
              message = inputArray;
              //console.log(inputArray)
    axios.get('https://api.vhtear.com/tiktokprofile?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res);
         ctx.replyWithPhoto(res.data.result.picture)
         ctx.reply(`
┏━━❉ *TIKTOK* ❉━━━┓
┣⊱ Name : ${res.data.result.title}
┣⊱ Username : ${message}
┣⊱ Follow : ${res.data.result.follow}
┣⊱ Follower : ${res.data.result.follower}
┣⊱ Like : ${res.data.result.like_count}
┣⊱ Post : ${res.data.result.video_post}
┣⊱ Verified : ${res.data.result.verified}
┣⊱ Bio : ${res.data.result.bio}
┣⊱ Description : ${res.data.result.description}
┗━━━━━━━━━━━━━━━━
         `);
    }).catch(e => {
         console.log(e);
   })
})
bot.command('tiktokh', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("tiktokh ");
    inputArray.shift();
              message = inputArray.join();
    axios.get(`https://api.vhtear.com/tiktokhastag?query=${message}&apikey=AW62938KK46292gJ73639h`)
    .then(res => {
        let pok = res.data.result[0]
         //console.log(res); 
         ctx.replyWithPhoto(pok.urlImage)
         ctx.reply(`
┏━━❉ *TIKTOK* ❉━━━┓
┣⊱ Name : ${pok.name}
┣⊱ Nickname : ${pok.nickName}
┣⊱ Hastag : #${message}
┣⊱ Title: ${pok.title}
┣⊱ Video : ${pok.urlVideo}
┗━━━━━━━━━━━━━━━━
         `); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('igprofile', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("igprofile ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/igprofile?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
        let igpr = res.data.result
         //console.log(res); 
         ctx.replyWithPhoto(igpr.picture)
         ctx.reply(`
┏━━❉ *INSTAGRAM* ❉━━━┓
┣⊱ Username : ${message}
┣⊱ Full name : ${igpr.full_name}
┣⊱ Follow : ${igpr.follow}
┣⊱ Follower : ${igpr.follower}
┣⊱ Total post : ${igpr.post_count}
┣⊱ Bio : ${igpr.biography}
┗━━━━━━━━━━━━━━━━
         `); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('igstory', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("igstory ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/igstory?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {

         //console.log(res); 
ctx.reply(`
┏━━❉ *INSTAGRAM* ❉━━━┓
┣⊱ Username : ${message}
┗━━━━━━━━━━━━━━━━
┣⊱ Type : ${res.data.result.story.itemlist[0].type}
┣⊱ Url : ${res.data.result.story.itemlist[0].urlDownload}
┗━━━━━━━━━━━━━━━━`);
ctx.reply(`
┏━━❉ *INSTAGRAM* ❉━━━┓
┣⊱ Username : ${message}
┗━━━━━━━━━━━━━━━━
┣⊱ Type : ${res.data.result.story.itemlist[1].type}
┣⊱ Url : ${res.data.result.story.itemlist[1].urlDownload}
┗━━━━━━━━━━━━━━━━`);
ctx.reply(`
┏━━❉ *INSTAGRAM* ❉━━━┓
┣⊱ Username : ${message}
┗━━━━━━━━━━━━━━━━
┣⊱ Type : ${res.data.result.story.itemlist[2].type}
┣⊱ Url : ${res.data.result.story.itemlist[2].urlDownload}
┗━━━━━━━━━━━━━━━━`);
ctx.reply(`
┏━━❉ *INSTAGRAM* ❉━━━┓
┣⊱ Username : ${message}
┗━━━━━━━━━━━━━━━━
┣⊱ Type : ${res.data.result.story.itemlist[3].type}
┣⊱ Url : ${res.data.result.story.itemlist[3].urlDownload}
┗━━━━━━━━━━━━━━━━`);
ctx.reply(`
┏━━❉ *INSTAGRAM* ❉━━━┓
┣⊱ Username : ${message}
┗━━━━━━━━━━━━━━━━
┣⊱ Type : ${res.data.result.story.itemlist[4].type}
┣⊱ Url : ${res.data.result.story.itemlist[4].urlDownload}
┗━━━━━━━━━━━━━━━━
`); 
    }).catch(e => {
         console.log(e);
   })
})

bot.command('igtv', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("igtv ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/igtv?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
        let ba = res.data.result
         //console.log(res); 
         ctx.replyWithPhoto(res.data.result.image)
         ctx.reply(`
┏━━❉ *INSTAGRAM* ❉━━━┓
┣⊱ Username : ${message}
┣⊱ Caption : ${ba.igTv[0].caption}
┣⊱ Video : ${ba.igTv[0].urlVideo}
┣⊱ Image : ${ba.igTv[0].urlImage}
┗━━━━━━━━━━━━━━━━
`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('ighastag', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("ighastag ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/ighastag?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let ha = res.data.result.data
         ctx.reply(`
┏━━❉ *INSTAGRAM* ❉━━━┓
┣⊱ Username : ${ha[0].owner_username}
┣⊱ Caption : ${ha[0].caption}
┣⊱ Type : ${ha[0].post.type}
┣⊱ Url : ${ha[0].post.urlDownload}
┗━━━━━━━━━━━━━━━━`); 
ctx.reply(`
┏━━❉ *INSTAGRAM* ❉━━━┓
┣⊱ Username : ${ha[1].owner_username}
┣⊱ Caption : ${ha[1].caption}
┣⊱ Type : ${ha[1].post.type}
┣⊱ Url : ${ha[1].post.urlDownload}
┗━━━━━━━━━━━━━━━━`); 
ctx.reply(`
┏━━❉ *INSTAGRAM* ❉━━━┓
┣⊱ Username : ${ha[2].owner_username}
┣⊱ Caption : ${ha[2].caption}
┣⊱ Type : ${ha[2].post.type}
┣⊱ Url : ${ha[2].post.urlDownload}
┗━━━━━━━━━━━━━━━━`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('ytsearch', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("ytsearch ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/youtube?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let lo = res.data.result
         ctx.replyWithPhoto(lo[0].image)
         ctx.reply(`
┏━━❉ *YOUTUBE* ❉━━━┓
┣⊱ search : ${message}
┗━━━━━━━━━━━━━━━━
┣⊱ Title : ${lo[0].title}
┣⊱ Channel : ${lo[0].channel}
┣⊱ Duration : ${lo[0].duration}
┣⊱ Views : ${lo[0].views}
┣⊱ Url : ${lo[0].urlyt}
┗━━━━━━━━━━━━━━━━`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('googles', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("googles ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/googlesearch?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let lo = res.data.result
         ctx.replyWithPhoto(lo[0].image)
         ctx.reply(`
┏━━❉ *GOOGLE* ❉━━━┓
┣⊱ Search : ${message}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Url : ${lo[0]}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Url : ${lo[1]}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Url : ${lo[2]}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Url : ${lo[3]}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Url : ${lo[4]}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Url : ${lo[5]}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Url : ${lo[6]}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Url : ${lo[7]}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Url : ${lo[8]}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Url : ${lo[9]}
┗━━━━━━━━━━━━━━━━`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('googleimg', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("googleimg ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/googlesearch?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let lo = res.data.result.result_search
         ctx.reply(`
┏━━❉ *GOOGLE* ❉━━━┓
┣⊱ search : ${message}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Url : ${lo[0]}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Url : ${lo[1]}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Url : ${lo[2]}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Url : ${lo[3]}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Url : ${lo[4]}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Url : ${lo[5]}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Url : ${lo[6]}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Url : ${lo[7]}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Url : ${lo[8]}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Url : ${lo[9]}
┗━━━━━━━━━━━━━━━━`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('playstore', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("playstore ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/playstore?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.reply(`
┏━━❉ *PLAYSTORE* ❉━━━┓
┣⊱ Search : ${message}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Name : ${la[0].title}
┣⊱ Developer : ${la[0].developer}
┣⊱ Description : ${la[0].description}
┣⊱ AppId : ${la[0].app_id}
┣⊱ Url : ${la[0].url}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Name : ${la[1].title}
┣⊱ Developer : ${la[1].developer}
┣⊱ Description : ${la[1].description}
┣⊱ AppId : ${la[1].app_id}
┣⊱ Url : ${la[1].url}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Name : ${la[2].title}
┣⊱ Developer : ${la[2].developer}
┣⊱ Description : ${la[2].description}
┣⊱ AppId : ${la[2].app_id}
┣⊱ Url : ${la[2].url}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Name : ${la[3].title}
┣⊱ Developer : ${la[3].developer}
┣⊱ Description : ${la[3].description}
┣⊱ AppId : ${la[3].app_id}
┣⊱ Url : ${la[3].url}
┗━━━━━━━━━━━━━━━━
`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('smuleprof', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("smuleprof ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/smuleprofile?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.replyWithPhoto(la.picture)
         ctx.reply(`
┏━━❉ *SMULE* ❉━━━┓
┣⊱ Search : ${message}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Username : ${la.username}
┣⊱ FullName : ${la.full_name}
┣⊱ Follower : ${la.follower}
┣⊱ Follow : ${la.follow}
┣⊱ Recording : ${la.recording}
┣⊱ Bio : ${la.biography}
┗━━━━━━━━━━━━━━━━
`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('twiterindo', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("twiterindo ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('http://api-melodicxt-2.herokuapp.com/api/twttrends-indo?apiKey=administrator')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         let cu = res.data.result.trends
         ctx.reply(`
┏━━❉ *TWITER* ❉━━━┓
┣⊱ As Of : ${la.as_of}
┣⊱ CreatedAt : ${la.created_at}
┣⊱ Location : ${la.locations.name}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Name : ${cu[0].name}
┣⊱ Query : ${cu[0].query}
┣⊱ Name : ${cu[0].name}
┣⊱ TweetVolume : ${cu[0].tweet_volume}
┣⊱ Url : ${cu[0].url}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Name : ${cu[1].name}
┣⊱ Query : ${cu[1].query}
┣⊱ Name : ${cu[1].name}
┣⊱ TweetVolume : ${cu[1].tweet_volume}
┣⊱ Url : ${cu[1].url}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Name : ${cu[2].name}
┣⊱ Query : ${cu[2].query}
┣⊱ Name : ${cu[2].name}
┣⊱ TweetVolume : ${cu[2].tweet_volume}
┣⊱ Url : ${cu[2].url}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Name : ${cu[3].name}
┣⊱ Query : ${cu[3].query}
┣⊱ Name : ${cu[3].name}
┣⊱ TweetVolume : ${cu[3].tweet_volume}
┣⊱ Url : ${cu[3].url}
┗━━━━━━━━━━━━━━━━
`);
    }).catch(e => {
         console.log(e);
   })
})
bot.command('trendtwit', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("trendtwit ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('http://api-melodicxt-2.herokuapp.com/api/twttrends?apiKey=administrator')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.reply(`
┏━━❉ *TWITER* ❉━━━┓
┣⊱ Country : ${la[0].country}
┣⊱ CountryCode : ${la[0].countryCode}
┣⊱ Name : ${la[0].name}
┣⊱ Url : ${la[0].url}
┣⊱ Woeid : ${la[0].woeid}
┗━━━━━━━━━━━━━━━━
┏━━❉ *TWITER* ❉━━━┓
┣⊱ Country : ${la[1].country}
┣⊱ CountryCode : ${la[1].countryCode}
┣⊱ Name : ${la[1].name}
┣⊱ Url : ${la[1].url}
┣⊱ Woeid : ${la[1].woeid}
┗━━━━━━━━━━━━━━━━
┏━━❉ *TWITER* ❉━━━┓
┣⊱ Country : ${la[2].country}
┣⊱ CountryCode : ${la[2].countryCode}
┣⊱ Name : ${la[2].name}
┣⊱ Url : ${la[2].url}
┣⊱ Woeid : ${la[2].woeid}
┗━━━━━━━━━━━━━━━━
┏━━❉ *TWITER* ❉━━━┓
┣⊱ Country : ${la[3].country}
┣⊱ CountryCode : ${la[3].countryCode}
┣⊱ Name : ${la[3].name}
┣⊱ Url : ${la[3].url}
┣⊱ Woeid : ${la[3].woeid}
┗━━━━━━━━━━━━━━━━
`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('genprim', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("genprim ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/genprim?auth='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.reply(`
┏━━❉ *RESULTS* ❉━━━┓
┣⊱ Authkey : ${la.authkey}
┣⊱ Token : ${la.token}
┣⊱ Mid : ${la.mid}
┗━━━━━━━━━━━━━━━━
`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('urlshort', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("urlshort ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/shortener?link='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.reply(`
┏━━❉ *Results* ❉━━━┓
┣⊱ Url : ${message}
┣⊱ Short : ${la.Short}
┗━━━━━━━━━━━━━━━━
`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('ssweb', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("|");
    inputArray.shift();
              message = inputArray[0];
              apaaja = inputArray[1];
    ctx.replyWithPhoto('https://api.vhtear.com/ssweb?link='+message+'&type='+apaaja+'&apikey=AW62938KK46292gJ73639h')
})


/***********[ ANIME MENU HAHH ]******** */
//lol
//dhlah
//males
//pen bobok
//////////////////////////////////////////
bot.hears('Random Nekonime', (ctx) => { 
    axios.get('https://api.vhtear.com/randomnekonime&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.replyWithPhoto(la.result); 
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Random Loli', (ctx) => { 
    axios.get('https://api.vhtear.com/randomloli&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.replyWithPhoto(la.result); 
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Random Elf', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/elf')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.replyWithPhoto(la); 
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Random Waifu', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/waifu')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.replyWithPhoto(la); 
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Random Shota', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/shota')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.replyWithPhoto(la); 
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Random Husbu', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/husbu')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.replyWithPhoto(la); 
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Random Shinobu', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/shinobu')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.replyWithPhoto(la); 
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Random Megumin', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/megumin')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.replyWithPhoto(la); 
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Random Anime Art', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/art')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.replyWithPhoto(la); 
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Random Walpaper Anime', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/wallnime')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.replyWithPhoto(la); 
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Random Wibu', (ctx) => { 
    axios.get('https://api.vhtear.com/randomwibu&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.replyWithPhoto(la.foto);
         ctx.reply(`
┏━━❉ *ANIME MENU* ❉━━━┓
┣⊱ Nama : ${la.nama}
┣⊱ Description : ${la.deskripsi}
┗━━━━━━━━━━━━━━━━
         `)
    }).catch(e => {
         console.log(e);
   })
})
bot.command('anime', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("anime ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/neonime_search?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.reply(`
┏━━❉ *ANIME* ❉━━━┓
┣⊱ Title : ${la[0].title}
┣⊱ Url : ${la[0].url}
┗━━━━━━━━━━━━━━━━
┏━━❉ *ANIME* ❉━━━┓
┣⊱ Title : ${la[1].title}
┣⊱ Url : ${la[1].url}
┗━━━━━━━━━━━━━━━━
┏━━❉ *ANIME* ❉━━━┓
┣⊱ Title : ${la[2].title}
┣⊱ Url : ${la[2].url}
┗━━━━━━━━━━━━━━━━
┏━━❉ *ANIME* ❉━━━┓
┣⊱ Title : ${la[3].title}
┣⊱ Url : ${la[3].url}
┗━━━━━━━━━━━━━━━━
┏━━❉ *ANIME* ❉━━━┓
┣⊱ Title : ${la[4].title}
┣⊱ Url : ${la[4].url}
┗━━━━━━━━━━━━━━━━
┏━━❉ *ANIME* ❉━━━┓
┣⊱ Title : ${la[5].title}
┣⊱ Url : ${la[5].url}
┗━━━━━━━━━━━━━━━━
┏━━❉ *ANIME* ❉━━━┓
┣⊱ Title : ${la[6].title}
┣⊱ Url : ${la[6].url}
┗━━━━━━━━━━━━━━━━
┏━━❉ *ANIME* ❉━━━┓
┣⊱ Title : ${la[7].title}
┣⊱ Url : ${la[7].url}
┗━━━━━━━━━━━━━━━━
`)
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Random Anime Hug', (ctx) => { 
    axios.get('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.replyWithVideo(la); 
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Random Anime Kiss', (ctx) => { 
    axios.get('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.replyWithVideo(la); 
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Random Anime Cry', (ctx) => { 
    axios.get('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.replyWithVideo(la); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('neonime', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("neonime ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/neonime_search?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.reply(`
┏━━❉ *NEONIME* ❉━━━┓
┣⊱ search : ${message}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Title : ${la[0].title}
┣⊱ Description : ${la[0].desk}
┣⊱ Link : ${la[0].link}
┗━━━━━━━━━━━━━━━━

┏━━❉ *Results* ❉━━━┓
┣⊱ Title : ${la[1].title}
┣⊱ Description : ${la[1].desk}
┣⊱ Link : ${la[1].link}
┗━━━━━━━━━━━━━━━━

┏━━❉ *Results* ❉━━━┓
┣⊱ Title : ${la[2].title}
┣⊱ Description : ${la[2].desk}
┣⊱ Link : ${la[2].link}
┗━━━━━━━━━━━━━━━━

┏━━❉ *HASIL* ❉━━━┓
┣⊱ Title : ${la[3].title}
┣⊱ Description : ${la[3].desk}
┣⊱ Link : ${la[3].link}
┗━━━━━━━━━━━━━━━━
`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('neonimed', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("neonimed ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/neonime_search?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         let bu = '360p'
         ctx.replyWithPhoto(la.image)
         ctx.replyWithVideo(la.bu[1])
         ctx.reply(`
┏━━❉ *NEONIME* ❉━━━┓
┣⊱ Search : ${message}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Title : ${la.title}
┣⊱ Quality : 360p
┣⊱ Description : ${la.desk}
┗━━━━━━━━━━━━━━━━

Currently shipping please wait a moment...
`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Ongoing Anoboy', (ctx) => { 
    axios.get('https://api.vhtear.com/ongoinganoboy&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.reply(`
┏━━❉ *ONGOING* ❉━━━┓
┣⊱ Title : ${la[0].title}
┣⊱ Url : ${la[0].ur}
┗━━━━━━━━━━━━━━━━
┏━━❉ *ONGOING* ❉━━━┓
┣⊱ Title : ${la[1].title}
┣⊱ Url : ${la[1].ur}
┗━━━━━━━━━━━━━━━━
┏━━❉ *ONGOING* ❉━━━┓
┣⊱ Title : ${la[2].title}
┣⊱ Url : ${la[2].ur}
┗━━━━━━━━━━━━━━━━
┏━━❉ *ONGOING* ❉━━━┓
┣⊱ Title : ${la[3].title}
┣⊱ Url : ${la[3].ur}
┗━━━━━━━━━━━━━━━━
┏━━❉ *ONGOING* ❉━━━┓
┣⊱ Title : ${la[4].title}
┣⊱ Url : ${la[4].ur}
┗━━━━━━━━━━━━━━━━
┏━━❉ *ONGOING* ❉━━━┓
┣⊱ Title : ${la[5].title}
┣⊱ Url : ${la[5].ur}
┗━━━━━━━━━━━━━━━━`); 
    }).catch(e => {
         console.log(e);
   })
})


/*********[ NSFW Menu ]***********/
//hivusdvj
//lvih
//haha
//tobat woy
//////////////////////////////////
bot.command('xxsearch', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("xxsearch ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/xxxsearch?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let la = res.data.result.data
         ctx.reply(`
Repent, O young man; v

┏━━❉ *XXNX* ❉━━━┓
┣⊱ search : ${message}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Title : ${la[0].title}
┣⊱ Duration : ${la[0].duration}
┣⊱ Link : ${la[0].url}
┗━━━━━━━━━━━━━━━━

┏━━❉ *Results* ❉━━━┓
┣⊱ Title : ${la[1].title}
┣⊱ Duration : ${la[1].duration}
┣⊱ Link : ${la[1].url}
┗━━━━━━━━━━━━━━━━

┏━━❉ *Results* ❉━━━┓
┣⊱ Title : ${la[2].title}
┣⊱ Duration : ${la[2].duration}
┣⊱ Link : ${la[2].url}
┗━━━━━━━━━━━━━━━━

┏━━❉ *Results* ❉━━━┓
┣⊱ Title : ${la[3].title}
┣⊱ Duration : ${la[3].duration}
┣⊱ Link : ${la[3].url}
┗━━━━━━━━━━━━━━━━

┏━━❉ *Results* ❉━━━┓
┣⊱ Title : ${la[4].title}
┣⊱ Duration : ${la[4].duration}
┣⊱ Link : ${la[4].url}
┗━━━━━━━━━━━━━━━━
`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('xxd', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("xxd ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/xxxdownload?link='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.replyWithVideo(la.urlVideo[1].videoUrl)
         ctx.reply(`
Title : ${la.title}
Quality : 480p`)
    })
})
bot.command('nekosearch', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("nekosearch ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/nekosearch?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.reply(`
Title : ${la[0].title}
Detail : ${la[0].detail}

Title : ${la[1].title}
Detail : ${la[1].detail}

Title : ${la[2].title}
Detail : ${la[2].detail}

Title : ${la[3].title}
Detail : ${la[3].detail}

Title : ${la[4].title}
Detail : ${la[4].detail}
`)
    })
})
bot.hears('Hentai List', (ctx) => { 
    axios.get('https://api.vhtear.com/nekohentai&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.reply(`
Title : ${la[0].title}
Detail : ${la[0].detail}
Url : ${la[0].url}

Title : ${la[1].title}
Detail : ${la[1].detail}
Url : ${la[1].url}

Title : ${la[2].title}
Detail : ${la[2].detail}
Url : ${la[2].url}

Title : ${la[3].title}
Detail : ${la[3].detail}
Url : ${la[3].url}

Title : ${la[4].title}
Detail : ${la[4].detail}
Url : ${la[4].url}

Title : ${la[5].title}
Detail : ${la[5].detail}
Url : ${la[5].url}

Title : ${la[6].title}
Detail : ${la[6].detail}
Url : ${la[6].url}

Title : ${la[7].title}
Detail : ${la[7].detail}
Url : ${la[7].url}

Title : ${la[8].title}
Detail : ${la[8].detail}
Url : ${la[8].url}

Title : ${la[9].title}
Detail : ${la[9].detail}
Url : ${la[9].url}

Title : ${la[10].title}
Detail : ${la[10].detail}
Url : ${la[10].url}

Title : ${la[11].title}
Detail : ${la[11].detail}
Url : ${la[11].url}

Title : ${la[12].title}
Detail : ${la[12].detail}
Url : ${la[12].url}

Title : ${la[13].title}
Detail : ${la[13].detail}
Url : ${la[13].url}

Title : ${la[14].title}
Detail : ${la[14].detail}
Url : ${la[14].url}

Title : ${la[15].title}
Detail : ${la[15].detail}
Url : ${la[15].url}

Title : ${la[16].title}
Detail : ${la[16].detail}
Url : ${la[16].url}

Title : ${la[17].title}
Detail : ${la[17].detail}
Url : ${la[17].url}

Title : ${la[18].title}
Detail : ${la[18].detail}
Url : ${la[18].url}

Title : ${la[19].title}
Detail : ${la[19].detail}
Url : ${la[19].url}
`)
    })
})
bot.hears('3D List', (ctx) => { 
    axios.get('https://api.vhtear.com/neko3d&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.reply(`
Title : ${la[0].title}
Description : ${la[0].description}
Url : ${la[0].url}

Title : ${la[1].title}
Description : ${la[1].description}
Url : ${la[1].url}

Title : ${la[2].title}
Description : ${la[2].description}
Url : ${la[2].url}

Title : ${la[3].title}
Description : ${la[3].description}
Url : ${la[3].url}

Title : ${la[4].title}
Description : ${la[4].description}
Url : ${la[4].url}

Title : ${la[5].title}
Description : ${la[5].description}
Url : ${la[5].url}

Title : ${la[6].title}
Description : ${la[6].description}
Url : ${la[6].url}
`)
    })
})
bot.hears('Someone Jav', (ctx) => { 
    axios.get('https://api.vhtear.com/nekojavcosplay&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let la = res.data.result
         ctx.reply(`
Title : ${la[0].title}
Detail : ${la[0].detail}
Url : ${la[0].url}

Title : ${la[1].title}
Detail : ${la[1].detail}
Url : ${la[1].url}

Title : ${la[2].title}
Detail : ${la[2].detail}
Url : ${la[2].url}

Title : ${la[3].title}
Detail : ${la[3].detail}
Url : ${la[3].url}

Title : ${la[4].title}
Detail : ${la[4].detail}
Url : ${la[4].url}

Title : ${la[5].title}
Detail : ${la[5].detail}
Url : ${la[5].url}

Title : ${la[6].title}
Detail : ${la[6].detail}
Url : ${la[6].url}

Title : ${la[7].title}
Detail : ${la[7].detail}
Url : ${la[7].url}

Title : ${la[8].title}
Detail : ${la[8].detail}
Url : ${la[8].url}

Title : ${la[9].title}
Detail : ${la[9].detail}
Url : ${la[9].url}
`)
    })
})
bot.command('nhentaipdf', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("nhentaipdf ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/nhentaipdfdownload?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         console.log(res.data.result); 
         let la = res.data.result
         ctx.reply(la.pdf_file); 
    }).catch(e => {
         console.log(e);
   })
})
bot.command('nhentai', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("nhentai ");
    inputArray.shift();
              message = inputArray.join();
    axios.get('https://api.vhtear.com/nhentaisearch?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res); 
         let la = res.data.result.doujins
         ctx.reply(`
┏━━❉ *N-HENTAI* ❉━━━┓
┣⊱ Search : ${message}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Id : ${la[0].id}
┣⊱ Title : ${la[0].title}
┣⊱ Language : ${la[0].lang}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Id : ${la[1].id}
┣⊱ Title : ${la[1].title}
┣⊱ Language : ${la[1].lang}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Id : ${la[2].id}
┣⊱ Title : ${la[2].title}
┣⊱ Language : ${la[2].lang}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Id : ${la[3].id}
┣⊱ Title : ${la[3].title}
┣⊱ Language : ${la[3].lang}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Id : ${la[4].id}
┣⊱ Title : ${la[4].title}
┣⊱ Language : ${la[4].lang}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Id : ${la[5].id}
┣⊱ Title : ${la[5].title}
┣⊱ Language : ${la[5].lang}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Id : ${la[6].id}
┣⊱ Title : ${la[6].title}
┣⊱ Language : ${la[6].lang}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Id : ${la[7].id}
┣⊱ Title : ${la[7].title}
┣⊱ Language : ${la[7].lang}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Id : ${la[8].id}
┣⊱ Title : ${la[8].title}
┣⊱ Language : ${la[8].lang}
┗━━━━━━━━━━━━━━━━
┏━━❉ *Results* ❉━━━┓
┣⊱ Id : ${la[9].id}
┣⊱ Title : ${la[9].title}
┣⊱ Language : ${la[9].lang}
┗━━━━━━━━━━━━━━━━
┏━━❉ *RESULTS* ❉━━━┓
┣⊱ Id : ${la[10].id}
┣⊱ Title : ${la[10].title}
┣⊱ Language : ${la[10].lang}
┗━━━━━━━━━━━━━━━━`); 
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('SEX', (ctx) => { 
    axios.get('https://api.vhtear.com/cerita_sex&apikey=AW62938KK46292gJ73639h')
    .then(res => { 
         let la = res.data.result
         ctx.replyWithPhoto(la.image)
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Random Hentai', (ctx) => { 
    axios.get('https://api.vhtear.com/randomhentai?apikey=AW62938KK46292gJ73639h')
    .then(res => { 
         let la = res.data.result
         ctx.replyWithPhoto(la.url)
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('NSFW Neko', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/nsfw/neko')
    .then(res => { 
         let la = res.data.result
         ctx.replyWithPhoto(la)
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('NSFW Waifu', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/nsfw/waifu')
    .then(res => { 
         let la = res.data.result
         ctx.replyWithPhoto(la)
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('ECCHI', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/nsfw/ecchi')
    .then(res => { 
         let la = res.data.result
         ctx.replyWithPhoto(la)
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Ahegao', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/nsfw/ahegao')
    .then(res => { 
         let la = res.data.result
         ctx.replyWithPhoto(la)
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Holo Lewd', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/nsfw/hololewd')
    .then(res => { 
         let la = res.data.result
         ctx.replyWithPhoto(la)
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Side Oppai', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/nsfw/sideoppai')
    .then(res => { 
         let la = res.data.result
         ctx.replyWithPhoto(la)
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Anime Feets', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/nsfw/animefeets')
    .then(res => { 
         let la = res.data.result
         ctx.replyWithPhoto(la)
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Anime Booty', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/nsfw/animebooty')
    .then(res => { 
         let la = res.data.result
         ctx.replyWithPhoto(la)
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Anime Thighss', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/nsfw/animethighss')
    .then(res => { 
         let la = res.data.result
         ctx.replyWithPhoto(la)
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Hentai Paradise', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/nsfw/hentaiparadise')
    .then(res => { 
         let la = res.data.result
         ctx.replyWithPhoto(la)
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Anime Arm Pits', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/nsfw/animearmpits')
    .then(res => { 
         let la = res.data.result
         ctx.replyWithPhoto(la)
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Hentai Femdom', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/nsfw/hentaifemdom')
    .then(res => { 
         let la = res.data.result
         ctx.replyWithPhoto(la)
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Lewd Anime Girls', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/nsfw/lewdanimegirls')
    .then(res => { 
         let la = res.data.result
         ctx.replyWithPhoto(la)
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Big Anime Tiddies', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/nsfw/biganimetiddies')
    .then(res => { 
         let la = res.data.result
         ctx.replyWithPhoto(la)
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Anime Belly Button', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/nsfw/animebellybutton')
    .then(res => { 
         let la = res.data.result
         ctx.replyWithPhoto(la)
    }).catch(e => {
         console.log(e);
   })
})
bot.hears('Hentai Everyone', (ctx) => { 
    axios.get('http://lolhuman.herokuapp.com/api/random/nsfw/hentai4everyone')
    .then(res => { 
         let la = res.data.result
         ctx.replyWithPhoto(la)
    }).catch(e => {
         console.log(e);
   })
})