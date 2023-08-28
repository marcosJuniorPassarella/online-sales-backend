import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CacheService } from 'src/cache/cache.service';
import { CityEntity } from './entities/city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
    private readonly cacheService: CacheService,
  ) {}

  public async getAllCitiesByStateId(
    stateId: number,
  ): Promise<Array<CityEntity>> {
    return this.cacheService.getCache(`state_${stateId}`, () =>
      this.cityRepository.find({
        where: {
          stateId: stateId,
        },
      }),
    );
  }
}
