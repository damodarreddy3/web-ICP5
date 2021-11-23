import { Component, OnInit,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }
  ngOnInit() {}
  // var declaration
  estimatedDate = new Date("january 01, 2022 00:00:00").getTime();
  rollingDate:any;
// counter logic
    fun = setInterval(() => {
      let todaysDate = new Date().getTime();
      let timediff = this.estimatedDate - todaysDate;
      let month= Math.floor(timediff / (1000 * 60 * 60 * 24*30));
      let day= Math.floor(timediff % (1000 * 60 * 60 * 24 *30)/(1000 * 60 * 60 *24));
      let hour= Math.floor((timediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let min= Math.floor((timediff % (1000 * 60 * 60)) / (1000 * 60));
      let sec= Math.floor((timediff % (1000 * 60)) / (1000));
      this.rollingDate = month + " M - " + day + "D - " + hour + "HH - " + min + "mm -" + sec + "ss";
// if condition to verify date
      if(timediff < 0){
        clearInterval(this.fun);
        this.rollingDate = "Final Day has arrived";
      }
    })

}