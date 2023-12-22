import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

    public variables = ['One','Two','County', 'Three', 'Zebra', 'XiOn'];
    public variables2 = [{ id: 0, name: 'One' }, { id: 1, name: 'Two' }];

    public filteredList1 = this.variables.slice();
    public filteredList2 = this.variables.slice();
    public filteredList3 = this.variables.slice();
    public filteredList4 = this.variables.slice();
    public filteredList5 = this.variables2.slice();
    
}
