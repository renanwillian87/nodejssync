import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';
const __filename = import.meta.url.replace('file://', '');

const fibonacci = function (code, n) {
	if (n < 1) return 0;
	if (n <= 2) return 1;
	return fibonacci(code, n - 1) + fibonacci(code, n - 2)
};

if (isMainThread) {
	console.log('main');
	const a = new Worker(__filename, { workerData: { code: 'a', number: 200 } });
	const b = new Worker(__filename, { workerData: { code: 'b', number: 200 } });
	const c = new Worker(__filename, { workerData: { code: 'c', number: 200 } });
	const d = new Worker(__filename, { workerData: { code: 'd', number: 200 } });
	d.on('message', function (message) {
		console.log(message);
	});
} else {
	console.log('thread', workerData.code, workerData.number);
	const result = fibonacci(workerData.code, workerData.number);
	parentPort.postMessage(`thread ${workerData.code} ${result}`);
}