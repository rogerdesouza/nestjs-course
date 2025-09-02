import { Injectable, NotFoundException } from '@nestjs/common';
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

  throwNotFoundError() {
    // throw new HttpException('Recado não encontrado', HttpStatus.NOT_FOUND);
    throw new NotFoundException('Recado não encontrado');
  }

  findAll() {
    return this.recados;
  }

  findOne(id: number) {
    const recado = this.recados.find((e) => e.id === id);
    if (recado) return recado;
    this.throwNotFoundError();
  }

  create(body: any) {
    this.lastId++;
    const newRecado = {
      id: this.lastId,
      ...body,
    };
    this.recados.push(newRecado);
    return newRecado;
  }

  update(id: number, body: any) {
    const recadoExistenteIndex = this.recados.findIndex(
      (item) => item.id === +id,
    );

    if (recadoExistenteIndex < 0) this.throwNotFoundError();

    const recadoExistente = this.recados[recadoExistenteIndex];
    this.recados[recadoExistenteIndex] = {
      ...recadoExistente,
      ...body,
    };

    return this.recados[recadoExistenteIndex];
  }

  remove(id: string) {
    // existe um cast para transformar uma string em number ----- exemplo +id
    const recadoExistenteIndex = this.recados.findIndex(
      (item) => item.id === +id,
    );

    if (recadoExistenteIndex < 0) this.throwNotFoundError();

    const recadoRemovido = this.recados[recadoExistenteIndex];

    this.recados.splice(recadoExistenteIndex, 1);

    return recadoRemovido;
  }
}
