import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../config/firebase';

const MESSAGES_COLLECTION = 'messages';

/**
 * Submit contact form or project brief submission from portfolio site.
 */
export const submitPublicMessage = async (messageData) => {
  try {
    const docRef = await addDoc(collection(db, MESSAGES_COLLECTION), {
      type: messageData.type || 'contact', // 'contact' or 'project_brief'
      source: messageData.source || 'portfolio_site',
      status: 'unread',
      name: messageData.name || '',
      email: messageData.email || '',
      phone: messageData.phone || '',
      businessName: messageData.businessName || '',
      subject: messageData.subject || '',
      message: messageData.message || '',
      projectType: messageData.projectType || '',
      timeline: messageData.timeline || '',
      budget: messageData.budget || '',
      pages: messageData.pages || '',
      features: messageData.features || [],
      mainGoal: messageData.mainGoal || '',
      targetAudience: messageData.targetAudience || '',
      designStyle: messageData.designStyle || '',
      contentReadiness: messageData.contentReadiness || '',
      extraNotes: messageData.extraNotes || '',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    return docRef.id;
  } catch (error) {
    console.error('Error submitting portfolio message:', error);
    throw error;
  }
};