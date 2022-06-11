import {db} from "../firebase";
async function getOrders(db) {
    const ordersCol = collection(db, 'Orders');
    const citySnapshot = await getDocs(ordersCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }