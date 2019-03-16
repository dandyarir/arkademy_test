const drawImage = (p) => {
   if(typeof p !== 'number'){
      return "input harus angka!"
   }
   var arr = ''

   for(var i = 0; i < p; i++){
      for(var k = 0; k < p; k++ ){


         if(k === 0 && i === 0 || k === p-1 && i === 0 || k === 0 && i === p-1 || k === p-1 && i === p-1){
            arr += '* '
         }else if(i === Math.floor(p/2) || k === Math.floor(p/2)) {
            arr += '* '
         }else{
            arr += '= '
         }
      }

      arr += '\n'
   }
   return arr
}
// console.log(drawImage(5))