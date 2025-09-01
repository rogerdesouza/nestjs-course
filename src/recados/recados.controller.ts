import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  // encontrar todos os recados
  @Get()
  findAll(@Query() pagination: any) {
    const { limit = 10, offset = 0 }: any = pagination;
    return `Retorna todos os recados. Limit=${limit} e Offset=${offset}.`;
  }

  // encontrar um recado
  // @HttpCode(HttpStatus.NOT_FOUND) // mudar o status code do http
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Retorna um recado com id: ${id}.`;
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
      ...body,
    };
  }

  // delete um novo recado
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Deletando o recado com id: ${id}.`;
  }
}
