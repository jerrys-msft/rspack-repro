export const foo = 'methodName';
export class Base {
  [foo]() {
    console.log('Hello from Base!');
  }
}
