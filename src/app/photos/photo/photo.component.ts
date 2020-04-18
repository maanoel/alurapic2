import { Component, Input } from "@angular/core";

@Component({
    selector: 'ap-photo',
    templateUrl: './photo.component.html',
    styleUrls: ['./photo.component.css']
    //template o atributo template é para quando for escever o HTML DENTRO DO PRÓPRIO COMPONENTE
})

export class PhotoComponent{

  @Input() description = '';
  @Input () url = '';
  

}