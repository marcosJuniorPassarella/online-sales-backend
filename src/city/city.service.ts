import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Repository } from 'typeorm';
import { CityEntity } from './entities/city.entity';
import { Cache } from 'cache-manager';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  public async getAllCitiesByStateId(
    stateId: number,
  ): Promise<Array<CityEntity>> {
    const citiesCache: Array<CityEntity> = await this.cacheManager.get(
      `state_${stateId}`,
    );

    if (citiesCache) {
      return citiesCache;
    }

    const cities = await this.cityRepository.find({
      where: {
        stateId: stateId,
      },
    });
    await this.cacheManager.set(`state_${stateId}`, cities);

    return cities;
  }
}
