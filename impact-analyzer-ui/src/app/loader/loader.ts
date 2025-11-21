import { Component } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { Loader } from '../services/loader';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, AsyncPipe],  
  templateUrl: './loader.html',
  styleUrls: ['./loader.css']
})
export class LoaderComponent {
  constructor(public loader: Loader) {}
}