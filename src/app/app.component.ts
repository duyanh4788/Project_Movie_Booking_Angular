import { ChangeDetectorRef, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from './core/services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tix Angular';
  constructor(public loadingService: LoadingService, private changeDetectorRef: ChangeDetectorRef) { }

  public loading: Boolean = false // define html
  private subscription = new Subscription()

  // get data boolean => service/loading/loading.service
  ngAfterViewInit() {   
    this.subscription.add(this.loadingService.loadingService.subscribe(data => {
      this.loading = data
      this.changeDetectorRef.detectChanges() // khai báo angular sự thay đổi      
    }))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
