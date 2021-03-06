export class Product {
  public id: number;
  public name: string;
  public price: string;
  public image: string;
  public textarea: string;
  public props: object[];

  constructor(
    id: number,
    name: string,
    price: string,
    image: string,
    textarea: string,
    props: object[]
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.textarea = textarea;
    this.props = props;
  }
}
