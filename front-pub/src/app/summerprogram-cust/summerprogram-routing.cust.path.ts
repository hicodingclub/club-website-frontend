import { SummerProgramHomeComponent } from './cust/summerProgramHome.component';
import { SPSignUpComponent } from './cust/enroll/spsign-up.component';
import { SPConformationComponent } from './cust/sp-confirmation/sp-confirmation.component';

// Path under summerprogram/cust/
export const SummerprogramRoutingCustPath = [
  { path: '',  redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: SummerProgramHomeComponent },
  { path: 'enroll', component: SPSignUpComponent },
  { path: 'confirm', component: SPConformationComponent },
  // your customization goes here
];
/*>>> Please check this recent updates and merge with existing ones***
**Date: Thu Jun 25 2020 13:50:35 GMT-0700 (Pacific Daylight Time)



// Path under summerprogram/cust/
export const SummerprogramRoutingCustPath = [
  // your customization goes here
];
**** End of recent updates.<<<*/
