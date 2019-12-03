import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-test',
  templateUrl: './json-test.component.html',
  styleUrls: ['./json-test.component.css']
})


export class JsonTestComponent implements OnInit {

  constructor() { }

   data=[{
    "id": 112,
    "name": "Mahesh Dhotre",
    "country":"India",
    "salary":40000
},
{
    "id": 132,
    "name": "Prajakta Pawar",
    "country":"India",
    "salary":12000
},
{
    "id": 111,
    "name": "Pranita",
    "country":"Uk",
    "salary":15000
}];

 dataid : number;
 name = "";
 country = "";
 salary : number;
 result:any;
 

  findById(id){
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].id == id || this.data[i].name == id || this.data[i].country == id || this.data[i].salary == id) {
        
        console.log(this.data[i].name);
        this.dataid = this.data[i].id;
          this.name = this.data[i].name; 
          this.country = this.data[i].country;
          this.salary = this.data[i].salary;
        
      }
      
  }

  }

  showdata(id){
    for (var i = 0; i < this.data.length; i++) {
      this.dataid = this.data[i].id;
      this.name = this.data[i].name; 
      this.country = this.data[i].country;
      this.salary = this.data[i].salary;

    }
  }
  ngOnChanges() {

  }

  ngOnInit() {
    
  }

}
