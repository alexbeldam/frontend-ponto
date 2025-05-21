import React from "react";
import ReactDOM from "react-dom/client";
import App from "./AppProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    <ToastContainer
      position='bottom-right'
      autoClose={2000}
      limit={1}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme='dark'
    />
  </React.StrictMode>
);
