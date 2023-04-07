import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  registrationForm: FormGroup | any;
  userName :string | any;
  password: any;
  showPassword: any;
  userID: any;
  profile: any;



   constructor(
     public routing:Router,
     private authService:AuthService,
     private router:Router){ 
   

   }
   ngOnInit(): void 
   {
     this. registrationForm = new FormGroup({
      userName:new FormControl('',[Validators.required,Validators.minLength(3)]),
      password:new FormControl('',[Validators.required,Validators.minLength(0)])  
    });
   
   }

  //  getInputType() {
  //   if (this.showPassword) {
  //     return 'text';
  //   }
  //   return 'password';
  // }

  // toggleShowPassword() {
  //   this.showPassword = !this.showPassword;
  // }
  onLogin() {  
    
    console.log('UserName',this.registrationForm.value.userName)
    console.log('password',this.registrationForm.value.password) 
    
    const payload  = {"email": this.registrationForm.value.userName, "password":this.registrationForm.value.password}
    console.log('the time is given as1:', new Date().getMilliseconds()); 
    sessionStorage.setItem('token', JSON.stringify(payload));
    console.log('localstorage',localStorage);

    this.authService.login(payload).subscribe(data => {
       console.log("profileData",data, "profileDataUserID", data.userID);
      let userID = data.userID;
     
   

      console.log('the time is given as2:', new Date().getMilliseconds());
      
      this.routing.navigate([`/profile/${userID}`]);

      // if (userID){ 
      //   this.authService.getProfiles(userID).subscribe(data =>{
      //   console.log("getProfilessssssssssss", data ); 
      //    this.authService.profile = data;
      //   // this.routing.navigate([`/auth/profile`])

      // })
      // }
    })
    console.log('the time is given as3:', new Date().getMilliseconds());
  }
}


