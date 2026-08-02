import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../config/firebase';

const PAYMENTS_COLLECTION = 'payments';

/**
 * Write Paystack reference record upon successful checkout.
 */
export const recordPaystackSuccess = async (paystackResponse, extraDetails = {}) => {
  try {
    const docRef = await addDoc(collection(db, PAYMENTS_COLLECTION), {
      reference: paystackResponse.reference,
      email: extraDetails.email || '',
      amountGhs: extraDetails.amountGhs || 0,
      amountPesewas: extraDetails.amountGhs ? extraDetails.amountGhs * 100 : 0,
      currency: 'GHS',
      status: 'success',
      channel: paystackResponse.channel || 'paystack',
      createdAt: serverTimestamp()
    });

    return docRef.id;
  } catch (error) {
    console.error('Error recording payment:', error);
    throw error;
  }
};