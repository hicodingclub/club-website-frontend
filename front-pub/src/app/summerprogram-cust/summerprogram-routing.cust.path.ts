import { SummerProgramHomeComponent } from './cust/summerProgramHome.component';
import { SPSignUpComponent } from './cust/enroll/spsign-up.component';

// Path under summerprogram/cust/
export const SummerprogramRoutingCustPath = [
  { path: '',  redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: SummerProgramHomeComponent },
  { path: 'enroll', component: SPSignUpComponent },
  // your customization goes here
];
/*>>> Please check this recent updates and merge with existing ones***
**Date: Wed Jun 24 2020 21:02:26 GMT-0700 (Pacific Daylight Time)



// Path under summerprogram/cust/
export const SummerprogramRoutingCustPath = [
  // your customization goes here
];
**** End of recent updates.<<<*/
