export const ActionTypes = {
  EXAMPLE: {
    GET: {
      ALL: { REDUCER: "EXAMPLE_GET_ALL_REDUCER", SAGA: "EXAMPLE_GET_ALL_SAGA" },
      ONE: { REDUCER: "EXAMPLE_GET_ONE_REDUCER", SAGA: "EXAMPLE_GET_ONE_SAGA" }
    },
    NEW: {
      ARRAY: {
        REDUCER: "EXAMPLE_NEW_ARRAY_REDUCER",
        SAGA: "EXAMPLE_NEW_ARRAY_SAGA"
      },
      ONE: { REDUCER: "EXAMPLE_NEW_ONE_REDUCER", SAGA: "EXAMPLE_NEW_ONE_SAGA" }
    }
  }
};

export const Server = {
  URL_LOCAL: "http://localhost"
};
