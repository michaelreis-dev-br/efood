import { useDispatch, useSelector } from "react-redux";
import { open } from "../../store/reducers/offcanvas";
import { useFormik } from "formik";
import { usePurchaseMutation } from "../../services/api";
import Offcanvas from "./index";

const OffcanvasController = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const [purchase, { data }] = usePurchaseMutation();

  const formik = useFormik({
    initialValues: {
      customerName: "",
      addressStreet: "",
      addressNumber: "",
      addressComplement: "",
      addressCity: "",
      addressRegionalCode: "",
      cardName: "",
      cardNumber: "",
      cardCvv: "",
      cardMonth: "",
      cardYear: "",
    },
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco,
        })),
        delivery: {
          receiver: values.customerName,
          address: {
            description: values.addressStreet,
            city: values.addressCity,
            zipCode: values.addressRegionalCode,
            number: values.addressNumber,
            complement: values.addressComplement,
          },
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: values.cardCvv,
            expires: { month: values.cardMonth, year: values.cardYear },
          },
        },
      })
        .unwrap()
        .then((response) => {
          dispatch(open("OrderPlaced"));
        });
    },
  });

  return <Offcanvas formik={formik} data={data} />;
};

export default OffcanvasController;
