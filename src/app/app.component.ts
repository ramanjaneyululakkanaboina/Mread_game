import { Component } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mreader';
  choosen:string=' '
  result:string = ' '
  choosenumber(event:any){
          if (event.target.value<=10){
            this.choosen="You have choosen :" +event.target.value
       
           if (event.target.value==1){
               this.result="Focus on the present moment: Instead of dwelling on the past or worrying about the future, concentrate on the here and now. Mindfulness practices like meditation can help you cultivate this awareness."
            }
           else if (event.target.value==2){
              this.result="Embrace challenges as opportunities for growth: View setbacks as chances to learn and develop resilience. Every obstacle you overcome makes you stronger."
            }
           else if (event.target.value==3){
              this.result="Practice gratitude: Regularly acknowledging the good things in your life, big or small, can shift your perspective and increase happiness."
            }
           else if (event.target.value==4){
              this.result="Believe in yourself: Cultivate self-belief and confidence. Remind yourself of your strengths and past accomplishments."
            }
           else if (event.target.value==5){
              this.result="Set realistic and achievable goals: Break down large goals into smaller, more manageable steps. This makes them feel less daunting and increases motivation."
            }
           else if (event.target.value==6){
              this.result="Surround yourself with positive influences: Spend time with people who uplift and inspire you. Limit exposure to negativity."
            }
           else if (event.target.value==7){
              this.result="Practice self-compassion: Treat yourself with the same kindness and understanding you would offer a friend."
            }
           else if (event.target.value==8){
              this.result="Engage in activities that bring you joy: Make time for hobbies, passions, and activities that bring you happiness and fulfillment."
            }
           else if (event.target.value==9){
              this.result="Prioritize self-care: Make sure to take care of your physical and mental health through activities like exercise, healthy eating, and sufficient sleep."
            }
           else if (event.target.value==10){
              this.result="Never stop learning: Continuously seek new knowledge and experiences. Learning keeps your mind sharp and expands your horizons."
            }
          }

          else{
             alert("Please Enter The Value Between 1 To 10")
              window.location.reload()
          }   
  }
  restart(){
    window.location.reload()
  }
}
