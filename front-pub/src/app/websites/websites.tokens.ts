import {
  InjectionToken
} from '@angular/core';
import {
  websites_server_root_uri
} from '../websites-cust/websites.tokens.value';
export const Websites_SERVER_ROOT_URI = new InjectionToken < string > ('Websites_SERVER_ROOT_URI', {
  factory: (): string => websites_server_root_uri,
  providedIn: 'root',
}, );