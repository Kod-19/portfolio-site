import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "../../config/firebase";

/**
 * Fetch all published projects for portfolio display.
 */
export const getPublishedProjects = async () => {
  try {
    const q = query(
      collection(db, "projects"),
      where("publishStatus", "==", "published"),
      orderBy("sortOrder", "asc"),
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching published projects:", error);
    return []; // Return empty array or static fallback on error
  }
};

/**
 * Fetch all published blog updates for public blog display.
 */
export const getPublishedBlogPosts = async () => {
  try {
    const q = query(
      collection(db, "blogPosts"),
      where("publishStatus", "==", "published"),
      orderBy("publishedAt", "desc"),
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching published posts:", error);
    return [];
  }
};
