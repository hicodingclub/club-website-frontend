import { InjectionToken } from '@angular/core';

import { summerprogram_server_root_uri } from '../summerprogram-cust/summerprogram.tokens.value';

export const Summerprogram_SERVER_ROOT_URI = new InjectionToken<string>(
    'Summerprogram_SERVER_ROOT_URI',
    {
        factory: (): string => summerprogram_server_root_uri,
        providedIn: 'root',
    },
);