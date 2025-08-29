import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  // encontrar todos os recados
  @Get()
  findAll() {
    return 'Retorna todos os recados';
  }

  // encontrar um recado
  // @HttpCode(HttpStatus.NOT_FOUND) // mudar o status code do http
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Retorna um recado com id: ${id}`;
  }

  // criar um novo recado
  @Post()
  create(@Body() body: any) {
    return body;
  }

  // update um novo recado // pode ser patch (partes ou todo) ou put (todo)
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      id,
      ...body
    }
  }

  // delete um novo recado
  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Deletando o recado com id: ${id}`;
  }
}
