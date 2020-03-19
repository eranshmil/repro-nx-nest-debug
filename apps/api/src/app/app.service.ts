import { Injectable } from '@nestjs/common';
import { Message } from '@repro-nx-nest-debug/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
