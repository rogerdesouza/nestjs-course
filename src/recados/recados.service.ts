import { Injectable, NotFoundException } from '@nestjs/common';
import { RecadoEntity } from './entities/recado.entity';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';

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
    const recado = this.recados.find(e => e.id === id);
    if (recado) return recado;
    this.throwNotFoundError();
  }

  create(createRecadoDto: CreateRecadoDto) {
    this.lastId++;
    const novoRecado = {
      id: this.lastId,
      lido: false,
      data: new Date(),
      ...createRecadoDto,
    };
    this.recados.push(novoRecado);
    return novoRecado;
  }

  update(id: number, updateRecadoDto: UpdateRecadoDto) {
    const recadoExistenteIndex = this.recados.findIndex(
      item => item.id === +id,
    );

    if (recadoExistenteIndex < 0) this.throwNotFoundError();

    const recadoExistente = this.recados[recadoExistenteIndex];
    this.recados[recadoExistenteIndex] = {
      ...recadoExistente,
      ...updateRecadoDto,
    };

    return this.recados[recadoExistenteIndex];
  }

  remove(id: string) {
    // existe um cast para transformar uma string em number ----- exemplo +id
    const recadoExistenteIndex = this.recados.findIndex(
      item => item.id === +id,
    );

    if (recadoExistenteIndex < 0) this.throwNotFoundError();

    const recadoRemovido = this.recados[recadoExistenteIndex];

    this.recados.splice(recadoExistenteIndex, 1);

    return recadoRemovido;
  }
}
