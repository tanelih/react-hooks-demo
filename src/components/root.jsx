import React from "react"

import { hot } from "react-hot-loader/root"

import { RepositoryList } from "../components/repository-list"

export const Root = hot(() => (
  <React.StrictMode>
    <RepositoryList user="tanelih" />
  </React.StrictMode>
))
