This is the temporary home for the Sector Media Gallery add on.

Sector is a Drupal distribion targeted towards Drupal site builders and site owners who are looking for a fully configured Drupal project out of the box. Content owners and editors will find an intuitive content management, great authoring experiences and administration that does not require coding. https://www.drupal.org/project/sector


IMPORTANT:

change name of module's composer.json file to quyetthang122/sector-media-gallery, check composer.json in repo

To include this, add the repo to your composer.json

"sector.media.gallery": { "url": "https://github.com/quyetthang122/sector-media-gallery.git", "type": "git" } 

Add the repo to your composer.json in the require section

"quyetthang122/sector_media_gallery": "dev-master"

Run composer update to get the module and it's dependencies

composer update quyetthang122/sector_media_gallery
