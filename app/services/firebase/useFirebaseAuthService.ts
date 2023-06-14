import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { authUserStore, setAuthUser } from "../../store/slices/AuthUserSlice";
import { firebaseAuth } from "./firebase";

const useFirebaseAuthService = () => {
  const dispatch = useAppDispatch();
  const { authUser } = useAppSelector(authUserStore);
  const [isAppReady, setIsAppReady] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(
      firebaseAuth,
      (currentUser: User) => {
        // console.log("currentUser", currentUser);
        dispatch(setAuthUser(currentUser));
        setIsAppReady(true);
      }
    );

    return () => {
      unsubscribeFromAuthStateChanged();
    };
  }, [firebaseAuth]);

  const logInUser = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((response: UserCredential) => {
        dispatch(setAuthUser(response?.user));
        return Promise.resolve(response);
      })
      .catch((error: any) => {
        return Promise.reject(error);
      });
  };

  const registerUser = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((response: UserCredential) => {
        dispatch(setAuthUser(response?.user));
        return Promise.resolve(response);
      })
      .catch((error: any) => {
        return Promise.reject(error);
      });
  };

  const logOutUser = async () => {
    const user = await signOut(firebaseAuth);
    return Promise.resolve(user);
  };

  const updateUserProfile = async (data: UpdateUserProfile) => {
    const user: User = firebaseAuth.currentUser;
    return await updateProfile(user, data)
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error: any) => {
        return Promise.reject(error);
      });
  };

  const updateUserEmail = async (newEmail: string) => {
    const user: User = firebaseAuth.currentUser;
    return await updateEmail(user, newEmail)
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error: any) => {
        return Promise.reject(error);
      });
  };
  const updateUserPassword = async (newPass: string) => {
    const user: User = firebaseAuth.currentUser;
    return await updatePassword(user, newPass)
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error: any) => {
        return Promise.reject(error);
      });
  };

  return {
    logInUser,
    logOutUser,
    registerUser,
    updateUserProfile,
    updateUserEmail,
    updateUserPassword,
    authUser,
    isAppReady,
  };
};

export default useFirebaseAuthService;
