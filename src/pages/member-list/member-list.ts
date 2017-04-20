import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MemberList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-member-list',
  templateUrl: 'member-list.html',
})
export class MemberList {
  members:Array<any>

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.members = [
      {id:666,name:"啊喂",age:18,sex:"famale",avatar:"assets/img/mao.jpg"},
      {id:777,name:"Elvis",age:36,sex:"male",avatar:"assets/img/mao1.jpg"},
      {id:555,name:"SiSi",age:25,sex:"famale",avatar:"assets/img/mao2.jpg"},
      {id:678,name:"Yanis",age:28,sex:"male",avatar:"assets/img/mao3.jpg"},
      {id:999,name:"PKey",age:27,sex:"male",avatar:"assets/img/mao5.jpg"},
    ]
  }
  
  up(){
      this.members.sort(function(a,b){return a.age-b.age});  
  }
  down(){
      this.members.sort(function(a,b){return b.age-a.age});  
  }
  random(){
      this.members.sort(function(a,b){return a.id-b.id});  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberList');
  }

}
