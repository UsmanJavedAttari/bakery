export class SdkConfig {
  private static ApiUrl = 'http://bakery-api.000webhostapp.com';

  static get ApiPath() {
    return this.ApiUrl;
  }
  static set ApiPath(path: string) {
    this.ApiUrl = path;
  }
}
