export interface PaymentDTO {
    paymentId?: number; // Optional for new payments
    orderId?: number; // Optional, if associated with an order
    amount: number; // Required field
    paymentDate: Date; // Required field
  }
  