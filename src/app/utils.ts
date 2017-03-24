export class Utils{

  public static generateUUID() :string {
    return (Math.floor(Math.random()*90000) + 10000) + '';
  };

}
