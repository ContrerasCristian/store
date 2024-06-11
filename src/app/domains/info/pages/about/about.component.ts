import { Component, signal } from '@angular/core';
import {CounterComponent} from '../../../shared/components/counter/counter.component';
import {HighlightDirective} from '../../../shared/directives/highlight.directive';
import { HeaderComponent } from '../../../shared/components/header/header.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, HighlightDirective, HeaderComponent],
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
