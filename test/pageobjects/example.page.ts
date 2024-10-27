//example.page.ts
class ExampleClass{
 get  searchInput() { return  $("input[name='q']")}
 get searchButton() {return $('input[name="btnK"]')}
 get firstResult() {return $('(//h3)[1]')}
}
export default new ExampleClass()