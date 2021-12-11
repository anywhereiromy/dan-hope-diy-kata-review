const joinNames = namesObj => {
   const names = namesObj.map(nameObject => nameObject.name ) 
    if(names.length > 1) {
      const lastName = names.pop()
     return (names.join(', ')+' & '+lastName)
     }
     return names[0];
   };

module.exports = joinNames;
