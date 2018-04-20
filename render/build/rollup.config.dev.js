import { name, version, author } from '../package.json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import vueRollup from 'rollup-plugin-vue';
import replace from 'rollup-plugin-replace'
console.log("name", name);
console.log("version", version);
console.log("author", author);
export default {
    input: 'src/index.js',
    output: {
        file: './dist/index.js',
        format: 'umd',
        name: 'MyGood',
        sourcemap: true,
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.VUE_ENV': JSON.stringify('browser')
        }),
        resolve({
        }),
        commonjs(),
        vueRollup({
            css: './dist/demo.css'
        }),
        babel({
            exclude: 'node_modules/**'
        }),
    ]
}