import { Component, signal } from '@angular/core';
import {CounterComponent} from '../../../shared/components/counter/counter.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration = signal(1000);
  message= signal('hola')

  changeDuration(event:Event){
    const Input = event.target as HTMLInputElement;
    this.duration.set(Input.valueAsNumber);
  }

  changeMessage(event:Event){
    const Input = event.target as HTMLInputElement;
    this.message.set(Input.value);
  }
}
