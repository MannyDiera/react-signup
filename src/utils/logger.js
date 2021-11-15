export default {
  landingMessage: () => {
    console.log(`
 _________        .---"""      """---.              
:______.-':      :  .--------------.  :             
| ______  |      | :                | |             
|:______B:|      | |  Hi There, I'm | |             
|:______B:|      | |  Manny.        | |             
|:______B:|      | |                | |             
|         |      | |  Nice to meet  | |             
|:_____:  |      | |  you.          | |             
|    ==   |      | :                : |             
|       O |      :  '--------------'  :             
|       o |      :'---...______...---'              
|       o |-._.-i___/'             \\._              
|'-.____o_|   '-.   '-...______...-'  \`-._          
:_________:      \`.____________________   \`-.___.-. 
                 .'.eeeeeeeeeeeeeeeeee.'.      :___:
    fsc        .'.eeeeeeeeeeeeeeeeeeeeee.'.         
              :____________________________:
    `);
    console.log('%c\nThanks for stopping by. \n\nI\'m probably at work so just email me if you\'d like to chat. \nmdiera.dvk@gmail.com', 'color:lightblue;font-size:14px;');
    console.log(`ascii art src: asciiart.eu/computers/computers`);
    console.log('%c\n\nP.S Yeap, I\'m aware of that Lottie component warning, need to get that fixed.', 'color:lightgray;font-size:12px;');
  },
  logInfo: (message) => {
    console.info(`%c ${message}`, 'color:lightblue;font-size:24px;');
  },
  logWarning: (message) => {
    console.warn(`%c ${message}`, 'color:orange;font-size:24px;');
  },
  logError: (message) => {
    console.error(`%c ${message}`, 'color:red;font-size:24px;');
  }
}
