interface ICreateStudentDTO {
  id: number;
  name: string;
  cpf: string;
  birthdate: Date;
  payment_method: string;
}

export { ICreateStudentDTO };
