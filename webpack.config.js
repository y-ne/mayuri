import path from 'path';
import { fileURLToPath } from 'url';
import nodeExternals from 'webpack-node-externals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    target: 'node',
    mode: 'development',
    entry: './src/index.ts',
    experiments: {
        outputModule: true
    },
    externalsType: 'module',
    externals: [nodeExternals({
        importType: 'module'
    })],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        module: true,
        chunkFormat: 'module',
        library: {
            type: 'module'
        }
    }
};