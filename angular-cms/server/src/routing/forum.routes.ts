import { Router, Request, Response } from 'express';

class ForumRoutes {
    
    constructor() {

        this._router = Router();    
        this.mountRoutes();
    }
    
    private _namespace = '/forum';
    _router: Router;

    public get router() { return this._router; }

    mountRoutes(): void {

        this._router.get( this._namespace + '/test', this.test );
    };

    test( req, res ): void {

        res.status( 200 ).json({ message: 'Success!' });
    };
}

export default new ForumRoutes();