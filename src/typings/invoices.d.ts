declare interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
}

declare interface Invoice {
  number: number;
  created_at: string;
  items: InvoiceItem[];
}
