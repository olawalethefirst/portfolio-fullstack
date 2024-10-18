import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { AppData } from "@/data/appDataBackup";

export const getAppData = async () => {
  const querySnapshot = await getDocs(collection(firestore, "data"));

  const appData = querySnapshot.docs[0].data();

  return appData as AppData;
};