//test if email is valid
export const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

//check if name is valid
export const TEXT_REGEX = /^(?:[A-Za-z]+)(?:[A-Za-z0-9 _]*)$/

/* 1 uppercase, 1lowercase, 1 number, no-white space, least 8 character */
export const PASSWORD_REGEX =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,})\S$/