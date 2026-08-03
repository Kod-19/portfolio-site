import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../config/firebase";

const getDateValue = (value) => {
  if (!value) return 0;
  if (typeof value.toDate === "function") return value.toDate().getTime();
  if (value instanceof Date) return value.getTime();
  return new Date(value).getTime();
};

export const portfolioService = {
  async getServices() {
    try {
      const q = query(collection(db, "services"), orderBy("sortOrder", "asc"));
      const snapshot = await getDocs(q);
      return snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));
    } catch (error) {
      console.error("Error fetching services:", error);
      return [];
    }
  },

  async getTestimonials() {
    try {
      const q = query(
        collection(db, "testimonials"),
        where("approved", "==", true),
      );
      const snapshot = await getDocs(q);
      const testimonials = snapshot.docs
        .map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
        }))
        .filter((item) => item.approved === true);

      testimonials.sort(
        (a, b) => getDateValue(b.createdAt) - getDateValue(a.createdAt),
      );

      return testimonials;
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return [];
    }
  },

  async getTeamMembers() {
    try {
      const q = query(
        collection(db, "teamMembers"),
        orderBy("sortOrder", "asc"),
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));
    } catch (error) {
      console.error("Error fetching team members:", error);
      return [];
    }
  },

  async getFaqItems() {
    try {
      const q = query(collection(db, "faq"), orderBy("sortOrder", "asc"));
      const snapshot = await getDocs(q);
      return snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));
    } catch (error) {
      console.error("Error fetching FAQ items:", error);
      return [];
    }
  },

  async getGalleryItems() {
    try {
      const q = query(collection(db, "gallery"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      return snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));
    } catch (error) {
      console.error("Error fetching gallery items:", error);
      return [];
    }
  },

  /**
   * Fetch all published projects ordered by sort index
   */
  async getPublishedProjects() {
    try {
      const q = query(
        collection(db, "projects"),
        where("publishStatus", "==", "published"),
      );
      const snapshot = await getDocs(q);
      const projects = snapshot.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .filter((project) => project.publishStatus === "published");

      projects.sort((a, b) => {
        const sortDifference =
          (Number(a.sortOrder) || 0) - (Number(b.sortOrder) || 0);
        if (sortDifference !== 0) return sortDifference;
        return getDateValue(b.createdAt) - getDateValue(a.createdAt);
      });

      return projects;
    } catch (error) {
      console.error("Error fetching published projects:", error);
      return [];
    }
  },

  /**
   * Fetch all published blog posts
   */
  async getPublishedBlogPosts() {
    try {
      const q = query(
        collection(db, "blogPosts"),
        where("publishStatus", "==", "published"),
      );
      const snapshot = await getDocs(q);
      const posts = snapshot.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .filter((post) => post.publishStatus === "published");

      posts.sort((a, b) => getDateValue(b.createdAt) - getDateValue(a.createdAt));
      return posts;
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return [];
    }
  },

  /**
   * Fetch a single blog post by slug
   */
  async getBlogPostBySlug(slug) {
    try {
      const q = query(
        collection(db, "blogPosts"),
        where("publishStatus", "==", "published"),
      );
      const snapshot = await getDocs(q);
      const post = snapshot.docs
        .map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }))
        .find(
          (item) =>
            item.slug === slug && item.publishStatus === "published",
        );

      return post || null;
    } catch (error) {
      console.error("Error fetching post by slug:", error);
      return null;
    }
  },

  async getGlobalSettings() {
    try {
      const docRef = doc(db, "settings", "global");
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        return snapshot.data();
      }
      return null;
    } catch (error) {
      console.error("Error loading global settings:", error);
      return null;
    }
  },

  /**
   * Submit a contact message from portfolio contact form
   */
  async sendContactMessage(formData) {
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        name: formData.name || "",
        email: formData.email || "",
        subject: formData.subject || "Portfolio Inquiry",
        message: formData.message || "",
        status: "unread",
        createdAt: serverTimestamp(),
      });

      // Optional: Add to activity log for admin overview
      await addDoc(collection(db, "activityLogs"), {
        action: "New Contact Message",
        summary: `New message from ${formData.name || formData.email}`,
        entityType: "message",
        createdAt: serverTimestamp(),
      });

      return docRef.id;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  },

  /**
   * Fetch global site settings (SEO, public contact email, phone)
   */
  async getSiteSettings() {
    try {
      const docRef = doc(db, "siteSettings", "global");
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        return snapshot.data();
      }
      return null;
    } catch (error) {
      console.error("Error fetching site settings:", error);
      return null;
    }
  },

  async getPublicSettings() {
    return this.getSiteSettings();
  },

  // Add this method to portfolioService.js

  /**
   * Record a successful Paystack transaction directly to Firestore
   */
  async recordPayment(paymentData) {
    try {
      const docRef = await addDoc(collection(db, "payments"), {
        reference: paymentData.reference || "",
        email: paymentData.email || "",
        amountGhs: Number(paymentData.amountGhs || 0),
        amountPesewas: Number(
          paymentData.amountPesewas ||
            Math.round(Number(paymentData.amountGhs || 0) * 100),
        ),
        currency: paymentData.currency || "GHS",
        channel: paymentData.channel || "paystack",
        status: paymentData.status || "success",
        source: paymentData.source || "portfolio_checkout",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      try {
        await addDoc(collection(db, "activityLogs"), {
          action: "Payment Received",
          summary: `Payment of GHS ${paymentData.amountGhs} from ${paymentData.email}`,
          entityType: "payment",
          entityId: docRef.id,
          createdAt: serverTimestamp(),
        });
      } catch (activityError) {
        console.warn("Payment saved, but activity log was not created:", activityError);
      }

      return docRef.id;
    } catch (error) {
      console.error("Error recording payment:", error);
      throw error;
    }
  },
};
