# NodeJS-Haber-Sitesi
NodeJS ve AngularJS 2 teknolojileri kullanarak basit CRUD işlemlerinin gerçekleştirildiği bir haber sitesi projesi

# NodeJS Dosya Kurulumları
İndirilen dosyanın içerisinde konsol ekranı açılarak npm install komutu çalıştırılır. Bu kod çalıştıktan sonra node_modules klasörü eklenir.

# AngularJS Dosya Kurulumları
Angular dosyalarının kurulabilmesi için angular-cli paketinin npm üzerinde yüklü olması gerekir. Yüklü değil ise npm install angular-cli komutu konsolda çalıştırıldıktan sonra angular paketleri yüklenir.

Daha sonra angular projesini oluşturmak için ng g angular-src(bu kısım opsiyonel angular dosyalarına ne isim vermek istiyorsanız onu yazabilirsiniz). Bu komut çalıştırıldıktan sonra angular-src isimli klasör oluşturulur ve angular dosyaları yüklenir. Yüklenmez ise angular-src klasörü içerisinde npm install komutunu çalıştırabilirsiniz.

Bu komuttan sonra repo üzerinden indirdiğiniz app klasörünü angular-src/src/app klasörü ile değiştirin.

Projenin front-end kısmının ayağa kaldırılması için angular-src klasörü içerisinde ng serve komutu çalıştırılır.
Projenin back-end kısmının ayağa kaldırılması için node app.js komutu çalıştırılır.

Proje verilerin saklanması için mongodb kullanmaktadır. Projenin düzgün bir şekilde çalışması için veritabanının çalışıyor olması gerekir.
