import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../models/task.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  public newTaskTittle: string = "";
  tasks: Task[] = [];

  constructor(private taskService: TaskService,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks(){
    this.tasks = this.taskService.getTasks();
  }

  addTask(){
    console.log('add');
    if(!this.newTaskTittle.trim()) return;
    this.taskService.addTask(this.newTaskTittle);
    this.newTaskTittle= "";
    this.loadTasks();
  }

  toggleTaskCompleted(id: string){
    console.log('toggle');
    this.taskService.toggleTaskCompleted(id);
    this.loadTasks();
  }

  deleteTask(id: string){
    console.log('delete');
    this.taskService.deleteTask(id);
    this.loadTasks();
  }

  async alertConfirmDelete(idTask: string) {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Are you sure that you wish to delete this task?',
      // subHeader: 'A Sub Header Is Optional',
      // message: 'A message should be a short, complete sentence.',
      // buttons: ['Cancel','Open', 'Action'],
      // Buttons can also be configured as an object (json): (NOTE. For further you can view IONIC docs in ion-alert)
      buttons: [
        {
          text: 'Accept',
          cssClass: 'alert-button-confirm',
          handler: () => {console.log('Click on Ok');
                          this.deleteTask(idTask);}
        },
        {
          text: 'Cancelar',
          // handler: () => {console.log('Click on Cancel')}
          role: 'cancel',
          cssClass: 'alert-button-cancel'
        }
      ]
    });
    await alert.present();
  }
}
