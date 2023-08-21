import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get('/:stateId')
  public async getAllCitiesByStateId(
    @Param('stateId') stateId: number,
  ): Promise<Array<CityEntity>> {
    return this.cityService.getAllCitiesByStateId(stateId);
  }
}
