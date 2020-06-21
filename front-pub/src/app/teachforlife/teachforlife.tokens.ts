import { InjectionToken } from '@angular/core';

import { teachforlife_server_root_uri } from '../teachforlife-cust/teachforlife.tokens.value';

export const Teachforlife_SERVER_ROOT_URI = new InjectionToken<string>(
    'Teachforlife_SERVER_ROOT_URI',
    {
        factory: (): string => teachforlife_server_root_uri,
        providedIn: 'root',
    },
);