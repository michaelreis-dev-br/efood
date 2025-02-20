import { IMaskInput as InputMask } from "react-imask";
import { useDispatch } from "react-redux";
import { open } from "../../store/reducers/offcanvas";
import * as S from "./styles";

const Delivery = ({ formik }) => {
  const dispatch = useDispatch();

  const goToPurchase = () => {
    dispatch(open("Purchase"));
  };

  const goToCart = () => {
    dispatch(open("Cart"));
  };

  return (
    <S.Delivery>
      <div className="input-container">
        <div>
          <h2>Entrega</h2>
          <label htmlFor="customerName">Quem irá receber?</label>
          <input
            id="customerName"
            name="customerName"
            onChange={formik.handleChange}
            type="text"
            value={formik.values.customerName}
          />
        </div>
        <div>
          <label htmlFor="addressStreet">Endereço</label>
          <input
            id="addressStreet"
            name="addressStreet"
            onChange={formik.handleChange}
            type="text"
            value={formik.values.addressStreet}
          />
        </div>
        <div>
          <label htmlFor="addressCity">Cidade</label>
          <input
            id="addressCity"
            name="addressCity"
            onChange={formik.handleChange}
            type="text"
            value={formik.values.addressCity}
          />
        </div>
        <div className="w-50">
          <div>
            <label htmlFor="addressRegionalCode">CEP</label>
            <InputMask
              id="addressRegionalCode"
              mask="00.000-000"
              name="addressRegionalCode"
              onChange={formik.handleChange}
              type="text"
              value={formik.values.addressRegionalCode}
            />
          </div>
          <div>
            <label htmlFor="addressNumber">Número</label>
            <input
              id="addressNumber"
              name="addressNumber"
              onChange={formik.handleChange}
              type="text"
              value={formik.values.addressNumber}
            />
          </div>
        </div>
        <div>
          <label htmlFor="addressComplement">Complemento</label>
          <input
            id="addressComplement"
            name="addressComplement"
            onChange={formik.handleChange}
            type="text"
            value={formik.values.addressComplement}
          />
        </div>
      </div>
      <div className="button-container">
        <button type="button" onClick={goToPurchase}>
          Continuar com o pagamento
        </button>
        <button type="button" onClick={goToCart}>
          Voltar para o carrinho
        </button>
      </div>
    </S.Delivery>
  );
};

export default Delivery;
