import { foo, Base } from './file.mjs'
class Derived extends Base {
  [foo]() {
    super[foo]();
    console.log('Hello from Derived!');
  }
}
const instance = new Derived();
instance[foo]();
