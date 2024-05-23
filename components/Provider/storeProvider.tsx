"use client";

import type { AppStore } from "@/Store/store";
import { MakeStore } from "@/Store/store";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";


interface Props {
  readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = MakeStore();
  }


  return <Provider store={storeRef.current}>{children}</Provider>;
};