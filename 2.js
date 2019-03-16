const isPasswordValid = (pass) => {
   const lower = /[a-z]/g
   const upper = /[A-Z]/g
   const num = /[0-9]/g
   const spcl = /[!@#$%^&*(),_.?":;'{}|<>]/g

   if(lower.test(pass) && upper.test(pass) && num.test(pass) && spcl.test(pass) && pass.length >= 8){
      return true
   }else {
      return false
   }
}

// console.log(isPasswordValid('sapi'))