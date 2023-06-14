import {
  DocumentData,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from "firebase/firestore";

export const convertSnapShotToDataArray = (
  snapshot: QuerySnapshot<DocumentData>
) => {
  const documents = snapshot.docs.map(
    (doc: QueryDocumentSnapshot<DocumentData>) => ({
      firebaseId: doc.id,
      ...doc.data(),
    })
  );
  return documents;
};

export const getRefinedFirebaseAuthErrorMessage = (
  errorMesssage: string
): string => {
  // const temp:string = errorMesssage?.includes("already") ? "User already exists" : errorMesssage;
  const temp: string = errorMesssage
    ?.replace("Firebase: ", "")
    .replace(/\(auth.*\)\.?/, "");
  return temp;
};
