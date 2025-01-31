let a = 86399
let c = 0 
let d = 0
let e = 0
let r =0

c = a % 60
d = (a / 60) % 60
e = (a / 3600) % 24
r = a / 86400
console.log(r ,"kun",e ,"soat",d,"minut",c,"sekund")
