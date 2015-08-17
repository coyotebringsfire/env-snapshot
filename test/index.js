var should 	= require('should'),
	util 	= require('util');

var requiredProperties = [ "os_type", "os_platform", "os_arch", "os_release", "os_uptime", "os_loadavg", "os_freemem", "os_totalmem", "os_cpus", "os_hostname", "process_env", "process_version", "process_versions", "process_config",  "process_memoryUsage", "process_umask" ]

describe("env-snapshot", function() {
	var envSnapshot 	= require('../').EnvSnapshot();

	for( property in requiredProperties ) {
		(function() {
			var prop =	requiredProperties[property];
			it( util.format("should have %s in the response", prop), function doIt() {
				should(envSnapshot[prop]).be.ok;
			});
		})();
	}
})