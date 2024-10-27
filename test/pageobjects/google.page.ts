class GooglePage {
 open (){
     browser.url('https://www.google.com')
 };

 get body() {
     return $('body');
 };

 get googleSearchInputBox() {
     return $('input[name="q"]');
 };
}

export default new GooglePage();