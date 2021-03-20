require('dotenv').config(); // Recommended way of loading dotenv
import container from "./inversify.config";
import {TYPES} from "./types";
import {Bot} from "./bot";
<<<<<<< HEAD
let bot = container.get<Bot>(TYPES.Bot);
bot.listen().then(() => {
  console.log('Logged in!')
}).catch((error) => {
  console.log('Oh no! ', error)
=======
import {logger} from "./setup.logger"


let bot = container.get<Bot>(TYPES.Bot);

bot.listen().then(() => {
  logger.info('Logged in!')
}).catch((error) => {
  logger.error('Oh no! ', error)
>>>>>>> 670541e1e9095dcfc8c41d2b40233ac1830c88fe
});