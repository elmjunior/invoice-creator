/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const LOCAL_STORAGE_TYPES = {
  settings: '@invoices:settings',
  invoices: '@invoices:invoices',
};

export const asyncLocalStorage = {
  setItem(key: string, value: string) {
    return Promise.resolve().then(() => {
      localStorage.setItem(key, value);
    });
  },
  getItem(key: string) {
    return Promise.resolve().then(() => {
      return localStorage.getItem(key);
    });
  },
  removeItem(key: string) {
    return Promise.resolve().then(() => {
      return localStorage.removeItem(key);
    });
  },
};

type GetSettings = () => Promise<SettingsInput | null>;
export const getSettings: GetSettings = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      asyncLocalStorage
        .getItem(LOCAL_STORAGE_TYPES.settings)
        .then((settings) => {
          resolve(settings ? JSON.parse(settings) : null);
        });
    }, 500);
  });
};

type GetInvoices = () => Promise<Invoice[] | null>;
export const getInvoices: GetInvoices = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      asyncLocalStorage
        .getItem(LOCAL_STORAGE_TYPES.invoices)
        .then((invoice) => {
          resolve(invoice ? JSON.parse(invoice) : null);
        });
    }, 500);
  });
};

type SaveInvoice = (newInvoice: Invoice) => Promise<Invoice>;
export const saveInvoice: SaveInvoice = (newInvoice) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      getInvoices().then((invoices) => {
        let newInvoicesArray: Invoice[] = [];
        if (invoices) {
          newInvoicesArray = [...invoices];
        }
        newInvoicesArray = [...newInvoicesArray, newInvoice];
        asyncLocalStorage.setItem(
          LOCAL_STORAGE_TYPES.invoices,
          JSON.stringify(newInvoicesArray),
        );
        resolve(newInvoice);
      });
    }, 0);
  });
};
