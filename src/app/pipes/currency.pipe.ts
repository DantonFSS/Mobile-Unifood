import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyBrl',
})
export class CurrencyBrlPipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || value === undefined) return 'R$ 0,00';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }
}
