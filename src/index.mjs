import { foo as file$foo, Base as file$Base } from './file.mjs'
class Derived extends file$Base {
  [file$foo]() {
    super[file$foo]();
    console.log('Hello from Derived!');
  }
}
const instance = new Derived();
instance[file$foo]();
