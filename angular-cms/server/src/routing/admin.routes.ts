import { Router, Response, Request } from 'express';
import CategoryService from '../services/category.service';

class AdminRoutes {

    constructor() {

        this._router = Router();
        this.mountRoutes();
    }



    private mountRoutes(): void {

        this._router.post( this._namespace + 'forum/listings', this.forumListings );
    }

    /**
     * Routes:
     *      Forum:
     *          Category & Topic Listings
     *          Add, Remove, Update Categories
     *          Add, Remove, Update Topics
     *          Move Topics between Categories
     */

     private forumListings( req: Request, res: Response ): void {

        // res.status( 200 ).json({message: 'forum listings...' });

        CategoryService.all().then( ( categories ) => {

            res.status( 200 ).json( { response: categories } );
        })

        .catch( err => {

            res.status( 400 ).json( {error: err} );
        });
     }

    private _namespace = '/admin/';

    private _router: Router;

    public get router(): Router { return this._router; }
}

export default new AdminRoutes();