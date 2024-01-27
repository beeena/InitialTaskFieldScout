import { validateYupSchema, yupToFormErrors } from "formik";
import * as Yup from 'yup';

export const PermitExtensionValidationSchema = Yup.object().shape({
    date: Yup.date().required('Date is required'),
    equipmentNumber: Yup.number().required('Equipment Number is required'),
    
  });

  export const PersonalInfoValidationSchema = Yup.object().shape({

    firstname: Yup.string().required('First Name is required'),
    lastname: Yup.string().required('Last Name is required'),
    phonenumber: Yup.number().required('Phone Number is required'),
    companyname: Yup.string().required('Company Name is required'),
  });

  export const QuestionaireValidationSchema = Yup.object().shape({

    input: Yup.string().required('Inptut is required'),
    textarea: Yup.string().required('TextArea is required'),
    radiofield: Yup.number().required('RadioField is required'),
    checkboxes: Yup.string().required('Checkboxes Name is required'),
    phone: Yup.number().required('Phone is required'),
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required'),
    number: Yup.number().required('Number is required'),
    textcolumn: Yup.string().required('TextColumn is required'),
    inputcolumn: Yup.string().required('InputColumn is required'),

  });
  
  export const initialPermitValues = {
    date: "",
    equipmentNumber: "",
  };
  export const initialPersonalInfoValues = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    companyname: "",
  };

  export const initialQuesValues = {
    input: "",
    textarea: "",
    radiofield: "",
    checkboxes: "",
    phone: "",
    date: "",
    time: "",
    number: "",
    textcolumn: "",
    inputcolumn: "",

  };