import { Injectable } from '@nestjs/common';
import { RecadoEntity } from './entities/recado.entity';

@Injectable()
export class RecadosService {
  private lastId = 1;
  private recados: RecadoEntity[] = [
    {
      id: 1,
      texto: 'Este é um recado de teste',
      de: 'Joana',
      para: 'João',
      lido: false,
      data: new Date(),
    },
  ];

  findAll() {
    return this.recados;
  }

  findOne(id: number) {
    let recadoResult = {};
    for (let i = 0; i < this.recados.length; i++) {
      if (this.recados[i].id === id) {
        recadoResult = this.recados[i];
        break;
      }
    }
    return recadoResult;
  }
}
