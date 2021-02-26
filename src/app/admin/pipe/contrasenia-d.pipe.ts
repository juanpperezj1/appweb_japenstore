import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contraseniaD'
})
export class ContraseniaDPipe implements PipeTransform {

  transform(value: String, args?: any[]): any {

    var recorrido= 5;
    var pos=0;
    var res=0;
    var result='';
    var abc='abcdefghijklmnñopqrstuvwxyz';
     value=value.toLowerCase();

    for(var i=0;i<value.length;i++){
      
        pos=abc.indexOf(value.charAt(i));
             if(pos>=0){
                res=pos-recorrido;
                if(res<0){
                res=pos-recorrido+27;        
                }
                else{
                    res=pos-recorrido;
                }
               result=result+abc.charAt((res)%abc.length);
               
            }
            else{
                result=result+value.charAt(i);
            }
            
    }

    //return null;





  }


}
