import {Client, Message} from "discord.js";
import {inject, injectable} from "inversify";
import {TYPES} from "./types";
import {MessageResponder} from "./services/message-responder";
<<<<<<< HEAD
=======
import { logger } from "./setup.logger";
>>>>>>> 670541e1e9095dcfc8c41d2b40233ac1830c88fe

@injectable()
export class Bot {
  private client: Client;
  private readonly token: string;
  private messageResponder: MessageResponder;

  constructor(
    @inject(TYPES.Client) client: Client,
    @inject(TYPES.Token) token: string,
    @inject(TYPES.MessageResponder) messageResponder: MessageResponder) {
    this.client = client;
    this.token = token;
    this.messageResponder = messageResponder;
  }

  public listen(): Promise<string> {
    this.client.on('message', (message: Message) => {
      if (message.author.bot) {
<<<<<<< HEAD
        console.log('Ignoring bot message!')
        return;
      }

      console.log("Message received! Contents: ", message.content);

      this.messageResponder.handle(message).then(() => {
        console.log("Response sent!");
      }).catch(() => {
        console.log("Response not sent.")
=======
        logger.warn('Ignoring bot message!')
        return;
      }

      logger.info("Message received! Contents: ", message.content);

      this.messageResponder.handle(message).then(() => {
        logger.info("Response sent!");
      }).catch(() => {
        logger.error("Response not sent.")
>>>>>>> 670541e1e9095dcfc8c41d2b40233ac1830c88fe
      })
    });

    return this.client.login(this.token);
  }
}