import React from "react"

import { hot } from "react-hot-loader/root"

import { RepositoryList } from "../components/repository-list"
import { Provider } from "./context-example"

export const Root = hot(() => (
  // Note that the 'strict' mode seems to cause double renders - it doesn't
  // really matter but it is something to keep in mind.
  <React.StrictMode>
    <Provider />
    <RepositoryList user="tanelih" />
  </React.StrictMode>
))
