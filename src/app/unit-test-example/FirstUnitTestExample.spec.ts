import { Addition } from './FirstUnitTestExample';
describe('Test Addition', () => {
  it('Testing Addtion of two number',()=>{
   expect(Addition(1,2)).toBe(3);
  });
});
