import { adminSliceReducer } from "./adminlogin.slice";
import { AdminLoginQueryReducer } from "./adminlogin.query";

const combinedReducer = {
    ...AdminLoginQueryReducer,
    ...adminSliceReducer
    // ...userSliceReducer,
};

// export * from "./user.query";
// export * from "./user.slice";

export * from "./adminlogin.query"
export * from "./adminlogin.slice"

export default combinedReducer;
