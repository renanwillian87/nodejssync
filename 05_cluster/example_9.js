// 1 core - ab -n 16 -c 1 localhost:8000/
// 1 core - 14.4s
// 2 cores - ab -n 16 -c 2 localhost:8000/
// 2 cores - 8.2s
// 4 cores - ab -n 16 -c 4 localhost:8000/
// 4 cores - 4.8s
// 8 cores - ab -n 16 -c 8 localhost:8000/
// 8 cores - 4.6s

import cluster from 'cluster';
import os from 'os';
import http from 'http';

const fibonacci = function (n) {
	return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

if (cluster.isMaster) {
	console.log('master', process.pid);
	const availableCpus = os.cpus().length;
	const cpus = 4;
	for (let i = 0; i < cpus; i++) {
		const worker = cluster.fork();
		worker.on('message', function (message) {
			console.log('return', message);
		});
	}
} else {
	console.log('worker', process.pid);
	http.createServer((req, res) => {
		res.writeHead(200);
		const result = fibonacci(43);
		process.send(`worker ${process.pid}: ${result.toString()}`);
		res.write(`worker ${process.pid}: ${result.toString()}`);
		res.end();
	}).listen(8000);
}