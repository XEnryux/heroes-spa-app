import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher = "")=>{
   const validPublishers = ['DC Comics','Marvel Comics','']
   if (!validPublishers.includes(publisher)) {
    throw new error(`${publisher} is not a valid publisher`)
    
   }else if (publisher === '') {
      return heroes
      
   }else{   return heroes.filter(heroe=> heroe.publisher===publisher)}

}