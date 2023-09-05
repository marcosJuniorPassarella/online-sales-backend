import { IsInt, IsOptional, IsString } from 'class-validator';
import { AddressEntity } from '../entities/address.entity';

export class ReturnAddressDto {
  complement: string;
  numberAddress: number;
  cep: string;

  constructor(addressEntitiy: AddressEntity) {
    this.complement = addressEntitiy.complement;
    this.numberAddress = addressEntitiy.numberAddress;
    this.cep = addressEntitiy.cep;
  }
}
