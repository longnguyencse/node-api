# node-api

Command line: 

npm install

npm install --save body-parser

npm install --save bcryptjs
==========================================================================================================================================
By default, NPM simply installs a package under node_modules. When you're trying to install dependencies for your app/module, you would need to first install them, and then add them (along with the appropriate version number) to the dependencies section of your package.json.

The --save option instructs NPM to include the package inside of the dependencies section of your package.json automatically, thus saving you an additional step.

In addition, there are the complementary options --save-dev and --save-optional which save the package under devDependencies and optionalDependencies, respectively. This is useful when installing development-only packages, like grunt or your testing library.
===========================================================================================================================================

Connect mongodb

REStful api post user:
json:
{
	"user": {
		"username" : "testUser",
		"email": "test@gmail.com",
		"pwd": "123"
	}
}

