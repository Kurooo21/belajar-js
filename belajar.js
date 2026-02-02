// alert("Halo bg");
// console
// console.log("Hello World");
// prompt
// prompt("Masukkan nama Anda");


//variable
// console.log("=== Variable ===");
// let nama = "Andi";
// var nama = "Andi";
// const nama = "Andi";

//PERkONDISIAN
// if (true) {
//     console.log("Benar");
// } else {
//     console.log("Salah");
// }

// switch (new Date().getDay()) {
//     case 0:
//         console.log("Minggu");
//         break;
//     case 1:
//         console.log("Senin");
//         break;
//     case 2:
//         console.log("Selasa");
//         break;
// }

// manipulasi DOM
//  document.title = "Belajar JavaScript";
//  const body = document.body;

//  const h1 = document.createElement('h1');
//     h1.textContent = "Halo, ini judul utama!";

// const p = document.createElement('p');
//     p.innerHTML = "<marquee> Ini adalah paragraf pertama di halaman ini </marquee>";

// const b = document.createElement('b');
//     b.textContent = "Teks ini dicetak tebal.";

// //<marquee> </maequee> >membuat teks berjalan hanaya bisa digunaklan di ineerHTML
// body.append(h1);
// body.append(p);
// body.append(b);

// //================\\
// document.title = "Belajar JavaScript";
// const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2');
// // styling button 1
// btn1.style.border ="none";
// btn1.style.padding ="10px 20px";
// btn1.style.backgroundColor ="gray";
// btn1.style.color ="white";
// btn1.style.cursor ="pointer";
// btn1.style.marginRight ="10px";
// btn1.style.borderRadius ="5px";

//query selector
// const btn = document.querySelector('Button');
// console.log(btn);

//event trigger
// function GantiWarna() {
//     console .log ("halo bg");
// } 

// function GantiWarna() {
//     console .log ("halo bg");
//     alert ("halo bg");
// } 

// function GantiWarna() {
//     btn2.style.backgroundColor = "white";
// }

// //mouse event
// function UbahTeks() {
//     // console.log("Teks tombol diubah");
//     btn1.textContent = "Teks telah diubah!";   
// }

// function KembalikanTeks() {
//     btn1.textContent = "Tombol 1";   
// }

// // tugas tambahan
//  function MunculTeks() {
//     const newTeks = document.createElement('p');
//     newTeks.textContent = "Halo, selamat datang di halaman ini!";
//     document.body.appendChild(newTeks);
// }
// function GantiWarnaTeks() {
//     const paragraf = document.querySelector('p');
//     paragraf.style.color = "blue";
// }
//INI ADALAH TUGAS JIKA CURSOR DIARAHKAN KE TOMBOL AKAN MEMUNCULKAN SEBBUAH TEKS JIKA CURSOR DIKELUARKAN TEKS AKAN BERUBAH WARNA

//ARRAY\\
// const arrayBuah = ["apel", "jeruk", "mangga", "pisang"];

// const jeruk = arrayBuah.includes("jeruk"); //includes untuk mengecek ada tidaknya sebuah nilai di dalam array
// const PosisiJeruk = arrayBuah.indexOf("jeruk"); //indexOf untuk mengetahui posisi index sebuah nilai di dalam array

// if (jeruk) {
//     console.log(`buah jeruk ada di dalam array pada posisi index ke-${PosisiJeruk}`);
//     const before = PosisiJeruk - 1;// mencari posisi sebelum jeruk
//     const after = PosisiJeruk + 1;// mencari posisi setelah jeruk
//     const buahBefore = arrayBuah[before];// mendapatkan nilai sebelum jeruk
//     const buahAfter = arrayBuah[after];// mendapatkan nilai setelah jeruk
//     console.log(`buah sebelum jeruk adalah ${buahBefore}`);
//     console.log(`buah setelah jeruk adalah ${buahAfter}`);
//     const buahawal = arrayBuah .shift(); //shift untuk menghapus nilai pertama di dalam array
//     console.log(`buah yang dihapus dari awal adalah ${buahawal}`);
//     const buahakhir = arrayBuah .pop(); //pop untuk menghapus nilai terakhir di dalam array
//     console.log(`buah yang dihapus dari akhir adalah ${buahakhir}`);

// } else {
//     console.log("buah jeruk tidak ada di dalam array");
// }