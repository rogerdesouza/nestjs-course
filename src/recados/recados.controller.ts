import { Controller, Get, Param } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  // encontrar todos os recados
  @Get()
  findAll() {
    return 'Retorna todos os recados';
  }

  // encontrar um recado
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Retorna um recado com id: ${id}`;
  }
}
