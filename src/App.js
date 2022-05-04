import MyRoutes from "./components/MyRoutes";
import ProductContextProvider from "./Context/ProductContextProvider";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <MyRoutes />
      </ProductContextProvider>
    </div>
  );
}

export default App;
