let TEST_MODE;
let HOST;
let confs;

TEST_MODE = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');

function getHost() {
  if (TEST_MODE) {
    HOST = "dev";
  } else {
    HOST = window.location.hostname;
  }
  return HOST;
}
/*
  ** Configurations
*/
function getConfigurations (host) {
  switch (host) {
    case "development.fr", "localhost":
      confs = {
        URL_API: "http://localhost/api",
        FAVICON: '/logo.png',
        TITLE: 'Reporting',
        META_NAME_CONTENT: '#000',
        MANIFEST: '/manifest.json',
        PRIMARY_BG: '#000',
        SITE_MARCHAND: 'https://www.doselec.com/fr/'
      };
      break;
      //
    case "prod":
      confs = {
        URL_API: "http://mondomaine.fr/api",
        FAVICON: '/logo.png',
        TITLE: 'Reporting',
        META_NAME_CONTENT: '#000',
        MANIFEST: '/manifest.json',
        PRIMARY_BG: '#000',
        SITE_MARCHAND: 'https://www.doselec.com/fr/'
      };
      break;
    default:
      confs = {
        URL_API: "http://localhost/api",
        FAVICON: '/logo.png',
        TITLE: 'Reporting',
        META_NAME_CONTENT: '#000',
        MANIFEST: '/manifest.json',
        PRIMARY_BG: '#000',
        SITE_MARCHAND: 'https://www.doselec.com/fr/'
      };
      break;

  }
}

/*
  ** Setting attributes for index.html
*/
export function applyConfiguration() {
  /*
    ** Favicon
  */
  document.getElementById('FAVICON').setAttribute('href', confs.FAVICON);
  /*
    ** Manifest
  */
  document.getElementById('MANIFEST').setAttribute('href', confs.MANIFEST);
  /*
    ** Manifest
  */
  document.getElementById('TITLE').innerHTML = confs.TITLE;
  /*
    ** Meta Themecolor
  */
  document.getElementById('META_NAME_CONTENT').setAttribute('content', confs.META_NAME_CONTENT);

}

getConfigurations(getHost());

applyConfiguration();

export { confs };
