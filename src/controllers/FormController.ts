import { FormEvent } from "preact/compat";

// Controla los datos del formulario
 export const formController = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const elTarget = e.target as HTMLFormElement;
  const username = elTarget.username?.value;
  const password = elTarget.password?.value;
  const rpassword = elTarget.samepassword?.value;
  const name = elTarget.myname?.value;
  const province = elTarget.province?.value;
  const phone = elTarget.phone?.value;
  
  return { username, password, rpassword, name, province, phone };
};

