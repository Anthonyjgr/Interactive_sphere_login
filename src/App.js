import style from "./App.module.css"
import Spline from '@splinetool/react-spline';
import FormPage from "./components/form";

function App() {

  return (
    <div className={style.container}>
      <div className={style.spline_container}>
        <div className={style.spline}>
          <Spline scene="https://prod.spline.design/zKWaEcGOHzJcxR-P/scene.splinecode" />
        </div>
      </div>
      <div className={style.FormPage_container}>
        <div className={style.FormPage}>
          <FormPage />
        </div>
      </div>
    </div>
  );
}

export default App;




