export class Kitten {
  public name: string;
  public breed: string;
  public birth: Date;
  public picture: string;

  constructor(input: Kitten) {
    Object.assign(this, input);
  }

}
