import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(home: [], searchkey: string, propName: string): any[] {
    if (!home || searchkey == "" || propName == "") {
      return home;
    }

    const result: any = [] //new array
    home.forEach((home: any) => {
      if (home[propName].trim().toLowerCase().includes(searchkey.toLowerCase())) {
        result.push(home);
      }
    })
    return result;
  }

}
