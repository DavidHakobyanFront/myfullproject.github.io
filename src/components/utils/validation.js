import {emailRegex, usernameRegex, passwordRegex} from "./rejex";

export const usernameValidation = {
    required: "Datark e *",
    pattern: {
        value: usernameRegex,
        message: "Incorrect username"
    }
}
export const emailValidation = {
    required: "Datark e *",
    pattern: {
        value: emailRegex,
        message: "Incorrect email"
    }
}
// export const passwordValidation = {
//     required: "Datark e *",
//     pattern: {
//         value: passwordRegex,
//         message: "Incorrect password"
//     }
// }
