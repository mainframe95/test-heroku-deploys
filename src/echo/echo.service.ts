import { Injectable } from '@nestjs/common';
import { Context, Telegraf } from 'telegraf';

@Injectable()
export class EchoService {

  constructor(
    // private readonly bot: Telegraf//<Context>,
  ){}
  echo(text: string): string {
    return `Echo: ${text}`;
  }
}
