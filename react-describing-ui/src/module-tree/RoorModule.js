import { greetA } from './ModuleA.js';
import { greetB } from './ModuleB.js';
import { greetC } from './ModuleC.js';

export function rootGreet() {
  console.log('Hello from RootModule');
  greetA();
  greetB();
  greetC();
}
