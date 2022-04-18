import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/services/Flight/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent implements OnInit {
  flights: any[];
  constructor(private flightService: FlightService, private router: Router) {
    this.flights = [];
  }

  ngOnInit(): void {
    this.flightService
      .getFetchedFlights()
      .subscribe((flightsData) => (this.flights = flightsData));
  }

  displayFlight(flight: any) {
    console.log(flight);
  }

  showDetails(flight: any) {
    console.log('Show Details: ', flight);
    this.flightService.setSelectedFlight(flight);
    this.router.navigate(['/flight-details']);
  }
}
