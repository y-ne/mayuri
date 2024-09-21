import "reflect-metadata"

import { logger } from './configs/logger.js';
import express from 'express';

const app = express();

const user = [
    {id: 1, name: 'Aine', role: 'admin'},
    {id: 1, name: 'Yui', role: 'user'},
];

const authorize = (...allowed_roles: string[]) => {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        // Todo Here
    };
};

