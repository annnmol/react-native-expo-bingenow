import {
  DocumentData,
  QuerySnapshot,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { firebaseDb, firebaseStorage } from "./firebase";
import { convertSnapShotToDataArray } from "./utils";
import { authUserStore } from "../../store/slices/AuthUserSlice";
import { useAppSelector } from "../../store";

const useFirebaseDBService = () => {
  const { authUser } = useAppSelector(authUserStore);

  //* Get documents from a collection Public
  const getFirebasePublic = async (endpoint: string) => {
    let collectionRef = collection(firebaseDb, endpoint);
    return await getDocs(collectionRef)
      .then((snapshot: QuerySnapshot<DocumentData>) => {
        let documents = convertSnapShotToDataArray(snapshot);
        return Promise.resolve(documents);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  //* Get documents from a collection
  const getFirebase = async (endpoint: string) => {
    // let collectionRef = collection(firebaseDb, endpoint);
    const queryRef = query(
      collection(firebaseDb, endpoint),
      where("uid", "==", authUser?.uid)
    );
    return await getDocs(queryRef)
      .then((snapshot: QuerySnapshot<DocumentData>) => {
        let documents = convertSnapShotToDataArray(snapshot);
        return Promise.resolve(documents);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  //* Get document from a collection
  const getFirebaseById = async (endpoint: string, id: string) => {
    const queryRef = query(
      collection(firebaseDb, endpoint),
      where("uid", "==", authUser?.uid),
      where("__name__", "==", id)
    );
    return await getDocs(queryRef)
      .then((snapshot: QuerySnapshot<DocumentData>) => {
        let documents = convertSnapShotToDataArray(snapshot);
        return Promise.resolve(documents);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  //* Add a document to a collection
  const postFirebase = async (endpoint: string, data: any) => {
    data = {
      ...data,
      uid: authUser?.uid,
    };
    let collectionRef = collection(firebaseDb, endpoint);
    return await addDoc(collectionRef, data)
      .then((res) => {
        return Promise.resolve(res);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  //* Delete a document from a collection
  const deleteFirebase = async (endpoint: string, docId: string) => {
    let collectionRef = collection(firebaseDb, endpoint);
    const documentRef = doc(collectionRef, docId);
    
    return await deleteDoc(documentRef)
      .then((res) => {
        return Promise.resolve(res);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  //* Update a document in a collection
  const updateFirebase = async (
    endpoint: string,
    docId: string,
    updatedData: any
  ) => {
    updatedData = {
      ...updatedData,
      uid: authUser?.uid,
    };

    let collectionRef = collection(firebaseDb, endpoint);
    const documentRef = doc(collectionRef, docId);

    return await updateDoc(documentRef, updatedData)
      .then((res) => {
        return Promise.resolve(res);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  //* Upload a file to Firebase Storage
  const uploadFileFirebase = async (endpoint: string, file: File) => {
    const storageRef = ref(firebaseStorage, endpoint);
    return await uploadBytes(storageRef, file)
      .then((res) => {
        return Promise.resolve(res);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  //* Get a file download URL from Firebase Storage
  const getFileFirebase = async (endpoint: string) => {
    const storageRef = ref(firebaseStorage, endpoint);
    return await getDownloadURL(storageRef)
      .then((res) => {
        return Promise.resolve(res);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  return {
    getFirebase,
    postFirebase,
    deleteFirebase,
    updateFirebase,
    uploadFileFirebase,
    getFileFirebase,
    getFirebaseById,
    getFirebasePublic,
  };
};

export default useFirebaseDBService;
