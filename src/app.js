console.log("Merhaba JavaScript")

let dolarDun = 9.20

let dolarBugun = 9.30

{
    let dolarDun=9.10
}
console.log(dolarDun)

const euroDun = 11.2

console.log(euroDun)

//array
//camelCasing tarzı isimlendirme kullan değişkenlere isim verirken
//PascalCasing
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)