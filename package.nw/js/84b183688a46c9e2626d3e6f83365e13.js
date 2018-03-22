'use strict';
! function ( require, directRequire ) {
    function a() {
        let a = b(),
            c = i.lastVersion;
        a > c && nw.Shell.openExternal( l.NEW_VERSION_LOG )
    }

    function b( a ) {
        return a = a || global.appVersion, a += '', a = a.replace( /\./g, '' ), parseInt( a )
    }

    function c() {
        let a = nw.App.getDataPath(),
            b = g.join( a, 'Secure Preferences' ),
            c = f.readFileSync( b, 'utf8' ),
            d = JSON.parse( c ),
            {
                extensions: e
            } = d,
            {
                settings: h
            } = e,
            i = chrome.runtime.id,
            j = h[ i ];
        j.events = [], j.filtered_events = {}, f.writeFileSync( b + '_temp', JSON.stringify( d ) );
        let l = require( './d28a711224425b00101635efe1034c99.js' ),
            m = g.join( k.WeappLog, `fixpreferences.log` );
        f.writeFileSync( b, JSON.stringify( d ) );
        let o = n.spawn( l.getFixpreferencesPath(), [ b, `${b}_temp`, m, 300 ], {
            stdio: 'ignore',
            detached: !0
        } );
        o.unref()
    }

    function d() {
        m && c(), nw.App.quit()
    }

    function e( a ) {
        try {
            if ( !f.existsSync( a ) ) return;
            let b = f.statSync( a );
            if ( b.isDirectory() ) {
                let b = f.readdirSync( a );
                if ( 0 < b.length )
                    for ( let c = 0, d = b.length; c < d; c++ ) e( g.join( a, b[ c ] ) );
                f.rmdirSync( a )
            } else f.unlinkSync( a )
        } catch ( a ) {}
    }
    const f = require( 'fs' ),
        g = require( 'path' ),
        h = require( 'http' ),
        i = require( './84858de8a097c9cf84ff2c2e3d86e2a9.js' ),
        j = require( './72653d4b93cdd7443296229431a7aa9a.js' ),
        k = require( './92320c1386e6db6a6f2556736a9bc280.js' ),
        l = require( './f171257bbcaef547a3cf27266ccb0db2.js' ),
        m = 'darwin' === process.platform,
        n = require( 'child_process' ),
        o = require( './8baad0631295efb1130774c37d944951.js' );
    var p = 9973;
    module.exports = {
        getAvailablePort: async function () {
            return o.findFreePort( '127.0.0.1' )
        },
        getType: function ( a ) {
            return Object.prototype.toString.call( a ).toLowerCase().split( ' ' )[ 1 ].replace( ']', '' )
        },
        getAppConfig: function () {
            return {
                isDev: !!process.execPath.match( 'nw.exe' ) || !!process.execPath.match( 'nwjs.app' ) || !!process.execPath.match( 'nwjs.exe' ),
                isBeta: !0 === nw.App.manifest.beta,
                isGamma: !0 === nw.App.manifest.gamma
            }
        },
        checkUpdateApp: async function () {
            return new Promise( ( c, e ) => {
                let h = global.appVersion,
                    j = k.WeappApplication;
                if ( a(), i.forceUpdateVersion ) {
                    let a = i.forceUpdateVersion;
                    i.removeForceUpdateVersion();
                    let k = b( a ),
                        l = b( h ),
                        o = '';
                    if ( l < k ) o = `当前${h}版本太旧，请正在新版本${a}...`;
                    else if ( l > k ) o = `当前版本${h}存在问题, 回退至版本${a}...`;
                    else return c();
                    const p = m ? 'darwin' : 'x64' === process.arch ? 'x64' : 'ia32';
                    let q = `${p}_${a.replace(/\./g,'')}.${m?'dmg':'exe'}`,
                        r = g.join( j, q );
                    if ( f.existsSync( r ) ) {
                        let a = global.contentDocument.querySelector( '#container' );
                        a.innerHTML = `<div class="app-up-data" style="text-align:center;margin-top: 50%; font-size: 16px;padding:20px;">${o}</div>`;
                        let b = m ? 'open' : q,
                            c = m ? [ q ] : [];
                        try {
                            let e = n.spawn( b, c, {
                                detached: !0,
                                cwd: j
                            } );
                            e.on( 'close', ( b ) => {
                                0 !== b && ( a.innerHTML = '<div class="app-up-data" style="text-align:center;margin-top: 50%;font-size: 16px; padding:20px;">\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u542F\u52A8</div>' ), setTimeout( () => {
                                    d()
                                }, 2e3 )
                            } )
                        } catch ( a ) {
                            setTimeout( () => {
                                nw.Shell.openItem( g.join( j, q ) ), setTimeout( () => {
                                    d()
                                }, 2e3 )
                            }, 200 )
                        }
                        return e()
                    }
                }
                c()
            } )
        },
        openInspectWin: function () {
            nw.Window.open( 'about:blank', {
                show: !1,
                width: 799,
                height: 799
            }, ( a ) => {
                a.maximize(), a.window.location = 'chrome://inspect/#devices', a.show()
            } )
        },
        getVersionNum: b,
        compareLibVersion: function ( a, b ) {
            if ( !a && !b ) return 0;
            if ( !a ) return -1;
            if ( !b ) return 1;
            const c = /\d+/g,
                d = a.match( c ),
                e = b.match( c );
            if ( !d ) return -1;
            if ( !e ) return 1;
            const f = d.map( ( a ) => parseInt( a ) ),
                g = e.map( ( a ) => parseInt( a ) ),
                h = d.length > e.length ? e.length : d.length;
            for ( let c = 0; c < h; c++ ) {
                if ( f[ c ] < g[ c ] ) return -1;
                if ( f[ c ] > g[ c ] ) return 1
            }
            return f.length === g.length ? 0 : f.length < g.length ? -1 : 1
        },
        quit: d,
        rmSync: e
    }
}( require( 'lazyload' ), require );
