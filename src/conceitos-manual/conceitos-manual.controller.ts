import { Controller, Get } from '@nestjs/common';

@Controller('conceitos-manual')
export class ConceitosManualController {
  @Get()
  getConceitosManual(): string {
    return 'Conceitos Manual!';
  }
}
