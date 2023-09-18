import { AddressEntity } from '../entities/address.entity';
import { ReturnCityDto } from 'src/city/dtos/returnCity.dto';

export class ReturnAddressDto {
  complement: string;
  numberAddress: number;
  cep: string;
  city?: ReturnCityDto;

  constructor(addressEntitiy: AddressEntity) {
    this.complement = addressEntitiy.complement;
    this.numberAddress = addressEntitiy.numberAddress;
    this.cep = addressEntitiy.cep;
    this.city = addressEntitiy.city
      ? new ReturnCityDto(addressEntitiy.city)
      : undefined;
  }
}
