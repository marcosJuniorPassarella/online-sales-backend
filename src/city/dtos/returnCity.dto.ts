import { StateEntity } from 'src/state/entities/state.entity';
import { CityEntity } from '../entities/city.entity';
import { ReturnStateDto } from 'src/state/dto/returnState.dto';

export class ReturnCityDto {
  name: string;
  state?: ReturnStateDto;

  constructor(city: CityEntity) {
    this.name = city.name;
    this.state = city?.state ? new ReturnStateDto(city.state) : undefined;
  }
}
