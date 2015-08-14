var os = require('os');

module.exports.EnvSnapshot 	= function( options ) {
	return { 
		os_type: os.type(),
	    os_platform: os.platform(),
	    os_arch: os.arch(),
	    os_release: os.release(),
	    os_uptime: os.uptime(),
	    os_loadavg: os.loadavg(),
	    os_freemem: os.freemem(), 
	    os_totalmem: os.totalmem(),
	    os_cpus: os.cpus(),
	    process_env: process.env,
	    process_version: process.version,
	    process_versions: process.versions,
	    process_config: process.config, 
	    process_memoryUsage: process.memoryUsage(),
	    process_umask: process.umask()
	};
}