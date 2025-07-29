import { Controller, Inject, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @Post()
  createUser() {}
}
