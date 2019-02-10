import React, { useState } from "react"
import PropTypes from "prop-types"

import { useRepositoryList } from "../hooks/use-repository-list"

export const RepositoryList = (props) => {
  const [type, setType] = useState("all")
  const { error, isLoading, repositories } = useRepositoryList(props.user, type)
  return (
    <>
      <form>
        <div>
          <input
            type="radio"
            name="repositoryType"
            value="all"
            checked={type === "all"}
            onChange={() => setType("all")}
          />
          All
        </div>
        <div>
          <input
            type="radio"
            name="repositoryType"
            value="owner"
            checked={type === "owner"}
            onChange={() => setType("owner")}
          />
          Owner
        </div>
      </form>
      <pre>
        <code>
          {JSON.stringify({ error, isLoading, repositories }, null, 2)}
        </code>
      </pre>
    </>
  )
}

RepositoryList.propTypes = {
  user: PropTypes.string.isRequired
}
