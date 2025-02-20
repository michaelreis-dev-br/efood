import { useDispatch, useSelector } from "react-redux";
import { open } from "../../store/reducers/offcanvas";
import { useFormik } from "formik";
import * as Yup from "yup";
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
    validationSchema: Yup.object({
      customerName: Yup.string()
        .min(5, "Mínimo de 5 caracteres")
        .required("Obrigatório"),
      addressStreet: Yup.string().required("Obrigatório"),
      addressNumber: Yup.string().required("Obrigatório"),
      addressComplement: Yup.string(),
      addressCity: Yup.string().required("Obrigatório"),
      addressRegionalCode: Yup.string()
        .min(9, "CEP inválido")
        .required("Obrigatório"),
      cardName: Yup.string().required("Obrigatório"),
      cardNumber: Yup.string()
        .min(19, "Formato inválido")
        .required("Obrigatório"),
      cardCvv: Yup.string().min(3, "Formato inválido").required("Obrigatório"),
      cardMonth: Yup.string()
        .min(2, "Formato inválido")
        .required("Obrigatório"),
      cardYear: Yup.string().min(4, "Formato inválido").required("Obrigatório"),
    }),
    onSubmit: (values, { resetForm }) => {
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
          resetForm();
        });
    },
  });

  const checkInputHasError = (field) => {
    if (!formik.touched[field]) return "";
    return formik.errors[field] ? "is-invalid" : "is-valid";
  };

  return <Offcanvas formik={{ ...formik, checkInputHasError }} data={data} />;
};

export default OffcanvasController;
