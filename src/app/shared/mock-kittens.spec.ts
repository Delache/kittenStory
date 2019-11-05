import { MockKittens } from './mock-kittens';

describe('MockKittens', () => {
  it('should create an instance', () => {
    expect(new MockKittens()).toBeTruthy();
  });
});
