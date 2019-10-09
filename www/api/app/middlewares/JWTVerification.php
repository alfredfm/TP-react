<?php


namespace App\App\Middlewares;


use App\App\Controllers\ProfilTypeController;
use App\App\Entities\API_Acteurs;
use App\App\Entities\API_Application;
use App\App\Entities\API_Apprenants;
use App\App\Entities\API_Entreprises;
use App\Core\Authentication\JWT;
use App\Core\Request\Request;
use App\Core\Response\APIResponse;

class JWTVerification
{
    public function hasDevToken()
    {

    }

    public function developerAppAuthentication()
    {
        $request = Request::get();

        if ($request->has('dev_app_token') && $request->has('app_id'))
        {
            $app = new API_Application($request->get('app_id'));
            if ($app->isValid() && $request->get('dev_app_token') === $app->get('dev_app_token'))
            {
                return (object) [
                    'application' => $app,
                ];
            }
            APIResponse::Unauthorized();
        }
        //Error
        APIResponse::NotFound();
    }

    public function developerUserAuthentication()
    {
        $request = Request::get();
        $User = null;

        if ($request->has('dev_user_token') && $request->has('user_id') && $request->has('type'))
        {
            $User = ProfilTypeController::getRessourceTypeInstanceByType($request->get('type'), $request->get('user_id'));

            $App = API_Application::where('dev_user_token', '=', $request->get('dev_user_token'))
                ->flush()
                ->first();

            if ($User->isValid() && $App->isValid())
            {
                return (object) [
                    'user' => $User,
                ];
            }
            APIResponse::BadRequest();
        }
        //Error
        APIResponse::NotFound();
    }

    public function applicationAuthentication()
    {
        $request = Request::get();
        if ($request->has('dev_app_token') && $request->has('app_id'))
        {
            $app = new API_Application($request->get('app_id'));
            if ($app->isValid() && $request->get('dev_app_token') === $app->get('dev_app_token'))
            {
                return (object) [
                    'application' => $app,
                ];
            }
            APIResponse::BadRequest();
        }
        // check for basic auth token in header or qs
        $Jwt = $this->basicTokenAuth();
        // Check if token is valid and if $Jwt is
        if ( !(!is_null($Jwt) && ($Jwt->isType( 'API_Application', 'app_token' ))) ) APIResponse::Unauthorized();
        //
        if (Request::get()->has('id_application') && (Request::get('id_application') !== $Jwt->getRessourceIdentifier())) APIResponse::NotFound();
        //  return a response
        $owner = $Jwt->getRessourceType();
        //
        return (object) [
            'application' => new $owner ( $Jwt->getRessourceIdentifier() ),
            'token' => (object) [
                'token' => $Jwt->getToken(),
                'payload' => $Jwt->getPayload()
            ],
            'Jwt' => $Jwt,
        ];
    }
    //
    public function userAuthentication()
    {
        $request = Request::get();
        $User = null;

        if ($request->has('dev_user_token') && $request->has('user_id') && $request->has('type'))
        {

            $User = ProfilTypeController::getRessourceTypeInstanceByType($request->get('type'), $request->get('user_id'));

            $App = API_Application::where('dev_user_token', '=', $request->get('dev_user_token'))
                ->flush()
                ->first();

            if ($User->isValid() && $App->isValid())
            {
                return (object) [
                    'user' => $User,
                ];
            }
            APIResponse::BadRequest();
        }
        // check for basic auth token in header or qs
        $Jwt = $this->basicTokenAuth();
        // Check if token is valid and if $Jwt is
        if ( !(!is_null($Jwt) && ($Jwt->isType( 'API_Apprenants|API_Acteurs|API_Entreprises', 'user_token' ))) ) APIResponse::Unauthorized();
        //
        if (Request::get()->has('id_user') && (Request::get('id_user') !== $Jwt->getRessourceIdentifier())) APIResponse::NotFound();
        //  return a response
        $owner = $Jwt->getRessourceType();
        //
        return (object) [
            'user' => new $owner ( $Jwt->getRessourceIdentifier() ),
            'token' => (object) [
                'token' => $Jwt->getToken(),
                'payload' => $Jwt->getPayload()
            ],
            'Jwt' => $Jwt,
        ];
    }

    private function basicTokenAuth()
    {
        //
        $Jwt = null;
        // check if token comes from headers
        if ( Request::headers()->has('Authorization') )
        {
            $Jwt = new JWT( str_replace('Bearer ', '', Request::headers()->get('Authorization')) );
        } else if ( Request::get()->has('token') ) // or from query string
        {
//            die('ook');
            $Jwt = new JWT( Request::get()->get('token') );
        }
        //
        if ( !$Jwt ) APIResponse::NotFound();
        //
        if ( !( $Jwt->isValid() ) ) return null;

        return $Jwt;
    }
}