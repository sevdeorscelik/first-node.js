import { writeFile, readFile, appendFile, unlink } from 'fs';


//dosya olustur ve icine yaz
writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Dosya olusturuldu');
    }
});



//oku
readFile('employees.json', 'utf8', (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Dosya okundu');
        console.log(data);
    }
});



//veriyi güncelle
appendFile('employees.json', '\n bu satir sonradan eklendi', 'utf8', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('data eklendi ');
    }
});



//dosyayi sil
unlink('employees.json', (err)=>{
    if (err) {
        console.log(err);
    } else{
        console.log('dosya silindi');
    }
});
