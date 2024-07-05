import mongoose from "mongoose";
import {
  IGenericErorMessages,
  IGenericErrorResponse,
} from "../interface/error";

export default function handleValidationError(
  err: mongoose.Error.ValidationError
): IGenericErrorResponse {
  const errors: IGenericErorMessages[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      };
    }
  );

  return {
    statusCode: 400,
    message: "Validation Error",
    errorMessages: errors,
  };
}
