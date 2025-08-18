import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Controller()
export class UsersController {
  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() data: CreateUserDto) {
    console.log({ userMicroserviceData: data });
    return data;
  }

  @EventPattern('paymentsCreated')
  paymentCreated(@Payload() data: any) {
    console.log(data);
  }
}
