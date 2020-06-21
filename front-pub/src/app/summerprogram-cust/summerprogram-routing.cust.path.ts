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
**Date: Sat Jun 20 2020 19:57:43 GMT-0700 (Pacific Daylight Time)



// Path under summerprogram/cust/
export const SummerprogramRoutingCustPath = [
  // your customization goes here
];
**** End of recent updates.<<<*/
