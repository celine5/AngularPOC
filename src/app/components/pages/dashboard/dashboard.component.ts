import { Component} from '@angular/core';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  { 
  
 public chart:any;
 public dchart:any;


 createChart(){
  
  this.chart = new Chart("MyChart", {
    type: 'line', //this denotes tha type of chart

    data: {// values on X-Axis
      labels: ['Jan', 'Feb', 'Mar','Apr',
               'May', 'Jun', 'Jul','Aug', ], 
       datasets: [
        {
          label: "Clients",
          data: ['467','576', '572', '79', '92',
               '574', '573', '576'],
          backgroundColor: 'blue',
          tension:0.5,
          borderColor:'gray',
        },
        
      ]
    },
    options: {
      aspectRatio:2.5
    }
    
  });
}

dChart(){
  
  this.dchart = new Chart("MydChart", {
    type: 'doughnut', //this denotes tha type of chart

    data: {
     
       datasets: [
        {
          label: "Clients",
          data: ['467','576', '572', '79', '92',
               '574', '573'],
          backgroundColor: ['rgba(255,0,25,0.7)',
          'rgba(0,255,25,0.7)',
          'rgba(0,25,255,0.7)',
          'rgba(67,25,255,0.7)',
          'rgba(255,0,25,0.7)',
          'rgba(255,0,25,0.7)',
        ]
    
        },
        
      ]
    },
    options: {
      aspectRatio:2.5
    }
    
  });
}

ngOnInit(): void {
  this.createChart();
  this.dChart();
}

}
