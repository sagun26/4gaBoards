class LoginPage {
  constructor() {
    this.dashboardSelector = "div[title='Dashboard']";
    this.emailSelector = "[name='emailOrUsername']";
    this.paasswordSelector = "[name='password']";
    this.baseurl = 'http://localhost:3000/';
    this.loginurl = 'http://localhost:3000/login';
    this.loginBtnSelector = "button', { name: 'Log in' }";
  }
  async navigateToLoginPage(page) {
    await page.goto(this.Loginurl);
  }
  async login(inputdata) {
    await page.fill(this.emailSelector, loginCredentails[0].email);
    await page.fill(this.paasswordSelector, loginCredentails[0].password);
    await page.click(this.loginBtnSelector);
  }
}
module.exports = LoginPage;
