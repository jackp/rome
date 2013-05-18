#!/bin/sh

## NOTE sh NOT bash. This script should be POSIX sh only, since we don't
## know what shell the user has. Debian uses 'dash' for 'sh', for
## example.

# Let's display everything on stderr.
exec 1>&2

set -e
set -u

PREFIX="/usr/local"
UNAME=`uname`

## Debian and OSX supported
if [ "$UNAME" != "Linux" -a "$UNAME" != "Darwin" ] ; then
    echo "Sorry, this OS is not supported yet."
    exit 1
fi

##############################################################
## Linux Install script
##############################################################

if [ "$UNAME" = "Linux" ]; then
	## Install packages ##
	echo "Installing packages. This may prompt you for your password"
	sudo add-apt-repository -y ppa:chris-lea/node.js # Latest version of Node
	sudo apt-get update -yqq
	sudo apt-get install -yqq python-software-properties python g++ make nodejs rubygems

	## Install Compass
	sudo gem install compass sass

	## Install Grunt-cli
	sudo npm uninstall -g grunt
	sudo npm install -g grunt-cli bower

	## Install npm modules
	cd .. && npm install
	## Install bower modules
	cd .. && bower install

	exit 1
fi

##############################################################
## OSX Install script
##############################################################

if [ "$UNAME" = "Darwin" ]; then
	echo "This is OSX"
	exit 1
fi