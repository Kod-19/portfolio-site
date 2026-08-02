import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  query,
  where,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../../config/firebase';

export const portfolioService = {
  /**
   * Fetch all published projects ordered by sort index
   */
  async getPublishedProjects() {
    try {
      const q = query(
        collection(db, 'projects'),
        where('publishStatus', '==', 'published'),
        orderBy('sortOrder', 'asc')
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    } catch (error) {
      console.error('Error fetching published projects:', error);
      return [];
    }
  },

  /**
   * Fetch all published blog posts
   */
  async getPublishedBlogPosts() {
    try {
      const q = query(
        collection(db, 'blogPosts'),
        where('publishStatus', '==', 'published'),
        orderBy('createdAt', 'desc')
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }
  },

  /**
   * Fetch a single blog post by slug
   */
  async getBlogPostBySlug(slug) {
    try {
      const q = query(
        collection(db, 'blogPosts'),
        where('slug', '==', slug),
        where('publishStatus', '==', 'published')
      );
      const snapshot = await getDocs(q);
      if (snapshot.empty) return null;
      const firstDoc = snapshot.docs[0];
      return { id: firstDoc.id, ...firstDoc.data() };
    } catch (error) {
      console.error('Error fetching post by slug:', error);
      return null;
    }
  },

  /**
   * Submit a contact message from portfolio contact form
   */
  async sendContactMessage(formData) {
    try {
      const docRef = await addDoc(collection(db, 'messages'), {
        name: formData.name || '',
        email: formData.email || '',
        subject: formData.subject || 'Portfolio Inquiry',
        message: formData.message || '',
        status: 'unread',
        createdAt: serverTimestamp(),
      });

      // Optional: Add to activity log for admin overview
      await addDoc(collection(db, 'activityLogs'), {
        action: 'New Contact Message',
        summary: `New message from ${formData.name || formData.email}`,
        entityType: 'message',
        createdAt: serverTimestamp(),
      });

      return docRef.id;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  },

  /**
   * Fetch global site settings (SEO, public contact email, phone)
   */
  async getSiteSettings() {
    try {
      const docRef = doc(db, 'siteSettings', 'global');
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        return snapshot.data();
      }
      return null;
    } catch (error) {
      console.error('Error fetching site settings:', error);
      return null;
    }
  },

  // Add this method to portfolioService.js

/**
 * Record a successful Paystack transaction directly to Firestore
 */
async recordPayment(paymentData) {
    try {
      const docRef = await addDoc(collection(db, 'payments'), {
        reference: paymentData.reference || '',
        email: paymentData.email || '',
        amountGhs: Number(paymentData.amountGhs || 0),
        channel: paymentData.channel || 'paystack',
        status: paymentData.status || 'success',
        createdAt: serverTimestamp(),
      });

      // Log to dashboard activity feed
      await addDoc(collection(db, 'activityLogs'), {
        action: 'Payment Received',
        summary: `Payment of GHS ${paymentData.amountGhs} from ${paymentData.email}`,
        entityType: 'payment',
        createdAt: serverTimestamp(),
      });

      return docRef.id;
    } catch (error) {
      console.error('Error recording payment:', error);
      throw error;
    }
  }
};