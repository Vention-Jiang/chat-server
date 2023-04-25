import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return 'hello, this is VenChatApi';
  }

  async chat(prompt: string, network: boolean, userId: string) {
    const data = {
      network,
      prompt,
      stream: false,
      system: '',
      userId,
      withoutContext: false,
    };
    const observable = this.httpService.post(
      'https://api.aichatos.cloud/api/generateStream',
      data,
    );
    const response = await lastValueFrom(observable);
    return response.data;
  }
}
