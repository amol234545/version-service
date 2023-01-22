# VersionService

VersionService is a version controller to be used with our module __VersionService__ on __Roblox__.

## Prep 

In ``data.json``,edit ``current`` and ``versions`` for this to work.

Here is a example:

``
{
  "versions":[
    {
   "version":"0.0.1",
   "release_notes":""
   }
  ],
  "current":{
   "version":"0.0.1",
   "release_notes":""
  }
}
``

### Using it

In ``Version.new(url)`` set the **url** parameter to the glitch url of your project.

Then you can get the current version with this:

``version.current()``

Or a version list by using this:

``version.list()``

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/version-service)


