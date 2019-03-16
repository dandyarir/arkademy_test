const hitungKembalian = (total, bayar) => {
   if(typeof total !== 'number' && typeof bayar !== 'number'){
      return "input harus berupa angka!"
   }

   let a = 50000,
       b = 20000,
       c = 10000,
       d = 5000,
       e = 2000,
       f = 1000,
       g = 500,
       ac = 0,
       bc = 0,
       cc = 0,
       dc = 0,
       ec = 0,
       fc = 0,
       gc = 0,
       kembali= {}


   let k = bayar - total

   while(k > 0){
      // console.log(k)
      if(k>=a){ //50000
         k -= a
         ac++
         kembali[a] = ac
      }else if(k>=b){ //20000
         k -= b
         bc++
         kembali[b] = bc
      }else if(k>=c){ //10000
         k -= c
         cc++
         kembali[c] = cc
      }else if(k>=d){ //5000
         k -= d
         dc++
         kembali[d] = dc
      }else if(k>=e){ //2000
         k -= e
         ec++
         kembali[e] = ec
      }else if(k>=f){ //1000
         k -= f
         fc++
         kembali[f] = fc
      }else if(k>=g){ //500
         k -= g
         gc++
         kembali[g] = gc
      }
   }
   return kembali
}
// console.log(hitungKembalian(15500,50000))