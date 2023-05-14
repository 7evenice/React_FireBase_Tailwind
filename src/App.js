import Header from "./component/Header";
import {Route,Routes} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import MainContainer from "./component/MainContainer";
import CreateContainer from "./component/CreateContainer";

function App() {
  return (
      <AnimatePresence mode={"wait"}>
          <div className='w-screen h-screen flex flex-col'>
              <Header></Header>
              <main className='mt-16 md:mt-24 p-8 w-full'>
                  <Routes>
                      <Route path="/*" element={MainContainer} />
                      <Route path="/createItem" element={CreateContainer} />
                  </Routes>
              </main>
          </div>
      </AnimatePresence>
  );
}

export default App;
