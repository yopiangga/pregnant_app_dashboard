import React from "react";

import { CombineComponents } from "./CombineComponents";
import { LoadingProvider } from "./LoadingContext";
import { PageProvider } from "./PageContext";
import { UserProvider } from "./UserContext";
import { UrlProvider } from "./UrlContext";

const providers = [UserProvider, PageProvider, LoadingProvider, UrlProvider];
export const AppContextProvider = CombineComponents(...providers);
