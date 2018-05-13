var webpack=require('webpack')
const webpackConfig = require('./config/webpack.dev')
webpack(webpackConfig).run(function (err, stats) {
    if (err) {
        console.error(err.stack || err);
        if (err.details) {
            console.error(err.details);
        }
        return;
    }
    const info = stats.toJson({
        assets: false,
        hash: true,
        colors: true,
    });
    if (stats.hasErrors()) {
        console.error(info.errors);
    }

    if (stats.hasWarnings()) {
        console.warn(info.warnings);
    }
    console.log("build 完成")
    process.stdout.write(stats.toString() + "\n");

})