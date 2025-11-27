import { useState } from "react";
import { Button } from "@/components/ui/button";

// Firebase (npm version)
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

// ---- Firebase config ----
const firebaseConfig = {
  apiKey: "AIzaSyA3ZO_LdVn8vsJMR4Iq9_5WEtqCirvqWQg",
  authDomain: "hangout-ea0bc.firebaseapp.com",
  projectId: "hangout-ea0bc",
  storageBucket: "hangout-ea0bc.firebasestorage.app",
  messagingSenderId: "962894952106",
  appId: "1:962894952106:web:46208e6fbf73697ff442d3",
  measurementId: "G-YKDD5KVCFG"
};

// ---- Initialize Firebase ----
const app = initializeApp(firebaseConfig);
getAnalytics(app); // optional but harmless
const db = getFirestore(app);

// -----------------------

const Appointment = () => {
  const [yesSelected, setYesSelected] = useState(false);
  const [dateValue, setDateValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!yesSelected || !dateValue) return;

    await addDoc(collection(db, "appointments"), {
      createdAt: serverTimestamp(),
      dateChosen: dateValue,
    });

    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-lg mx-auto space-y-10 text-center">

        <h1 className="text-4xl font-serif font-bold">
          Let’s hang out
        </h1>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          Up for a crazy hang out?
        </p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* YES / NO */}
            <div className="flex items-center justify-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={yesSelected}
                  onChange={() => setYesSelected(!yesSelected)}
                  className="w-5 h-5"
                />
                <span className="text-lg">Yes</span>
              </label>

              <label className="flex items-center gap-2 text-muted-foreground opacity-60">
                <input type="checkbox" disabled className="w-5 h-5" />
                <span className="text-lg">No (option not available)</span>
              </label>
            </div>

            {/* DATE */}
            <div>
              <label className="block text-left font-medium mb-1">Date</label>
              <input
                type="date"
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
                className="w-full p-3 border rounded-md bg-background"
                required
              />
            </div>

            {/* WHERE (DISABLED) */}
            <div>
              <label className="block text-left font-medium mb-1">Where?</label>
              <input
                type="text"
                disabled
                placeholder="Trust me, I get it"
                className="w-full p-3 border rounded-md bg-muted cursor-not-allowed text-muted-foreground"
              />
            </div>

            {/* SUBMIT */}
            <Button type="submit" size="lg" className="w-full">
              Confirm
            </Button>
          </form>
        ) : (
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Saved.<br />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointment;