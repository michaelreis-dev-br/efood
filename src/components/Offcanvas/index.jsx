import { useSelector, useDispatch } from "react-redux";
import { close } from "../../store/reducers/offcanvas";
import Cart from "../Cart";
import Delivery from "../Delivery";
import OrderPlaced from "../OrderPlaced";
import Purchase from "../Purchase";
import * as S from "./styles";

const COMPONENTS = {
  Cart,
  Delivery,
  OrderPlaced,
  Purchase,
};

const Offcanvas = ({ formik, data }) => {
  const dispatch = useDispatch();
  const { isOpen, component } = useSelector((state) => state.offcanvas);
  const ComponentToRender = COMPONENTS[component];

  const closeOffcanvas = () => {
    dispatch(close());
  };

  return (
    <S.Offcanvas className={isOpen ? "open" : ""}>
      <aside onClick={closeOffcanvas}></aside>
      <form className="container" onSubmit={formik.handleSubmit}>
        {ComponentToRender && <ComponentToRender formik={formik} data={data} />}
      </form>
    </S.Offcanvas>
  );
};

export default Offcanvas;
