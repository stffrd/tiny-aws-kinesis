export default {
    input : "./src/index.js",

    output : [
        {
            file   : "./dist/kinetics.cjs.js",
            format : "cjs",
        },
        {
            file   : "./dist/kinetics.es.js",
            format : "es",
        },
    ],
}
;
