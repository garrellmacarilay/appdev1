import { greetD } from './ModuleD.js';

export function greetC() {
  console.log('Hello from ModuleC');
  greetD();
}
