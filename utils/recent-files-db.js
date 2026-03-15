const DB_NAME = 'webpify_assets';
const DB_VERSION = 2;
const STORES = [
    'recent_compressor',
    'recent_converter',
    'recent_resizer',
    'recent_gif',
    'recent_svg',
    'recent_videotogif',
];

function openDB() {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open(DB_NAME, DB_VERSION);
        req.onupgradeneeded = (e) => {
            const db = e.target.result;
            for (const store of STORES) {
                if (!db.objectStoreNames.contains(store))
                    db.createObjectStore(store, { keyPath: 'id' });
            }
        };
        req.onsuccess = (e) => resolve(e.target.result);
        req.onerror = (e) => reject(e.target.error);
    });
}

export async function saveRecent(storeName, items) {
    try {
        const db = await openDB();
        const tx = db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        store.clear();
        for (const item of items) store.put(item);
        await new Promise((resolve, reject) => {
            tx.oncomplete = resolve;
            tx.onerror = (e) => reject(e.target.error);
        });
    } catch (e) { /* silently fail */ }
}

export async function loadRecent(storeName) {
    try {
        const db = await openDB();
        const tx = db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        return new Promise((resolve) => {
            const req = store.getAll();
            req.onsuccess = () => resolve(req.result || []);
            req.onerror = () => resolve([]);
        });
    } catch (e) { return []; }
}

export async function clearRecent(storeName) {
    try {
        const db = await openDB();
        const tx = db.transaction(storeName, 'readwrite');
        tx.objectStore(storeName).clear();
    } catch (e) { /* silently fail */ }
}
