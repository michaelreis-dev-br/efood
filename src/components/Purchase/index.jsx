import { useDispatch, useSelector } from "react-redux";
import { open } from "../../store/reducers/offcanvas";
import { IMaskInput as InputMask } from "react-imask";
import { formatPrice } from "../../assets/utils/price";
import * as S from "./styles";

const Purchase = ({ formik }) => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cart);

  const getTotalPrice = () => {
    return items.reduce((acc, item) => {
      return (acc += item.preco);
    }, 0);
  };

  const goToDelivery = () => {
    dispatch(open("Delivery"));
  };

  return (
    <S.Purchase>
      <div className="input-container">
        <div>
          <h2>Pagamento - Valor a pagar {formatPrice(getTotalPrice())}</h2>
          <label htmlFor="cardName">Nome no cartão *</label>
          <InputMask
            className={formik.checkInputHasError("cardName")}
            id="cardName"
            mask={/^[A-Za-z\s]+$/}
            onAccept={(value) =>
              formik.setFieldValue("cardName", value.toUpperCase())
            }
            placeholder="AYRTON SENNA DA SILVA"
            value={formik.values.cardName}
          />
        </div>
        <div className="w-75">
          <div>
            <label htmlFor="cardNumber">Número do cartão *</label>
            <InputMask
              className={formik.checkInputHasError("cardNumber")}
              id="cardNumber"
              mask="0000 0000 0000 0000"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="0000 0000 0000 0000"
              type="text"
              value={formik.values.cardNumber}
            />
          </div>
          <div>
            <label htmlFor="cardCvv">CVV *</label>
            <InputMask
              className={formik.checkInputHasError("cardCvv")}
              id="cardCvv"
              mask="000"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="000"
              type="text"
              value={formik.values.cardCvv}
            />
          </div>
        </div>
        <div className="w-50">
          <div>
            <label htmlFor="cardMonth">Mês de vencimento *</label>
            <InputMask
              className={formik.checkInputHasError("cardMonth")}
              id="cardMonth"
              mask="00"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="00"
              type="text"
              value={formik.values.cardMonth}
            />
          </div>
          <div>
            <label htmlFor="cardYear">Ano de vencimento *</label>
            <InputMask
              className={formik.checkInputHasError("cardYear")}
              id="cardYear"
              mask="0000"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="0000"
              type="text"
              value={formik.values.cardYear}
            />
          </div>
        </div>
        <div>
          <small>* campos obrigatórios</small>
        </div>
      </div>
      <div className="button-container">
        <button type="submit">Finalizar pagamento</button>
        <button type="button" onClick={goToDelivery}>
          Voltar para a edição de endereço
        </button>
      </div>
    </S.Purchase>
  );
};

export default Purchase;
