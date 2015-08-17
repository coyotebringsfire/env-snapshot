# env-snapshot

## Synopsis

This module consolidates much of the information available from the os and system modules.

## Code Example

```
var snap = require('env-snapshot').EnvSnapshot();

{ os_type: 'Darwin',
  os_platform: 'darwin',
  os_arch: 'x64',
  os_release: '14.4.0',
  os_uptime: 851114,
  os_loadavg: [ 2.69970703125, 2.28173828125, 2.10693359375 ],
  os_freemem: 19603456, 
  os_totalmem: 4294967296,
  os_hostname: "Macintosh.local",
  os_cpus: [ 
    { model: 'Intel(R) Core(TM) i5-2467M CPU @ 1.60GHz',
      speed: 1600,
      times: { user: 38507260, nice: 0, sys: 38378080, idle: 690700020, irq: 0 } },
    { model: 'Intel(R) Core(TM) i5-2467M CPU @ 1.60GHz',
      speed: 1600,
      times: { user: 9716310, nice: 0, sys: 10044040, idle: 747818970, irq: 0 } },
    { model: 'Intel(R) Core(TM) i5-2467M CPU @ 1.60GHz',
      speed: 1600,
      times: { user: 36005170, nice: 0, sys: 27752540, idle: 703821640, irq: 0 } },
    { model: 'Intel(R) Core(TM) i5-2467M CPU @ 1.60GHz',
      speed: 1600,
      times: { user: 9878260, nice: 0, sys: 10249660, idle: 747451380, irq: 0 } } ],
  process_env: { TERM_PROGRAM: 'Apple_Terminal',
    TERM: 'xterm-256color',
    SHELL: '/bin/bash',
    TMPDIR: '/var/folders/w2/w_46s8dj17ng79jbhcw43hjh0000gn/T/',
    Apple_PubSub_Socket_Render: '/private/tmp/com.apple.launchd.yV8Ki2T0TF/Render',
    TERM_PROGRAM_VERSION: '343.7',
    OLDPWD: '/Users/aumkara/workspace',
    TERM_SESSION_ID: '4D1CAABF-971C-478E-9538-2380B6969E11',
    USER: 'aumkara',
    SSH_AUTH_SOCK: '/private/tmp/com.apple.launchd.0KXgjMucaz/Listeners',
    __CF_USER_TEXT_ENCODING: '0x1F5:0x0:0x0',
    PATH: '/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/opt/X11/bin:/usr/local/mysql/bin:/usr/local/mysql/bin',
    PWD: '/Users/aumkara/workspace/bunyan-merge-files',
    LANG: 'en_US.UTF-8',
    XPC_FLAGS: '0x0',
    XPC_SERVICE_NAME: '0',
    HOME: '/Users/aumkara',
    SHLVL: '1',
    LOGNAME: 'aumkara',
    DISPLAY: '/private/tmp/com.apple.launchd.n1GS8doizh/org.macosforge.xquartz:0',
    SECURITYSESSIONID: '186a5',
    _: '/usr/local/bin/node' },
  process_version: 'v0.12.0',
  process_versions: { 
    http_parser: '2.3',
    node: '0.12.0',
    v8: '3.28.73',
    uv: '1.0.2',
    zlib: '1.2.8',
    modules: '14',
    openssl: '1.0.1l' 
  },
  process_config: { 
    target_defaults: { 
      cflags: [],
      default_configuration: 'Release',
      defines: [],
      include_dirs: [],
      libraries: [] },
    variables: { 
      clang: 1,
      host_arch: 'x64',
      icu_data_file: 'icudt54l.dat',
      icu_data_in: '../../deps/icu/source/data/in/icudt54l.dat',
      icu_endianness: 'l',
      icu_gyp_path: 'tools/icu/icu-generic.gyp',
      icu_locales: 'en,root',
      icu_path: './deps/icu',
      icu_small: true,
      icu_ver_major: '54',
      node_install_npm: true,
      node_prefix: '',
      node_shared_cares: false,
      node_shared_http_parser: false,
      node_shared_libuv: false,
      node_shared_openssl: false,
      node_shared_v8: false,
      node_shared_zlib: false,
      node_tag: '',
      node_use_dtrace: true,
      node_use_etw: false,
      node_use_mdb: false,
      node_use_openssl: true,
      node_use_perfctr: false,
      openssl_no_asm: 0,
      python: '/usr/bin/python',
      target_arch: 'x64',
      uv_library: 'static_library',
      uv_parent_path: '/deps/uv/',
      uv_use_dtrace: true,
      v8_enable_gdbjit: 0,
      v8_enable_i18n_support: 1,
      v8_no_strict_aliasing: 1,
      v8_optimized_debug: 0,
      v8_random_seed: 0,
      v8_use_snapshot: false,
      want_separate_host_toolset: 0 
    }
  }, 
  process_memoryUsage: { rss: 14405632, heapTotal: 12835584, heapUsed: 5432120 },
  process_umask: 18
}

```

## Motivation

For testing it's nice to have a snapshot of the environment when the test was run.

## Installation

```
npm install env-snapshot
```

```
https://github.com/coyotebringsfire/env-snapshot
```

## Tests

```
$ npm test
```

## License

ISC
