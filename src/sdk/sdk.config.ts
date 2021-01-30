export class SdkConfig {
  private static ApiUrl =
    process.env.NODE_ENN === 'production'
      ? 'http://bakery-api.000webhostapp.com'
      : 'http://localhost/bakery-api';

  static get ApiPath() {
    return this.ApiUrl;
  }
  static set ApiPath(path: string) {
    this.ApiUrl = path;
  }
}
