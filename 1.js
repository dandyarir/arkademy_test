const biodata = () => {
   return {
      name: "Dandy Ari Ramadhan",
      address: "Jln. Pandega Marga 1/5 Caturtunggal",
      hobbies: ['sport','traveling','photography','solving puzzle','membaca'],
      is_married: false,
      school:
         {
            highSchool: "SMAN 1 Rogojampi",
            university: "Universitas Gadjah Mada"
         },
      skills: [
         {
            no: 1,
            name: 'C++',
            level: 'intermediete'
         },
         {
            no: 2,
            name: 'PHP',
            level: 'intermediete'
         },
         {
            no: 3,
            name: 'Javascipt',
            level: 'intermediete'
         },
         {
            no: 4,
            name: 'Git/Version Control',
            level: 'intermediete'
         },
                  {
            no: 5,
            name: 'Golang',
            level: 'Beginner'
         },
      ]
   }
}

// console.log(biodata())