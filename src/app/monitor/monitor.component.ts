import { Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';
import Reading from 'src/reading/reading.class';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent {

  @Input() readings: Reading[] = new Array<Reading>();

  ctx: any;
  chartConfig: any;
  chart: any;

  systolicBorderColor = getComputedStyle(document.documentElement).getPropertyValue('--c-systolic-border');
  systolicBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--c-systolic-background');
  diastolicBorderColor = getComputedStyle(document.documentElement).getPropertyValue('--c-diastolic-border');
  diastolicBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--c-diastolic-background');
  pulseBorderColor = getComputedStyle(document.documentElement).getPropertyValue('--c-pulse-border');
  pulseBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--c-pulse-background');

  constructor() {
    this.configChart();
  }

  ngOnInit() {
    this.ctx = document.getElementById('monitor');
    this.createChart();
  }

  ngAfterViewInit() {
    this.updateChart();
  }

  ngOnChanges() {
    this.updateChart();
  }

configChart() {
  this.chartConfig = {
    type: 'line',
    data: {
      labels: this.getDateTimes(),
      datasets: [{
        label: 'Systolic',
        data: this.readings.map(reading => reading.systolic),
        borderColor: this.systolicBorderColor,
        backgroundColor: this.systolicBackgroundColor,
        tension: 0.1
      },
      {
        label: 'Diastolic',
        data: this.readings.map(reading => reading.diastolic),
        borderColor: this.diastolicBorderColor,
        backgroundColor: this.diastolicBackgroundColor,
        tension: 0.1
      },
      {
        label: 'Pulse',
        data: this.readings.map(reading => reading.pulse),
        borderColor: this.pulseBorderColor,
        backgroundColor: this.pulseBackgroundColor,
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Blood Pressure Monitor'
        }
      },
      scales: {
        x: {
          ticks: {
            maxRotation: 70,
            minRotation: 0
          }
        }
      },
    }
  }
}
    
  createChart() {
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart(this.ctx, this.chartConfig);
  }
  
  updateChart() {
    if (this.chart) {
      this.chart.data.labels = this.getDateTimes();
      this.chart.data.datasets[0].data = this.readings.map(reading => reading.systolic);
      this.chart.data.datasets[1].data = this.readings.map(reading => reading.diastolic);
      this.chart.data.datasets[2].data = this.readings.map(reading => reading.pulse);
      this.chart.update();
    }
  }

  getDateTimes() {
    const dateTimes = new Array<string>();
    this.readings.forEach(reading => {
      const dateTime = reading.date + ' ' + reading.time;
      dateTimes.push(dateTime);
    });
    return dateTimes;
  }
}
