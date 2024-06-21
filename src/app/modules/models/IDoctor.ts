import { IConsultation } from "./IConsultation";
import { IPatient } from "./IPatient";

export interface IDoctor {
  id: number;
  name: string;
  cpf: string;
  crm: string;
  specialty: string;
  email: string;
  phone: string;
  uf: string;
  patients: IPatient[];
  consultations: IConsultation[];
}

