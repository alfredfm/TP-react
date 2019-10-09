<?php

use App\Core\APIApplication;

require('./autoload.php');
require('./app/helpers/helpers.php');

define('RUNTIME_MODE', 'development');


$application = new APIApplication();
$application->launch();

