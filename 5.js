/**
 * faktorial biasa
 * @param  {Number} val [nilai n faktorial]
 * @return {Number}     [hasil faktorial]
 */
const faktorial = (val) => {
   var k = 1
   for(var i=val;i>0;i--){
      k *= i
   }
   return k
}

/**
 * faktorial khusus untuk nilai yg besar, mencegah infinity atau
 * beban proses. karena tidak harus sampai [val x val-1 x .... x 1]
 * @param  {Number} val nilai n faktorial
 * @param  {Number} nk  nilai (n-k) faktorial
 * @return {Number}     hasil faktorial
 */
const faktorials = (val,nk) => {
   var k = 1
   for(var i=val;i>nk;i--){
      k *= i
   }
   return k
}

/**
 * kombinasi (n!/(n-k)!k!)
 * @param  {Number} val [nilai n kombinasi]
 * @return {Number}     [hasil kombinasi]
 */
const comb = (val) => {
   if(val === 1){
      return 0
   }

   var n = val,
       nk= n-2
   if(nk > 2) {
      return faktorials(n,nk)/faktorial(2)
   }
   return faktorial(val)/(faktorial(val-2)*faktorial(2))
}

// console.log(comb(1))