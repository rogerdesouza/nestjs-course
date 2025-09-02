import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { RecadosService } from './recados.service';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @HttpCode(HttpStatus.OK) // mudar o status code do http
  @Get()
  findAll(@Query() pagination: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars
    const { limit = 10, offset = 0 }: any = pagination;
    return this.recadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const recado = this.recadosService.findOne(parseInt(id));
    return recado;
  }

  @Post()
  create(@Body() body: any) {
    return this.recadosService.create(body);
  }

  // update um novo recado - pode ser patch (partes ou todo) ou put (todo)
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.recadosService.update(parseInt(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recadosService.remove(id);
  }
}
