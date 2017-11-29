var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

switch (myArgs[0]) {
  case 'whatever':
    console.log(myArgs[1], 'thing');
    break;
  default:
    console.log('hey there');
}
