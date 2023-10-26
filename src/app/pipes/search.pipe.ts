import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(recipiesArray:any[],searchString:string,propName:string): any {
  const result:any=[]
  
  if(!recipiesArray|| !searchString || !propName){
    return recipiesArray
  }
  else{
    recipiesArray.forEach((item:any)=>{
      if(item[propName].trim().toLowerCase().includes(searchString.trim().toLowerCase())){
        result.push(item)
      }
    })
    return result
  }
  }

}
