import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  id: 123,
  name: 'Mockname',
  email: 'emailmock@email.com',
  phone: '54934958',
  cpf: '78594495',
  password: 'largePassword',
  typeUser: UserType.User,
  createdAt: new Date(),
  updatedAt: new Date(),
};
