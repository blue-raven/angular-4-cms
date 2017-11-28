import { Router, Request, Response } from 'express';

class ForumRoutes {

    constructor() {

        this._router = Router();

        this.mountRoutes();
    }

    private mountRoutes() {

        this._router.get( this._namespace + '/test', this.test );
    }

    private test( req: Request , res: Response ): void {

        res.status( 200 ).json({ message: 'Success!' });
    }

    private _namespace: string = '/forum';
    public get namespace(): string { return this._namespace; }

    private _router: Router;
    public get router (): Router { return this._router; }
}

export default new ForumRoutes();