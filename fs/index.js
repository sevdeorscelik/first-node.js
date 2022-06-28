//const fs = require('fs') --> eski versiyon

//yeni versiyon calistirabilmek icin önce package.json dosyasi olusturduk ve icine type:module ekledik. yokda calismiyor
import { appendFile, readFile, unlink, mkdir, rmdir } from 'fs';
import { writeFile } from 'fs';

//DOSYA OKUMA==========================================================


// readFile('password.txt', 'utf8', callback)
readFile('password.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        console.log('Dosya Okunamadi');
    } else {
        console.log(data);
        console.log('dosya okundu');
    }
})


// DOSYA OLUSTURMA ==========================================================


writeFile('example.txt', 'KODLUYORUZZZ', 'utf8', (err) => {
    if (err) {
        console.log(err);
        console.log('Dosya Olusturulamadi');
    } else {
        console.log('Dosya olusturuldu');
    }
});

// VERI EKLEME ==========================================================

appendFile('example.txt', '\n bu satir sonradan eklendi', 'utf8', (err) => {
    if (err) {
        console.log(err);
        console.log('data eklenemedi');
    } else {
        console.log('yeni data eklendi ');
    }
});


// DOSYA SILME ==========================================================
/*
    unlink('silinecek.txt', (err)=>{
        if (err) {
            console.log(err);
            console.log('dosya silinemedi');
        } else{
            console.log('dosya silindi');
        }
    });
*/


// KLOSÖRLER OLUSTURMA ==========================================================
//recursive:true sayesinde icice birden fazla klasörü tek fonksiyonda olusturduk
mkdir('uploads/img', { recursive: true }, (err) => {
    if (err) {
        console.log(err);
        console.log('klasörler olusturulmadi');
    } else {
        console.log('klasörler olusturuldu');
    }
});


// KLOSÖRLER SILMEK ==========================================================
/*
rmdir('silinecek.txt
', { recursive: true }, (err) => {
    if (err) {
        console.log(err);
        console.log('klasörler silinemedi');
    } else {
        console.log('klasörler silindi');
    }
});
*/