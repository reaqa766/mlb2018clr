import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

transform(value: any, starts?: any, length?: any): any {
    let aux = [];
    for(let i = starts; i < starts+length; i++){
    aux.push(value[i]);
    }
    return aux;

}

}
